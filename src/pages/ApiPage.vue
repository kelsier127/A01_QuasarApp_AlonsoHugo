<template>
  <div class="q-pa-md">
    <h3>Título de la página de API</h3>
    <div class="row items-center justify-between">
      <q-btn v-for="film in films" :key="film.episode_id" color="dark" class="btn-primary" :to="`/peliculas/${film.episode_id}`" :label="`${film.title}`"/>

    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { api } from 'boot/axios'

const films = ref([])
const trigger = ref(true)

watch(trigger, async () => {
  try {
    const res = await api.get('films/')
    films.value = res.data.results
    console.log('Películas cargadas con watch')
  } catch (error) {
    console.error('Error al cargar películas:', error)
  }
}, { immediate: true })
</script>
