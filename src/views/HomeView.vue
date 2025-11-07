<template>
  <v-container class="text-center">
    <h1>Formulario de registro.</h1>

    <form @submit.prevent="submit" class="pa-6 mx-auto text-center" style="max-width: 600px;">
      <v-text-field v-model="name.value.value" :counter="10" :error-messages="name.errorMessage.value"
        label="Name"></v-text-field>

      <v-text-field v-model="phone.value.value" :counter="8" :error-messages="phone.errorMessage.value"
        label="Phone Number"></v-text-field>

      <v-text-field v-model="email.value.value" :error-messages="email.errorMessage.value"
        label="E-mail"></v-text-field>

      <v-select v-model="select.value.value" :error-messages="select.errorMessage.value" :items="items"
        label="Select"></v-select>

      <v-btn class="me-4" type="submit">
        submit
      </v-btn>

      <v-btn @click="handleReset">
        clear
      </v-btn>
    </form>
    
  </v-container>

</template>

<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, resetForm } = useForm()

const name = useField('name', value => {
  if (!value || value.length < 2) return 'Name needs to be at least 2 characters.'
  return true
})

const phone = useField('phone', value => {
  if (!/^[0-9-]{8}$/.test(value)) return 'Phone number needs to be at least 8 digits.'
  return true
})

const email = useField('email', value => {
  if (!/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return 'Must be a valid e-mail.'
  return true
})

const select = useField('select', value => {
  if (!value) return 'Select an item.'
  return true
})

const items = ref(['Estudiante', 'Trabajador'])

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})
</script>
