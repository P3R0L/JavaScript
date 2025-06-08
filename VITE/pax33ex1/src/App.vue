<script>
// Crea un compoñente que conteña un contador e mostre o seu valor. Engade un
// botón para incrementar o contador.
// Crea outro compoñente que teña unha caixa de texto de texto e ademais mostra o
// valor da caixa de texto noutro elemento HTML.
// Crea unha aplicación raíz que permita, mediante radiobuttons cambiar entre os dous
// compoñentes anteriores. Fai que o estado do compoñente se manteña aínda que se
// cambie o compoñente a mostrar.
export default {
  data() {
    return {
      radioButton: 0,
    };
  },
  computed: {
    currentTab() {
      if (this.radioButton == 0) {
        return "Contador";
      } else {
        return "Texto";
      }
    },
  },
};
</script>

<template>
  <label for="contador">Contador</label>
  <input type="radio" value="0" v-model="radioButton" />
  <br />
  <label for="texto">Texto</label>
  <input type="radio" value="1" v-model="radioButton" />
  <hr />
  <KeepAlive>
    <component :is="currentTab"></component>
  </KeepAlive>
</template>

<style></style>
