<template>
  <div>
    <h2>Carrito de la compra</h2>

    <q-btn v-if="carrito.length > 0" @click="borrarCarrito" style="margin:10px">
      Borrar Carrito
      <q-icon name="delete" />
    </q-btn>

    <div style="margin: 100px" v-if="carrito.length === 0">
      <h3>Carrito de la compra vacío!</h3>
    </div>

    <div style="margin-bottom:50px" class="q-gutter-md row q-col-gutter-md justify-center" v-else>
      <q-card
        to="/"
        v-for="producto in carrito"
        :key="producto.id"
        class="col-12 col-sm-6 col-md-4"
        bordered
        flat
        style="max-width: 350px; height: auto; padding: 15px"
      >
        <q-img :src="producto.image" class="productImage" />

        <q-card-section>
          <div class="text-h6">
            <RouterLink :to="`/producto/${producto.id}`">
              {{ producto.title }}
            </RouterLink>
          </div>
          <div class="text-subtitle2 text-grey">{{ producto.category }}</div>
          <div class="text-body2 q-mt-sm">Precio final: {{ producto.price.toFixed(2) }} €</div>
          <div class="text-body2 q-mt-sm">Cantidad listada: {{ producto.quantity }}</div>
        </q-card-section>

        <q-rating
          :model-value="producto.rating.rate"
          size="2em"
          :max="5"
          color="primary"
        ></q-rating>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const carrito = ref([])

const cargarCarrito = () => {
  const datosGuardados = localStorage.getItem('CarritoCompra')
  if (!datosGuardados) {
    carrito.value = []
  } else {
    try {
      carrito.value = JSON.parse(datosGuardados)
    } catch (e) {
      console.error('Error: ', e)
      carrito.value = []
    }
  }
}

cargarCarrito()

const borrarCarrito = () => {
  localStorage.removeItem('CarritoCompra')
  carrito.value = []
}
</script>
