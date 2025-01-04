import { TENOR_API_URL } from '@/constants';
import { defineStore } from 'pinia';

interface Gif {
  id: string;
}
interface State {
  popular: Gif[];
  locale: string;
  anonID: string;
}

export const useGifStore = defineStore('gifs', {
  state: (): State => {
    return {
      popular: [],
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
    }
  }
});