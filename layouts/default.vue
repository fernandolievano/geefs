<template>
  <main class="min-h-screen text-white bg-black pt-[160px] pb-[80px]">
    <Navbar />

    <div class="px-4">
      <div class="py-8">
        <slot />
      </div>
    </div>
  </main>
</template>

<script setup>
import Navbar from '@/components/Navbar';

useHead({
  title: 'Geefs | Gifs search tool',
  meta: [
    { name: 'description', content: ' A simple project that displays GIFs, built by fernandolievano to practice and enhance his Vue.js skills.' },
  ],
  link: [
    {
      rel: 'icon', type: 'image/x-icon', href: '/geef.ico'
    }
  ]
});
</script>
