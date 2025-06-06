<script>
export default {
  data() {
    return {
      contador: 0,
    };
  },
  computed: {
    incrementarContador() {
      this.contador++;
    },
  },
};
</script>

<template>
  <button @click="incrementarContador()">
    Vostede pulsou {{ contador }} este botón
  </button>
</template>

<style></style>
