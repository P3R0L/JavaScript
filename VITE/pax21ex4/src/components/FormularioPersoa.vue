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
  data() {
    return {
      nomeLocal: this.nome,
      anoLocal: this.anoNacemento,
    };
  },
  methods: {
    actualizarDatos() {
      if (!this.nomeLocal) {
        alert("O nome non pode estar baleiro");
        return;
      }
      const ano = Number(this.anoLocal);
      if (!ano || isNaN(ano)) {
        alert("O ano de nacemento debe ser un número válido");
        return;
      }
      this.$emit("actualizar-datos", this.nomeLocal, ano);
    },
  },
};
</script>

<template>
  <form @submit.prevent="actualizarDatos">
    <label for="nome">Nome</label> <br />
    <input type="text" v-model="nomeLocal" /> <br />
    <br />
    <label for="anoNacemento">Ano de nacemento</label> <br />
    <input type="number" v-model.number="anoLocal" /> <br />
    <br />
    <button type="submit">Actualizar</button>
  </form>
</template>

<style></style>
