// Crea dende JavaScript un array con tarefas, que poden ser inicialmente un array de
// cadeas de texto. Para practicar o renderizado condicional crea unha páxina web que
// mostre un parágrafo “Non hai tarefas pendentes” se o array coa lista de tarefas está
// baleiro ou que mostre “Hai X tarefas pendentes”, sendo X o número de tarefas no
// array.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  data() {
    return {
      tarefas: [
        "Cita telefónica médico (13:22)",
        "Peluquero (16:00)",
        "Acabar pdf Vue",
        "Entreno (Restollal, 21:30)",
      ],
    };
  },
  computed: {
    haiTarefas() {
      return this.tarefas.length > 0 ? true : false;
    },
  },
}).mount("#app");
