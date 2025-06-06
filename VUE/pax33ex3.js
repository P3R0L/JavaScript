// Crea unha páxina web coas seguintes condicións:
// a. Define dúas clases CSS (claseA e claseB) cos estilos que queiras para
// aplicar a un parágrafo.
// b. Engade á túa páxina web unha caixa de texto e un parágrafo. Configura o
// código para que cando unha persoa usuaria escriba “claseA” na caixa de
// texto, se aplique esta clase ao parágrafo e cando se escriba “claseB” na
// caixa de texto se aplique esta clase ao parágrafo.
// c. Engade as seguintes clases CSS á túa páxina web:
// .hidden {
// display: none;
// }
// .visible {
// display: block;
// }
// d. Engade un botón á páxina de tal forma que, usando as clases anteriores,
// alterne a visibilidade do parágrafo usado anteriormente. É dicir, inicialmente o
// parágrafo está visible e se se pulsa o botón, ocultarase. Se se volve a pulsar
// o botón, o parágrafo farase visible.
// e. Engade á páxina web unha nova caixa de texto e un novo parágrafo. Usando
// estilos en liña, fai que cando unha persoa escriba unha cor de fondo na caixa
// de texto, o parágrafo cambie a súa cor de fondo pola indicada na caixa de
// texto.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      clase: "",
      isHidden: false,
      isVisible: true,
      textoBoton: "OCULTAR",
      cor: "",
    };
  },
  methods: {
    cambiarVisibilidade() {
      this.isVisible = !this.isVisible;
      this.isHidden = !this.isHidden;
      this.textoBoton === "OCULTAR"
        ? (this.textoBoton = "AMOSAR")
        : (this.textoBoton = "OCULTAR");
    },
    cambiarCor($event) {
      this.cor = "color: " + $event.target.value;
    },
  },
}).mount("#app");
