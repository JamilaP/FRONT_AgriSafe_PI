import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage
import { BASE_URL } from '@env';

console.log('BASE_URL:', BASE_URL);
// Configura Axios con la URL base de la API
const API = axios.create({
  baseURL: BASE_URL,
});


// Interceptor para añadir el token a todas las solicitudes protegidas
API.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('token'); // Obtén el token del almacenamiento local
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error('Error al obtener el token del AsyncStorage:', error);
  }
  return config;
});
 
// Funciones para interactuar con el backend
export const loginUser = (credentials) => API.post('/auth/login', credentials);
export const registerUser = (userData) => API.post('/auth/register', userData);
export const getUserProfile = () => API.get('/users/profile');
export const updateUserProfile = (formData) =>
  API.put('/users/profile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
export const getDiseases = () => API.get('/plants');
export const getDiseaseById = (id) => API.get(`/plants/${id}`);

export const getDiagnosesByUserId = (userId) => API.get(`/diagnoses/user/${userId}`);
export const getDiagnosisById = (id) => API.get(`/diagnoses/${id}`);

