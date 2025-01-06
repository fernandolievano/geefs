import { defineStore } from 'pinia';
import { TENOR_API_URL } from '@/constants';
import type { Trending, TrendingResponse } from '@/interfaces/trending';

interface Gif {
  id: string;
}


interface State {
  trending: Trending[];
  locale: string;
  anonID: string;
}

export const useGifStore = defineStore('gifs', {
  state: (): State => {
    return {
      trending: [],
      locale: 'es-AR',
      anonID: ''
    };
  },

  actions: {
    async getAnonID() {
      const runtimeConfig = useRuntimeConfig();
      const res = await fetch(`${TENOR_API_URL}/anonid?key=${runtimeConfig.tenorApiKey}`);
      const data = await res.json();

      this.anonID = data.anon_id;
    },
    async fetchTrending() {
      const apiKey = process.env.VITE_TENOR_API_KEY
      const res = await fetch(`${TENOR_API_URL}/categories?key=${apiKey}&anon_id${this.anonID}&type=trending&locale=${this.locale}`);
      const data: TrendingResponse = await res.json();

      this.trending = data.tags
    }
  }
});