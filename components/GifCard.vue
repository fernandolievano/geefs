<template lang="html">
  <div class="card has-text-centered gif-card" :class="randomBackground">
    <div class="card-image">
      <div class="gif-overlay">
        <div class="gif-container">
          <a :href="gif.url" target="_blank">
            <img v-lazy="gif.media[0].gif.url" alt="gif de tenor" class="gif" lazy="loading, error">
          </a>
        </div>
        <div v-if="gif.title" class="text-hover">
          <p class="is-italic is-size-8 small-hover has-text-light">
            {{ gif.title }}
          </p>
        </div>
      </div>
    </div>
    <p>
      <small class="is-size-7 has-text-light">vía <img src="/tenor.svg" alt="tenor" class="tenor-logo"></small>
    </p>
    <p v-if="gif.tags.length > 0">
      <span v-for="tag in tags" :key="tag">
        {{ tag }}
      </span>
    </p>
    <footer class="card-footer has-text-centered">
      <div class="card-footer-item">
        <div class="field is-grouped is-vcentered">
          <div class="control">
            <vue-goodshare-facebook has_icon :page_url="gif.media[0].gif.url" class="button is-small" />
          </div>
          <div class="control">
            <vue-goodshare-twitter has_icon :page_url="gif.media[0].gif.url" class="button is-small" />
          </div>
          <!-- <div class="control">
            <vue-goodshare-whatsapp has_icon :page_url="gif.media[0].gif.url" class="button is-small" />
          </div> -->
          <div class="control">
            <button class="button is-small button-gradient" @click="copyLink(gif.media[0].gif.url)">
              <span class="icon is-small">
                <i class="fas fa-link" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'GifsCard',
  props: {
    gif: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      backgrounds: [
        'has-background-black',
        'has-background-dark',
        'has-background-info',
        'has-background-link',
        'has-background-success',
        'has-background-warning',
        'has-background-danger',
        'has-background-purple',
        'has-background-lime',
        'has-background-indigo',
        'has-background-red'
      ]
    }
  },
  computed: {
    randomBackground() {
      const backgrounds = this.backgrounds
      return backgrounds[Math.floor(Math.random() * backgrounds.length)]
    },
    darkText() {
      if (
        this.randomBackground === 'has-background-warning' ||
        this.randomBackground === 'has-background-lime'
      ) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    async copyLink(link) {
      await navigator.clipboard.writeText(link)
      this.$toast.success('¡Enlace copiado al portapapeles!', {
        duration: 850
      })
    }
  }
}
</script>

<style lang="css" scoped>
.card {
  padding: 0.5em 0;
}

.card-footer-item {
  border: none;
}

.tenor-logo {
  width: 3em;
}

img[lazy='loading'] {
  background-image: url('/loading.gif');
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: 5em;
}
img[lazy='error'] {
  background-image: url('/error.gif');
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: 100%;
}
.has-background-purple {
  background-color: #421b9b;
}
.has-background-lime {
  background-color: #a7d129;
}
.has-background-violette {
  background-color: #612147;
}
.has-background-indigo {
  background-color: #503bff;
}
.has-background-red {
  background-color: #dd0a35;
}
.card-footer {
  background: none !important;
  border: none;
}
.button {
  border: none;
}
.button:hover {
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.button-gradient {
  background: linear-gradient(to bottom, #633974, #1a5276);
  color: #d6dbdf;
  padding: 7px 1.1em;
  margin: 3px 1.5px;
  text-align: center;
  align-content: center;
  align-items: center;
}

.gif-overlay {
  position: relative;
  width: 100%;
}
.gif {
  width: auto;
  /* height: 8em; */
  opacity: 0.8;
  transition: linear 0.5s;
}
.gif-overlay .text-hover {
  position: absolute;
  top: 50%;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
}
.gif-overlay:hover .text-hover {
  opacity: 1;
}
.gif-overlay:hover .gif {
  opacity: 1;
}
.small-hover {
  background-color: rgba(0, 0, 0, 0.8);
  /* border-radius: 20px; */
  padding: 1em;
  width: 100%;
}

footer {
  margin-top: 0;
}
</style>
