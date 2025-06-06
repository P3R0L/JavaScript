<script>
// Modifica o exercicio do listado de persoas para engadir a funcionalidade de
// “Cambiar favorito”. Configura un botón no compoñente descendente que permita
// modificar se unha persoa é favorita ou non, de tal forma que a información se
// actualice no compoñente ascendente.
export default {
  data() {
    return {
      persoas: [
        {
          nome: "Ada Lovelace",
          tlf: "0123 45678 90",
          correo: "ada@localhost.com",
          favorito: true,
        },
        {
          nome: "Grace Hopper",
          tlf: "1234 56789 01",
          correo: "grace@localhost.com",
          favorito: false,
        },
      ],
    };
  },
  methods: {
    alternarFavorito(i) {
      this.persoas[i].favorito = !this.persoas[i].favorito;
    },
  },
};
</script>

<template>
  <Contact v-bind="persoas[0]" @alternar-favorito="alternarFavorito(0)" />
  <Contact
    :nome="persoas[1].nome"
    :tlf="persoas[1].tlf"
    :correo="persoas[1].correo"
    :favorito="persoas[1].favorito"
    @alternar-favorito="alternarFavorito(1)"
  />
</template>

<style></style>
