<template>
  <h1>Aqui has buscado en la api</h1>
  <p>{{apiSearch}}</p>
</template>

<script setup>
import { api } from 'src/boot/axios'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const apiSearch = ref("")
apiSearch.value = route.params.apiSearch

console.log(apiSearch.value)
watch(
  () => route.params.apiSearch,
  (newVal) => {
    apiSearch.value = newVal
    console.log('NUEVO:', newVal)
  }
)

watch(
  apiSearch,  // 👈 así está bien
  async (newVal) => {
    const res = await api.get(`/${newVal}`)
    console.log(res.data.results)
  },
  { immediate: true }  // 👈 para que se ejecute en la primera carga también
)


</script>