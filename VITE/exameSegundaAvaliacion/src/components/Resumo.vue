<template>
  <div class="resumo">
    <h1>Resumo</h1>
    <p><strong>Total:</strong> {{ total.toFixed(2) }} €</p>
    <p><strong>Pagadas:</strong> {{ totalPagado.toFixed(2) }} €</p>
    <p><strong>Pendentes:</strong> {{ totalPendente.toFixed(2) }} €</p>
  </div>
</template>

<script>
export default {
  props: ["facturas"],
  computed: {
    total() {
      return this.facturas.reduce((sum, f) => sum + f.importe, 0);
    },
    totalPagado() {
      return this.facturas
        .filter((f) => f.pagada)
        .reduce((sum, f) => sum + f.importe, 0);
    },
    totalPendente() {
      return this.total - this.totalPagado;
    },
  },
};
</script>

<style scoped>
.resumo {
  background: #ffffff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.resumo p {
  font-size: 18px;
  margin: 10px 0;
}
</style>
