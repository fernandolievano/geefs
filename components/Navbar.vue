<template>
  <nav class="navbar-animation fixed top-0 left-0 w-full h-[80px] z-50 bg-black">
    <div class="flex items-center justify-between h-full px-4 py-4">
      <nuxt-link to="/">
        <img class="w-12 h-12" src="/geef.svg" alt="Logo">
      </nuxt-link>

      <div class="flex items-center gap-0 pl-4">
        <input
          type="text"
          autocomplete="search"
          class="px-2 py-3 text-sm bg-black border rounded rounded-tr-none rounded-br-none border-primary text-primary placeholder:text-primary"
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
    box-shadow: 0 0 12px 1px #3300cc;
  }

  10% {
    box-shadow: 0 0 12px 1px #33ff00;
  }

  15% {
    box-shadow: 0 0 12px 1px #4f99be;
  }

  20% {
    box-shadow: 0 0 12px 1px #663399;
  }

  25% {
    box-shadow: 0 0 12px 1px #cc6699;
  }

  30% {
    box-shadow: 0 0 12px 1px #ccff66;
  }

  35% {
    box-shadow: 0 0 12px 1px #cc0099;
  }

  40% {
    box-shadow: 0 0 12px 1px #3300cc;
  }

  45% {
    box-shadow: 0 0 12px 1px #ffcc33;
  }

  50% {
    box-shadow: 0 0 12px 1px #ccff33;
  }

  55% {
    box-shadow: 0 0 12px 1px #99ffff;
  }

  60% {
    box-shadow: 0 0 12px 1px #ff3333;
  }

  65% {
    box-shadow: 0 0 12px 1px #990066;
  }

  70% {
    box-shadow: 0 0 12px 1px #3333cc;
  }

  75% {
    box-shadow: 0 0 12px 1px #cc99cc;
  }

  80% {
    box-shadow: 0 0 12px 1px #669900;
  }

  85% {
    box-shadow: 0 0 12px 1px #66ff00;
  }

  90% {
    box-shadow: 0 0 12px 1px #6699ff;
  }

  95% {
    box-shadow: 0 0 12px 1px #6600ff;
  }

  100% {
    box-shadow: 0 0 12px 1px #cc6600;
  }
}
</style>