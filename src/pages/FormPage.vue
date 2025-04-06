<template>
  <q-page padding class="q-pa-md flex flex-center">

    <q-card style="margin-top:-200px; width:900px" class="q-pa-md shadow-2 rounded-borders">
      <q-card-section>
        <div class="text-h5 text-primary">Formulario de contacto</div>
      </q-card-section>

      <q-form @submit.prevent="enviarFormulario" class="q-gutter-md q-pa-md">

        <q-input
          v-model="nombre"
          label="Nombre"
          required
          outlined
        />

        <q-input
          v-model="email"
          label="Correo electrónico"
          type="email"
          required
          outlined
        />

        <q-select
          v-model="tipo"
          label="Tipo de mensaje"
          outlined
          :options="['Pregunta', 'Comentario', 'Queja']"
          :rules="[val => !!val || 'Selecciona una opción']"
        />

        <q-input
          v-model="mensaje"
          label="Mensaje"
          type="textarea"
          outlined
          required
          autogrow
        />

        <div class="row justify-end">
          <q-btn type="submit" color="primary" label="Enviar" icon="send" />
        </div>

      </q-form>
    </q-card>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { Notify } from 'quasar'

const nombre = ref('')
const email = ref('')
const tipo = ref(null)
const mensaje = ref('')

const enviarFormulario = () => {
  Notify.create({
    message: '¡Mensaje enviado correctamente!',
    color: 'green',
    icon: 'check_circle',
    position: 'top-right'
  })


  nombre.value = ''
  email.value = ''
  tipo.value = null
  mensaje.value = ''
}
</script>

<style scoped>
.rounded-borders {
  border-radius: 12px;
}
</style>
