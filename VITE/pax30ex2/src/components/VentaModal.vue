<script>
export default {
  methods: {
    ocultarVentaModal() {
      this.$emit("ocultar-venta-modal");
    },
  },
};
</script>

<template>
  <div>
    <header>
      <slot name="header">
        <p>default header</p>
      </slot>
    </header>
    <main>
      <slot name="body">
        <p>default body</p>
      </slot>
    </main>
    <footer>
      <slot name="footer">
        <p>default footer</p>
      </slot>
    </footer>
    <button @click="ocultarVentaModal">OK</button>
  </div>
</template>

<style></style>
