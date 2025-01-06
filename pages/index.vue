<template>
  <section class="container mx-auto">
    <Trending :trending="store.trending" />
  </section>
</template>

<script setup lang="ts">
import { useGifStore } from '@/store/gifs';
import Trending from '@/components/trending/Trending.vue';

const store = useGifStore();

onServerPrefetch(async () => {
  await store.getAnonID();
  await store.fetchTrending();
})
</script>