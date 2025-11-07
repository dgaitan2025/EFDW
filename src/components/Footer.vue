<template>
  <v-footer color="primary" dark>
    <v-container class="text-center py-4">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6">
          <div class="text-h6 mb-1">© {{ new Date().getFullYear() }} — Desarrollo WEB</div>
          <div>Todos los derechos reservados</div>
        </v-col>

        <v-col cols="12" md="6">
          <v-btn
            icon="mdi-facebook"
            variant="text"
            href="https://facebook.com"
            target="_blank"
          ></v-btn>
          <v-btn
            icon="mdi-instagram"
            variant="text"
            href="https://instagram.com"
            target="_blank"
          ></v-btn>
          <v-btn
            icon="mdi-twitter"
            variant="text"
            href="https://twitter.com"
            target="_blank"
          ></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
/* No necesitas lógica adicional aquí por ahora */
</script>

<style scoped>
.v-footer {
  font-size: 0.9rem;
}
</style>
