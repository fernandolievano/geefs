<template>
  <div class="w-full px-4 py-8">
    <h1 class="px-4 text-3xl text-left xl:text-5xl">Trending</h1>

    <div class="gap-8 px-4 py-8 columns-2 md:columns-3 lg:columns-4 xl:columns-5">
      <TrendingGif v-for="(gif, i) in trending" :key="i" :gif="gif" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Trending } from '@/interfaces/trending';

defineProps({
  trending: {
    type: Array as PropType<Trending[]>,
    required: true
  }
});
</script>