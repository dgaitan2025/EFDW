// main.js
import { createApp } from 'vue'
import App from './App.vue'

// Importar Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'

// Iconos opcionales (Material Design Icons)
import '@mdi/font/css/materialdesignicons.css'

// Crear instancia de Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// Crear la app
createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
