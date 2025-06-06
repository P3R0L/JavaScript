// Dado un array de números almacenado en JavaScript, utiliza a directiva v-for para
// mostrar só os números pares.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      array: [0, 1, 2, 3, 4, 5, 7, 8, 9],
    };
  },
  computed: {
    numerosPares() {
      return this.array.filter((i) => i % 2 === 0);
    },
  },
}).mount("#app");
