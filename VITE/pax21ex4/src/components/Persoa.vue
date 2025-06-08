<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    anoNacemento: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <h1>Persoa</h1>
  <p>Nome: {{ nome }}</p>
  <p>Ano de nacemento: {{ anoNacemento }}</p>
</template>

<style></style>
