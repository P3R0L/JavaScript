<script>
// Amplía a aplicación do exercicio anterior coas seguintes funcionalidades:
// a. Engade un novo compoñente que conteña un formulario para dar de alta un
// novo contacto. Engade este novo compoñente ao compoñente raíz da
// aplicación e fai a implementación necesaria para que ao dar de alta un novo
// contacto, se engada á lista de contactos do compoñente raíz.
// b. No compoñente que visualiza os datos de cada persoa (Contact) engade un
// botón que permita eliminar ese contacto. O contacto debe borrarse do array
// do compoñente raíz da aplicación.
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
      console.log(this.persoas[i].favorito);
    },
    engadirNovoContacto(nome, tlf, correo) {
      this.persoas.push({
        nome: nome,
        tlf: tlf,
        correo: correo,
        favorito: false,
      });
    },
    eliminarContacto(i) {
      this.persoas.splice(i, 1);
    },
  },
};
</script>

<template>
  <h1>Listado</h1>
  <Contact
    v-for="(persoa, index) in persoas"
    :key="index"
    v-bind="persoa"
    @alternar-favorito="() => alternarFavorito(index)"
    @eliminar-contacto="() => eliminarContacto(index)"
  />
  <hr />
  <newContact @enviar-informacion="engadirNovoContacto" />
</template>

<style></style>
