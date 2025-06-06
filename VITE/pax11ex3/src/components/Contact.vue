<script>
export default {
  data() {
    return {
      contacto: {
        nome: "Ada Lovelace",
        tlf: "0123 45678 90",
        correo: "ada@localhost.com",
      },
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
  <h1>{{ contacto.nome }}</h1>
  <button @click="mostrarDetalles()">Mostrar detalles</button>
  <template v-if="visible">
    <p>Teléfono: {{ contacto.tlf }}</p>
    <p>Correo: {{ contacto.correo }}</p>
  </template>
</template>

<style></style>
