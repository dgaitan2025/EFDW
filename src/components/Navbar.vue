<template>
  <v-app-bar app color="primary" dark>
    <v-img src="Logo.png" alt="Logo Tienda" max-width="60"  ></v-img>
    <v-toolbar-title class="d-flex align-center">
      <!-- 🖼️ Logo primero -->
      

      <!-- 🏷️ Texto después -->
      <span class="titulo-tienda">Examen Final</span>
    </v-toolbar-title>

    <!-- 🧭 Versión de escritorio -->
    <v-spacer></v-spacer>

    <v-btn v-if="!isMobile" to="/" text prepend-icon="mdi-home">
      Inicio
    </v-btn>
    <v-btn v-if="!isMobile" to="/productos" text prepend-icon="mdi-cart">
      Productos
    </v-btn>
    <v-btn v-if="!isMobile" to="/contacto" text prepend-icon="mdi-phone">
      Contacto
    </v-btn>

    <!-- 📱 Botón hamburguesa (solo móvil) -->
    <v-app-bar-nav-icon v-if="isMobile" @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>

  <!-- 📋 Menú lateral (drawer) -->
  <v-navigation-drawer v-model="drawer" app temporary color="primary" dark>
    <v-list>
      <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.to" @click="drawer = false">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const drawer = ref(false)
const windowWidth = ref(window.innerWidth)

// 🔍 Detectar si es móvil
const isMobile = computed(() => windowWidth.value < 768)

// Actualizar ancho al redimensionar
const updateWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => window.addEventListener('resize', updateWidth))
onUnmounted(() => window.removeEventListener('resize', updateWidth))

// 🔹 Menú de navegación
const menuItems = [
  { title: 'Inicio', to: '/' },
  { title: 'Productos', to: '/productos' },
  { title: 'Contacto', to: '/contacto' },
]
</script>
