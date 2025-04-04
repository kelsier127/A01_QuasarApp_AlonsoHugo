<template>
<div>
  <q-card>
    <q-card-section class="flex row items-center justify-evenly">
      <h2> {{ results.title }} </h2>
    </q-card-section>
    <q-card-section class="flex row items-center justify-evenly">
      <div>
        <q-img :src="results.image" class="productImage"/>
      </div>
      <div>
        <p> {{ results.category }} </p>
        <p> {{ results.description }} </p>
        <p> {{ results.price }} € </p>
        <q-rating
          v-model="rate"
          size="2em"
          :max="5"
          color="primary"
        ></q-rating> {{ rateCount || 0 }} ratings
      </div>
    </q-card-section>
  </q-card>
</div>
</template>

<script setup>
import { ref, watch } from "vue";
import { api } from "boot/axios";
import { useRoute } from "vue-router";
const route = useRoute();
const id = route.params.id.toString();

const results = ref({});
const rate = ref(0);
const rateCount = ref(0);
watch(
  () => true,
  async () => {
    try {
      const res = await api.get(`${id}`);
      results.value = res.data;
      console.log(res.data);
      rate.value = results.value.rating.rate;
      rateCount.value = results.value.rating.count;
    } catch (error) {
      console.error(error);
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.productImage{
  height: auto;
  width: 300px;
}
</style>
