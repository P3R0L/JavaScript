// Crea unha páxina web onde se mostre:
// a. o teu nome
// b. o ano actual
// c. usando unha expresión, suma 5 ao ano actual.
// d. unha imaxe (pode utilizarse o atributo src ou mostrala como HTML puro)
// e. unha caixa de texto que conteña como texto o teu nome.
// f. un contador inicializado a 0
// g. Dous botóns: un para incrementar nunha unidade o contador e outro para
// decrementalo.
// A información debe estar almacenada nun compoñente Vue e dende HTML debe
// accederse a ela. Con respecto á imaxe, a ruta está almacenada en Vue.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      nome: "Alejandro",
      ano: new Date().getFullYear(),
      imaxe: "imaxe.jpg",
      contador: 0,
    };
  },
  methods: {
    incrementar() {
      this.contador++;
    },
    decrementar() {
      this.contador--;
    },
  },
}).mount("#app");
