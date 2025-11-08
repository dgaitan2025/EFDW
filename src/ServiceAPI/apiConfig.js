// DOminio
export const API_RD = "https://api-llavero-rd.onrender.com"//PRINCIPAL"https://api-llavero-rd.onrender.com" ALTERNO//"https://rd-api-llaveros.onrender.com"//"https://pllaverosweb-d8fnd6d8dyd8hdgb.canadacentral-01.azurewebsites.net"//"https://localhost:7291"//"https://apitect.somee.com"; //RD"http://pruebas.somee.com/"//
const API_DG = "https://apiexamenfinal2.onrender.com"; //DG http://localhost:5299 - https://apiexamenfinal2.onrender.com
const API_biometrica = "https://www.daossystem.pro"


// Endpoints organizados
export const ENDPOINTS = { 
  //Darwin
  registrar:"/api/Vehiculos/Crud",


};

// Helper para armar URLs completas
export const UrlWithApiRD = (endpoint) => `${API_RD}${endpoint}`;
export const UrlWithApiDG = (endpoint) => `${API_DG}${endpoint}`;
export const UrlWithApiFace = (endpoint) => `${API_biometrica}${endpoint}`;