<template>
  <q-page padding>
    <div>
      <q-input v-model="filter" label="Buscar productos" />
    </div>

    <div class="q-gutter-md row q-col-gutter-md justify-center">
      <q-card
        to="/"
        v-for="producto in filtroProductos"
        :key="producto.id"
        class="col-12 col-sm-6 col-md-4"
        bordered
        flat
        style="max-width: 350px"
      >
        <q-img :src="producto.image" class="productImage" />

        <q-card-section>
          <div class="text-h6">
            <RouterLink :to="`/producto/${producto.id}`">{{
              producto.title
            }}</RouterLink>
          </div>
          <div class="text-subtitle2 text-grey">{{ producto.category }}</div>
          <div class="text-body2 q-mt-sm">{{ producto.description }}</div>
          <div class="text-body2 q-mt-sm">{{ producto.price }} €</div>
        </q-card-section>
        <q-rating
          :model-value="producto.rating.rate"
          size="2em"
          :max="5"
          color="primary"
        ></q-rating>
        <q-btn
          @click="afegirCarrito(producto.title, producto.price, producto)"
          color="primary"
          class="q-mb-sm q-ml-sm"
        >
          <span class="q-ml-xs">Add to Cart</span>
          <q-icon name="shopping_cart" />
        </q-btn>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { api } from "boot/axios";
import { RouterLink } from "vue-router";
import { useQuasar } from "quasar";

const $q = useQuasar();

let carrito = ref([]);

const afegirCarrito = (nombre, precio, item) => {
  $q.notify({
    message: `Has añadido ${nombre} al carrito por ${precio} €`,
    icon: "shopping_cart",
    color: "purple",
  });

  console.log(item);
  let itemAnyadido = { ...item, quantity: 1 };

  if (carrito.value.length == 0) {
    carrito.value.push(itemAnyadido);
  } else {
    for (let i in carrito.value) {
      if (carrito.value[i].id == itemAnyadido.id) {
        carrito.value[i].quantity++;
        carrito.value[i].price += itemAnyadido.price;
        break;
      } else if (i == carrito.value.length - 1) {
        carrito.value.push(itemAnyadido);
      }
    }

  }
  localStorage.setItem("CarritoCompra", JSON.stringify(carrito.value));

  console.log(carrito.value);
};

const results = ref([]);
const filter = ref("");

watch(
  () => true,
  async () => {
    try {
      const res = await api.get("");
      results.value = res.data;
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  },
  { immediate: true }
);

const filtroProductos = computed(() => {
  const buscador = filter.value.trim().toLowerCase();
  return results.value.filter((product) =>
    product.title.toLowerCase().includes(buscador)
  );
});
</script>

<style scoped>
.productImage {
  height: 300px;
  width: 100%;
  object-fit: cover;
}
</style>
