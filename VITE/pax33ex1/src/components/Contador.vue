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
  <p>{{ contador }}</p>
  <button @click="incrementarContador">Incrementar contador</button>
</template>

<style></style>
