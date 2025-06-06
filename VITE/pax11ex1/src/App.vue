<script>
// Crea un proxecto Vue onde o compoñente raíz da aplicación teña unha propiedade
// que sexa unha mensaxe de texto, por exemplo “ola mundo”. Configura o código
// HTML para mostrar a mensaxe. Engade ao HTML un botón de tal forma que cada
// vez que se pulse transforme a mensaxe de minúscula a maiúscula ou viceversa.
// Engade outro botón que permita engadir un carácter, por exemplo “!” á mensaxe de
// texto.
export default {
  data() {
    return {
      mensaxe: "ola mundo",
    };
  },
  methods: {
    toggle() {
      this.mensaxe == this.mensaxe.toUpperCase()
        ? (this.mensaxe = this.mensaxe.toLowerCase())
        : (this.mensaxe = this.mensaxe.toUpperCase());
    },
    engadirExclamacion() {
      this.mensaxe = this.mensaxe + "!";
    },
  },
};
</script>

<template>
  <p>{{ mensaxe }}</p>
  <button @click="toggle()">Toggle</button>
  <button @click="engadirExclamacion()">!</button>
</template>

<style></style>
