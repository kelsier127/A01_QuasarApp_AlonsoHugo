<template>
  <div class="q-pa-md justify-center">
    <h3 class="text-h5">Esto es una película</h3>

    <div v-if="loading" class="text-center q-mt-md">
      <q-spinner-dots color="primary" size="40px" />
      <p>Cargando...</p>
    </div>

    <div class="carta_pelicula" v-else>
      <q-card class="carta q-mt-md">
        <q-card-section>
          <p class="text-h5">{{ info.title }}</p>
          <p class="text-subtitle2">Episodio {{ filmId }}</p>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <p><strong>Director:</strong> {{ info.director }}</p>
          <p><strong>Productor:</strong> {{ info.producer }}</p>
          <p><strong>Fecha de estreno:</strong> {{ info.release_date }}</p>
          <p><strong>Intro:</strong> {{ info.opening_crawl }}</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { api } from 'boot/axios'

const route = useRoute()
const filmId = ref(route.params.filmId)
const info = ref({})
const loading = ref(true)

watch(
  () => route.params.filmId,
  async (newId) => {
    filmId.value = newId
    await loadFilm()
  },
  { immediate: true }
)

async function loadFilm() {
  loading.value = true
  try {
    const res = await api.get(`films/${filmId.value}/`)
    info.value = res.data
  } catch (error) {
    console.error('Error al cargar la película:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.carta_pelicula {
  width: 70%;
  margin: 0 auto;
}

.carta{
  border: 1px solid black;
}

</style>
