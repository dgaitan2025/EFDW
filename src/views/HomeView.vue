<template>
  <v-container class="text-center">
    <h1>Registro de Vehículos</h1>

    <form @submit.prevent="submit" class="pa-6 mx-auto text-center" style="max-width: 600px;">
      <v-text-field v-model="idcolor.value.value" :error-messages="idcolor.errorMessage.value" label="ID Color"
        type="number" required></v-text-field>

      <v-text-field v-model="idmarca.value.value" :error-messages="idmarca.errorMessage.value" label="ID Marca"
        type="number" required></v-text-field>

      <v-text-field v-model="modelo.value.value" :error-messages="modelo.errorMessage.value" label="Modelo"
        type="number" required></v-text-field>

      <v-text-field v-model="chasis.value.value" :error-messages="chasis.errorMessage.value" label="Chasis"
        required></v-text-field>

      <v-text-field v-model="motor.value.value" :error-messages="motor.errorMessage.value" label="Motor"
        required></v-text-field>

      <v-text-field v-model="nombre.value.value" :error-messages="nombre.errorMessage.value" label="Nombre del Vehículo"
        required></v-text-field>

      <v-select v-model="activo.value.value" :items="items" item-title="text" item-value="value" label="Estado"
        required></v-select>

      <v-btn color="primary" class="me-4" type="submit">
        Registrar
      </v-btn>

      <v-btn color="secondary" @click="handleReset">
        Limpiar
      </v-btn>
    </form>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import { registrarVehiculo } from "../utils/vehiculosService";

// Configuración de Vee Validate
const { handleSubmit, resetForm } = useForm();

// Campos del formulario
const idcolor = useField("idcolor", value => (!value ? "Campo requerido" : true));
const idmarca = useField("idmarca", value => (!value ? "Campo requerido" : true));
const modelo = useField("modelo", value => (!value ? "Campo requerido" : true));
const chasis = useField("chasis", value => (!value ? "Campo requerido" : true));
const motor = useField("motor", value => (!value ? "Campo requerido" : true));
const nombre = useField("nombre", value => (!value ? "Campo requerido" : true));
const activo = useField("activo", value => value === null ? "Selecciona el estado" : true);

const items = ref([
  { text: 'Activo', value: 1 },
  { text: 'Inactivo', value: 0 }
]);


// Envío del formulario
const submit = handleSubmit(async (values) => {
  try {
    // Agregamos los campos que no vienen del formulario
    const vehiculo = {
      
      idcolor: parseInt(values.idcolor),
      idmarca: parseInt(values.idmarca),
      modelo: parseInt(values.modelo),
      chasis: values.chasis,
      motor: values.motor,
      nombre: values.nombre,
      activo: parseInt(values.activo),
      accion: "C"
    };

    console.log("Enviando vehículo:", vehiculo);

    const resultado = await registrarVehiculo(vehiculo);

    if (resultado.success) {
      alert(`Vehículo registrado correctamente. ID generado: ${resultado.idGenerado}`);
      resetForm();
    } else {
      alert(`Error: ${resultado.message}`);
    }
  } catch (error) {
    console.error("Error al registrar vehículo:", error);
    alert("Ocurrió un error al registrar el vehículo.");
  }
});

// Limpiar formulario
const handleReset = () => resetForm();
</script>
