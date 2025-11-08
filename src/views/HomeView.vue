<template>
  <v-container class="text-center">
    <h1>Registro de Venta</h1>

    <form @submit.prevent="submit" class="pa-6 mx-auto text-center" style="max-width: 600px;">

      <!-- Sucursal -->
      <v-select
        v-model="idSucursal.value.value"
        :items="sucursales"
        item-title="nombre"
        item-value="id"
        label="Sucursal"
        :error-messages="idSucursal.errorMessage.value"
        required
      ></v-select>

      <!-- Producto -->
      <v-select
        v-model="idProducto.value.value"
        :items="productos"
        item-title="nombre"
        item-value="id"
        label="Producto"
        :error-messages="idProducto.errorMessage.value"
        required
      ></v-select>

      <!-- Cantidad -->
      <v-text-field
        v-model="cantidad.value.value"
        :error-messages="cantidad.errorMessage.value"
        label="Cantidad"
        type="number"
        required
      ></v-text-field>

      <!-- Cliente -->
      <v-text-field
        v-model="nit.value.value"
        :error-messages="nit.errorMessage.value"
        label="NIT del Cliente"
        required
      ></v-text-field>

      <v-text-field
        v-model="nombre.value.value"
        :error-messages="nombre.errorMessage.value"
        label="Nombre del Cliente"
        required
      ></v-text-field>

      <v-btn color="primary" class="me-4" type="submit">
        Registrar Venta
      </v-btn>

      <v-btn color="secondary" @click="handleReset">
        Limpiar
      </v-btn>
    </form>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useField, useForm } from "vee-validate";

// Configuración de Vee Validate
const { handleSubmit, resetForm } = useForm();

// Campos del formulario
const idSucursal = useField("idSucursal", v => (!v ? "Selecciona una sucursal" : true));
const idProducto = useField("idProducto", v => (!v ? "Selecciona un producto" : true));
const cantidad = useField("cantidad", v => (!v ? "Ingresa una cantidad" : true));
const nit = useField("nit", v => (!v ? "Campo requerido" : true));
const nombre = useField("nombre", v => (!v ? "Campo requerido" : true));

// Datos de selects
const sucursales = ref([]);
const productos = ref([]);

// Cargar datos desde el backend con fetch
onMounted(async () => {
  try {
    // Obtener sucursales
    const resSuc = await fetch("https://apiexamenfinal2.onrender.com/api/Sucursales/Sucursales");
    if (!resSuc.ok) throw new Error("Error al obtener sucursales");
    sucursales.value = await resSuc.json();

    // Obtener productos
    const resProd = await fetch("https://apiexamenfinal2.onrender.com/api/Sucursales/productos");
    if (!resProd.ok) throw new Error("Error al obtener productos");
    productos.value = await resProd.json();
  } catch (error) {
    console.error("Error al cargar datos:", error);
    alert("Error al cargar sucursales o productos.");
  }
});

// Envío del formulario
const submit = handleSubmit(async (values) => {
  try {
    const ventaData = {
      venta: {
        id: null,
        idSucursal: parseInt(values.idSucursal),
        fecha: new Date().toISOString().split('T')[0],
        nit: values.nit,
        nombre: values.nombre,
        totalq: 0,
        opcion: "C"
      },
      detalles: [
        {
          id: null,
          idProducto: parseInt(values.idProducto),
          cantidad: parseInt(values.cantidad),
          precio: null,
          subtotal: null,
          opcion: "C"
        }
      ]
    };

    console.log("Enviando venta:", ventaData);

    // Enviar venta al backend
    const res = await fetch("https://apiexamenfinal2.onrender.com/api/Sucursales/venta", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ventaData)
    });

    if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
    const data = await res.json();

    if (data.success) {
      alert(`Venta registrada correctamente. ID: ${data.idVenta}`);
      resetForm();
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Error al registrar venta:", error);
    alert("Ocurrió un error al registrar la venta.");
  }
});

// Limpiar formulario
const handleReset = () => resetForm();
</script>

