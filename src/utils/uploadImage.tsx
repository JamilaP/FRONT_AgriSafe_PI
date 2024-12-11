import * as FileSystem from 'expo-file-system';
import CryptoJS from 'crypto-js';

const OBS_ENDPOINT = 'https://agrisafe.obs.la-south-2.myhuaweicloud.com';
const OBS_ACCESS_KEY_ID = 'K03DANEZBEIMIGH9EYHY';
const OBS_SECRET_ACCESS_KEY = 'cjeiQUel4i7vMy6DwscjOFqIbA4zoYPBQs1jFHau';

/**
 * Función para convertir una cadena base64 a binario
 * @param {string} base64Data - Cadena base64
 * @returns {Uint8Array} - Datos binarios
 */
const base64ToBinary = (base64Data) => {
  const binaryString = atob(base64Data);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

/**
 * Función para generar un identificador único basado en un timestamp
 * @returns {string} - ID único
 */
const generateUniqueId = () => {
  const timestamp = Date.now(); // Obtiene el tiempo actual en milisegundos
  const random = Math.floor(Math.random() * 1000); // Número aleatorio entre 0 y 999
  return `img_${timestamp}_${random}`;
};

/**
 * Subir una imagen al bucket de Huawei OBS usando la API REST
 * @param {string} filePath - Ruta del archivo en el dispositivo
 */
export const uploadImageToOBS = async (filePath) => {
  try {
    // Leer archivo local en formato base64
    const fileContent = await FileSystem.readAsStringAsync(filePath, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // Convertir base64 a binario
    const binaryData = base64ToBinary(fileContent);

    // Crear un identificador único para el archivo
    const objectKey = `images/${generateUniqueId()}.jpg`; // Nombre único para el archivo

    // Crear firma para la solicitud
    const method = 'PUT';
    const bucketName = 'agrisafe';
    const date = new Date().toUTCString();
    const stringToSign = `${method}\n\nimage/jpeg\n${date}\n/${bucketName}/${objectKey}`;
    const signature = CryptoJS.HmacSHA1(stringToSign, OBS_SECRET_ACCESS_KEY).toString(CryptoJS.enc.Base64);
    const authorization = `AWS ${OBS_ACCESS_KEY_ID}:${signature}`;

    // Hacer la solicitud HTTP
    const response = await fetch(`${OBS_ENDPOINT}/${objectKey}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'image/jpeg',
        Authorization: authorization,
        Date: date,
      },
      body: binaryData, // Se usa el binario en lugar del base64
    });

    if (response.ok) {
      console.log('Subida exitosa:', response.status);
      return objectKey; // Devuelve la ruta del archivo en el bucket
    } else {
      console.error('Error al subir la imagen:', response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    throw error;
  }
};
