<script>
export default {
  data() {
    return {
      texto: "",
    };
  },
};
</script>

<template>
  <input type="text" v-model="texto" />
  <p>{{ texto }}</p>
</template>

<style></style>
