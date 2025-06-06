<script>
export default {
  props: {
    nome: String,
    tlf: String,
    correo: String,
    favorito: Boolean,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    mostrarDetalles() {
      this.visible = !this.visible;
    },
    alternarFavorito() {
      this.$emit("alternar-favorito");
    },
  },
};
</script>

<template>
  <h1>Listado</h1>
  <h1>
    {{ nome }}
    <span v-if="favorito" @click="alternarFavorito()">(Favorito) ★</span>
    <span v-else @click="alternarFavorito()">☆</span>
  </h1>

  <button @click="mostrarDetalles()">Mostrar detalles</button>
  <template v-if="visible">
    <p>Teléfono: {{ tlf }}</p>
    <p>Correo: {{ correo }}</p>
  </template>
</template>

<style></style>
