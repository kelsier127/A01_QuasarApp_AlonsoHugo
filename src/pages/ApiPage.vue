<template>
  <div class="q-pa-md">
    <h3>Título de la página de API</h3>

    <div class="row items-center justify-evenly">
      <q-tabs
        v-model="tab"
        align="justify"
        class="bg-grey-3 text-primary"
        dense
        narrow-indicator
      >
        <q-route-tab
          v-for="(url, key) in results"
          :key="key"
          :name="key"
          :label="key"
          :to="`/api/${key}`"
        />
      </q-tabs>
    </div>

    <router-view />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { api } from 'boot/axios'

const results = ref({})
const tab = ref('')

watch(
  () => true,
  async () => {
    try {
      const res = await api.get('/')
      results.value = res.data
      tab.value = Object.keys(res.data)[0]
    } catch (error) {
      console.error(error)
    }
  },
  { immediate: true }
)
</script>
