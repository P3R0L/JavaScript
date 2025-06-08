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
    eliminarContacto() {
      this.$emit("eliminar-contacto");
    },
  },
};
</script>

<template>
  <h1>
    {{ nome }}
    <span v-if="favorito" @click="alternarFavorito()">(Favorito) ★</span>
    <span v-else @click="alternarFavorito()">☆</span>
  </h1>

  <button @click="mostrarDetalles()" style="margin-right: 8px">
    Mostrar detalles
  </button>
  <button @click="eliminarContacto()">Eliminar contacto</button>
  <template v-if="visible">
    <p>Teléfono: {{ tlf }}</p>
    <p>Correo: {{ correo }}</p>
  </template>
</template>

<style></style>
