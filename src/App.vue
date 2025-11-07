<template>
  <v-app>
    <Navbar />

    <v-main>
      <!-- Aquí se muestran las vistas según la ruta -->
      <router-view />
    </v-main>

    
  </v-app>
  <Footer />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
