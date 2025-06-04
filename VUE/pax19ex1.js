// Crea unha páxina web que conteña unha caixa de texto e un parágrafo
// sincronizados. É dicir, o parágrafo debe mostrar o mesmo contido que a caixa de
// texto e debe actualizarse a medida que se engaden novas letras. Podes usar o
// evento input.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      mensaxe: undefined,
    };
  },
  methods: {
    cambiarMensaxe($event) {
      this.mensaxe = $event.target.value;
    },
  },
}).mount("#app");
