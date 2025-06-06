// Crea unha páxina web que mostre unha lista de elementos (escolle ti o significado),
// coas seguintes funcionalidades:
// a. Deben mostrarse os elementos en forma de lista.
// b. Deben poder engadirse novos elementos á lista.
// c. Deben poder eliminarse elementos da lista.
// d. Engade tamén un botón para mostrar/ocultar a lista. Fai que o texto deste
// botón sexa “Mostrar lista” ou “Ocultar lista” dependendo de se a lista é visible
// ou non.
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

let id = 0;

createApp({
  data() {
    return {
      novoAlimento: "",
      visible: true,
      textoBoton: "Ocultar lista",
      alimentos: [
        { id: id++, nome: "Pan" },
        { id: id++, nome: "Lentellas" },
        { id: id++, nome: "Zanahoria" },
      ],
    };
  },
  methods: {
    engadirAlimento() {
      if (this.novoAlimento.length > 0) {
        this.alimentos.push({ id: id++, nome: this.novoAlimento });
        this.novoAlimento = "";
      }
    },
    eliminarAlimento(id) {
      this.alimentos = this.alimentos.filter((a) => a.id !== id);
    },
    toggle() {
      this.visible = !this.visible;
      this.textoBoton === "Ocultar lista"
        ? (this.textoBoton = "Mostrar lista")
        : (this.textoBoton = "Ocultar lista");
    },
  },
}).mount("#app");
