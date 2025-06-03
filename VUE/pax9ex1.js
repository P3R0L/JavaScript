//  Proba a crear diferentes propiedades no obxecto devolto por data() e mostralas
// dende o HTML. Proba a mostrar diferentes tipos de datos: unha cadea, un número,
// un booleano, un array, un obxecto, etc.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      nome: "Alejandro",
      idade: 22,
      eEstudante: true,
      asignaturasAprobadas: ["DWCS", "DAPW", "DIW", "EIE"],
      asignaturasPendentes: {
        nome: "DWCC",
        profesor: "Cristina",
      },
    };
  },
}).mount("#app");
