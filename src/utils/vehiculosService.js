import { ENDPOINTS, UrlWithApiDG } from "../ServiceAPI/apiConfig";

export const registrarVehiculo = async (vehiculo) => {
  try {
    const response = await fetch(UrlWithApiDG(ENDPOINTS.registrar), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vehiculo),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al registrar vehículo:", error);
    return { success: false, message: "Error de conexión con el servidor" };
  }
};