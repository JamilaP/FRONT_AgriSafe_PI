import axios from 'axios';
import { BASE_URL } from '@env';

// Configura Axios con la URL base de la API
const API = axios.create({
  baseURL: BASE_URL,
});

// Interceptor para añadir el token a todas las solicitudes protegidas
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Obtén el token del almacenamiento local
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Funciones para interactuar con el backend
export const loginUser = (credentials) => API.post('/auth/login', credentials);
export const registerUser = (userData) => API.post('/auth/register', userData);
export const getUserProfile = () => API.get('/users/profile');
