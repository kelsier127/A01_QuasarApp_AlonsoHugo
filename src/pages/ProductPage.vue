<template>
  <div class="q-pa-md flex flex-center">
    <q-card class="q-pa-md q-mx-auto" style="width: 50%">
      <q-card-section>
        <h2 class="text-h5 text-center"> {{ results.title }} </h2>
      </q-card-section>

      <q-card-section class="row no-wrap items-center justify-center q-gutter-md">
        <q-img :src="results.image" class="productImage" />
        <div class="column justify-between">
          <p class="text-subtitle2 text-grey"> {{ results.category }} </p>
          <p class="text-body1"> {{ results.description }} </p>
          <p class="text-h6 q-mt-md"> {{ results.price }} € </p>
          <div class="row items-center q-mt-sm">
            <q-rating
              v-model="rate"
              size="2em"
              :max="5"
              color="primary"
              readonly
            />
            <span class="q-ml-sm">({{ rateCount }} valoraciones)</span>
          </div>
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
      rate.value = res.data.rating.rate;
      rateCount.value = res.data.rating.count;
    } catch (error) {
      console.error(error);
    }
  },
  { immediate: true }
);
</script>

<style scoped>
.productImage {
  width: 250px;
  min-width: 250px;
  height: auto;
  object-fit: contain;
}
</style>
