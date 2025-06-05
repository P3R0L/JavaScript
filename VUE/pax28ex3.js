// Crea unha páxina web con dúas caixas de texto que permitan converter valores de
// kilómetros a metros automaticamente. Cada vez que se escriba en calquera das
// dúas caixas de texto, mostraranse automaticamente a unidade equivalente na outra
// caixa.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      metros: "",
      kilometros: "",
    };
  },
  watch: {
    metros() {
      return this.calcularKilometros();
    },
    kilometros() {
      return this.calcularMetros();
    },
  },
  methods: {
    calcularKilometros() {
      this.kilometros = this.metros / 1000;
    },
    calcularMetros() {
      this.metros = this.kilometros * 1000;
    },
  },
}).mount("#app");
