import { JSEncrypt } from "jsencrypt";

const FRONTEND_PRIV = import.meta.env.VITE_RSA_FRONT_PRIV;
const BACKEND_PUB = import.meta.env.VITE_RSA_BACK_PUB;




//Encrypta con llave publica de backend
export const encryptRSA = (input = "") => {
  try {
    var crypt = new JSEncrypt();
    crypt.setKey(BACKEND_PUB);
    return crypt.encrypt(input);
  } catch (error) {
    return null;
  }
};


//Desencripta con llave privada de front, el backend encripto con llave publica de front
export const dencryptRSA = (input = "") => {
  try {
    var deCrypt = new JSEncrypt();
    deCrypt.setKey(FRONTEND_PRIV);
    return deCrypt.decrypt(input);
  } catch (error) {
    return null;
  }
};



//Método para el login principal
export const getAuthenticationGetName = (input = {}) => {
  try {
    return encryptRSA(input.token+":"+input.deviceId); //token:deviceId
  } catch (error) {
    return null;
  }
};

//Método para el endpoint login
export const getAuthenticationLogin = (input = {}) => {
  try {
    return encryptRSA(input.token+":"+input.deviceId+":"+input.credentials); //token:deviceId:credential
  } catch (error) {
    return null;
  }
};


//Método para el token
export const getAuthenticationToken = (input = {}) => {
  try {
    return encryptRSA(input.apiKEY+":"+input.deviceId); //apiKey:deviceId
  } catch (error) {
    return null;
  }
};


//Resto de los endpoints 
//token:deviceId:userId:sessionId
export const getAuthentication = (input = {}) => {
  try {
    return encryptRSA(input.token+":"+input.deviceId+":"+input.userId+":"+input.sessionId); //token:deviceId:userId:sessionId
  } catch (error) {
    return null;
  }
};
