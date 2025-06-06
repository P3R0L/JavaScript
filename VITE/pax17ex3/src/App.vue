<script>
// Engade ao exercicio anterior información de se un contacto é favorito ou non. Esta
// información almacénase no array do compoñente raíz e pásase ao compoñente
// Contact como prop.
// Mostra visualmente se é un contacto favorito ou non. Podes utilizar texto ou imaxes,
// como se mostra a continuacion.
// Engade tamén ao compoñente descendente a funcionalidade que permita modificar
// se un compoñente é favorito ou non. Fai que visualmente se actualice a información
// de se é ou non favorito. De momento non se explicou como cambiar este dato no
// compoñente ascendente.
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
};
</script>

<template>
  <Contact v-bind="persoas[0]" />
  <Contact
    :nome="persoas[1].nome"
    :tlf="persoas[1].tlf"
    :correo="persoas[1].correo"
    :favorito="persoas[1].favorito"
  />
</template>

<style></style>
