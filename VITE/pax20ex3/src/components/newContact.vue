<script>
export default {
  data() {
    return {
      nome: "",
      tlf: "",
      correo: "",
    };
  },
  methods: {
    enviarInformacion() {
      if (this.nome !== "" && this.tlf !== "" && this.correo !== "") {
        this.$emit("enviar-informacion", this.nome, this.tlf, this.correo);
        this.nome = "";
        this.tlf = "";
        this.correo = "";
      }
    },
  },
};
</script>

<template>
  <h1>Formulario para engadir un novo contacto</h1>
  <form @submit.prevent="enviarInformacion">
    <label for="nome">Nome</label> <br />
    <input type="text" v-model="nome" /> <br />
    <br />
    <label for="tlf">Teléfono</label> <br />
    <input type="text" v-model="tlf" /> <br />
    <br />
    <label for="correo">Correo</label> <br />
    <input type="text" v-model="correo" /> <br />
    <br />
    <button type="submit">Engadir</button>
  </form>
</template>

<style></style>
