<template>
  <nav class="navbar-animation fixed top-0 left-0 bg-transparent backdrop-blur-xl w-full h-[80px]">
    <div class="flex items-center justify-between h-full px-4 py-4">
      <nuxt-link to="/">
        <img class="w-12 h-12" src="/geef.svg" alt="Logo">
      </nuxt-link>

      <div class="flex items-center gap-0 pl-4">
        <input
          type="text"
          autocomplete="search"
          class="px-2 py-3 text-sm bg-transparent border rounded rounded-tr-none rounded-br-none border-primary text-primary placeholder:text-primary"
          placeholder="Find your gifs via Tenor"
        >
        <button class="px-4 py-3 text-sm transition-colors border border-l-0 rounded-tr rounded-br border-primary text-primary hover:bg-secondary hover:text-white">
          Search
        </button>
      </div>
    </div>
  </nav>
</template>

<style lang="css">
.navbar-animation {
  animation: navbar-border;
  animation-duration: 50s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes navbar-border {
  5% {
    border-bottom: solid 0.1rem #3300cc;
  }

  10% {
    border-bottom: solid 0.1rem #33ff00;
  }

  15% {
    border-bottom: solid 0.1rem #4f99be;
  }

  20% {
    border-bottom: solid 0.1rem #663399;
  }

  25% {
    border-bottom: solid 0.1rem #cc6699;
  }

  30% {
    border-bottom: solid 0.1rem #ccff66;
  }

  35% {
    border-bottom: solid 0.1rem #cc0099;
  }

  40% {
    border-bottom: solid 0.1rem #3300cc;
  }

  45% {
    border-bottom: solid 0.1rem #ffcc33;
  }

  50% {
    border-bottom: solid 0.1rem #ccff33;
  }

  55% {
    border-bottom: solid 0.1rem #99ffff;
  }

  60% {
    border-bottom: solid 0.1rem #ff3333;
  }

  65% {
    border-bottom: solid 0.1rem #990066;
  }

  70% {
    border-bottom: solid 0.1rem #3333cc;
  }

  75% {
    border-bottom: solid 0.1rem #cc99cc;
  }

  80% {
    border-bottom: solid 0.1rem #669900;
  }

  85% {
    border-bottom: solid 0.1rem #66ff00;
  }

  90% {
    border-bottom: solid 0.1rem #6699ff;
  }

  95% {
    border-bottom: solid 0.1rem #6600ff;
  }

  100% {
    border-bottom: solid 0.1rem #cc6600;
  }
}
</style>