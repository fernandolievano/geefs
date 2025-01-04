<template>
  <section class="container mx-auto">
    <h1 class="text-3xl text-center xl:text-5xl">Lo más buscado de Tenor</h1>
  </section>
</template>

<script setup lang="ts">
import { useGifStore } from '@/store/gifs';

const store = useGifStore();

onServerPrefetch(async () => {
  await store.getAnonID();
})
</script>