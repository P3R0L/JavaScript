<script>
// Modifica o exercicio do listado de contactos do apartado anterior para que o array de
// persoas estea definido no compoñente pai e se pase a información ao compoñente
// fillo utilizando props. No compoñente raíz da aplicación debes crear un array con
// dúas persoas mínimo indicando o nome, teléfono e correo electrónico.
// Crea unha aplicación que mostre a información dos contactos utilizando o
// compoñente Contact.
// Implementa a validacion de props.
export default {
  data() {
    return {
      persoas: [
        {
          nome: "Ada Lovelace",
          tlf: "0123 45678 90",
          correo: "ada@localhost.com",
        },
        {
          nome: "Grace Hopper",
          tlf: "1234 56789 01",
          correo: "grace@localhost.com",
        },
      ],
    };
  },
};
</script>

<template>
  <Contact v-bind="persoas[0]" />
  <Contact
    :nome="persoas[1].nome"
    :tlf="persoas[1].tlf"
    :correo="persoas[1].correo"
  />
</template>

<style></style>
