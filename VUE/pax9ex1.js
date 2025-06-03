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
