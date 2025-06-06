<script>
export default {
  props: {
    nome: String,
    tlf: String,
    correo: String,
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
  },
};
</script>

<template>
  <h1>Listado</h1>
  <h1>{{ nome }}</h1>
  <button @click="mostrarDetalles()">Mostrar detalles</button>
  <template v-if="visible">
    <p>Teléfono: {{ tlf }}</p>
    <p>Correo: {{ correo }}</p>
  </template>
</template>

<style></style>
