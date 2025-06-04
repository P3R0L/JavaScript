// Crea unha páxina web con dúas caixas de texto para introducir números. A páxina
// web debe facer a suma dos dous números introducidos e mostrar o resultado. Cada
// vez que se modifique unha das caixas de texto, debe actualizarse e mostrarse o
// resultado da suma dos dous números. Ademais, unha vez obtido o resultado da
// suma, debe mostrarse tamén na páxina web información indicando se o resultado é
// un número par ou impar.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      num1: 0,
      num2: 0,
    };
  },
  computed: {
    suma() {
      return this.num1 + this.num2;
    },
    isPar() {
      return this.suma % 2 == 0
        ? "A suma da como resultado par"
        : "A suma da como resultado impar";
    },
  },
}).mount("#app");
