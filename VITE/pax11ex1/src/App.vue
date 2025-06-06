<script>
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
