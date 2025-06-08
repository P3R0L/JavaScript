<script>
// Crea unha aplicación que conteña un botón que, ao pulsarse, mostre unha ventá
// modal (que se creará como un compoñente novo).
// Observa que o compoñente para a ventá modal ten definidos 3 slots con valores por
// defecto. Se se pasa contido ao slot, mostrarase o contido personalizado.
// Cando se pulse o botón Ok da ventá modal, esta ocultarase.
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    mostrarVentaModal() {
      this.visible = true;
    },
    ocultarVentaModal() {
      this.visible = false;
    },
  },
};
</script>

<template>
  <div class="container">
    <button @click="mostrarVentaModal()" class="button">WINDOW ALERT</button>
  </div>
  <br />
  <template v-if="visible">
    <VentaModal @ocultar-venta-modal="ocultarVentaModal" class="container" />
  </template>
</template>

<style>
.mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}
.container {
  width: 300px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
}
</style>
