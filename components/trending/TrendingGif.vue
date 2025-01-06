<template>
  <div class="inline-block w-full py-4 " :id="gif.name">
    <h4 class="px-2 py-2">{{ gif.name }}</h4>
    <img :src="gif.image" :alt="`tenor - ${gif.name}`" class="object-cover w-full rounded-lg" loading="lazy"
      :title="gif.name">
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { Trending } from '@/interfaces/trending';
import { FastAverageColor } from 'fast-average-color';

const props = defineProps({
  gif: {
    type: Object as PropType<Trending>,
    required: true
  }
});

const methods = {
  async getDominantColor() {
    const fac = new FastAverageColor();
    const container = document.getElementById(props.gif.name) as HTMLElement;
    const image = container.querySelector('img') as HTMLImageElement;
    image.crossOrigin = 'Anonymous';

    fac.getColorAsync(image).then((color) => {
      image.style.color = color.rgba;
    });
  }
};

onMounted(() => {
  methods.getDominantColor();
});
</script>

<style scoped>
img:hover {
  transform: scale(1.03);
  transition: transform 0.3s;
  box-shadow: 0 0 18px 2px currentColor;
}
</style>