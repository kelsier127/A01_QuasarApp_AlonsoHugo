<template>
  <q-header elevated class="bg-primary text-white">
    <q-tabs class="bg-dark text-white q-px-lg">
      <q-toolbar-title>Shopify <span class="material-icons">
        shopping_bag
        </span></q-toolbar-title>
        <q-btn @click="volver"> Volver atras </q-btn>

      <q-route-tab flat to="/" label="Inicio" />
      <q-route-tab flat to="/api" label="Conexión a API"  />
      <q-route-tab flat to="/formulario" label="Muestra de Componentes" />
      <q-route-tab flat to="/carrito"><span class="material-icons">
        shopping_cart
        </span></q-route-tab>
    </q-tabs>
  </q-header>
</template>

<script setup>
import { useRoute,useRouter } from 'vue-router'


const route = useRoute()
const router = useRouter()

const volver = () => {
  if(route.path.includes("producto")){
    router.push('/api')

  }else{
    router.push('/')
  }
}
</script>
