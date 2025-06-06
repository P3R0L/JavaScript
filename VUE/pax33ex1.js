// Crea unha páxina web que teña dous parágrafos:
// a. O primeiro parágrafo ten por defecto unha clase CSS (configúraa coas
// propiedades que queiras). Configura este parágrafo para que ao pulsar sobre
// el se quite e se engada a clase CSS alternativamente.
// b. O segundo parágrafo ten cor de letra verde, por defecto. Configúrao para que
// ao pulsar sobre el a cor de letra alterne entre o verde e o vermello.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      isBlue: true,
      isGreen: true,
      isRed: false,
    };
  },
  methods: {
    cambiarEstado() {
      this.isBlue = !this.isBlue;
    },
    cambiarCor() {
      this.isGreen = !this.isGreen;
      this.isRed = !this.isRed;
    },
  },
}).mount("#app");
