<template>
  <div class="app">
    <nav class="navbar">
      <button @click="cambiarCurrentTab('lf')">Listado Facturas</button>
      <button @click="cambiarCurrentTab('ef')">Engadir Factura</button>
      <button @click="cambiarCurrentTab('r')">Resumo</button>
    </nav>

    <KeepAlive>
      <component
        :is="currentTab"
        :facturas="facturas"
        @engadir-factura="engadirFactura"
        @actualizar-factura="actualizarFactura"
        @eliminar-factura="eliminarFactura"
      />
    </KeepAlive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: "ListadoFacturas",
      facturas: [
        { descricion: "Luz", importe: 41.33, pagada: true },
        { descricion: "Internet", importe: 29.99, pagada: false },
        { descricion: "Gas", importe: 17.15, pagada: false },
      ],
    };
  },
  methods: {
    cambiarCurrentTab(tab) {
      if (tab === "lf") this.currentTab = "ListadoFacturas";
      else if (tab === "ef") this.currentTab = "EngadirFacturas";
      else this.currentTab = "Resumo";
    },
    engadirFactura(descricion, importe, pagada) {
      this.facturas.push({ descricion, importe, pagada });
      this.currentTab = "ListadoFacturas";
    },
    actualizarFactura(index, pagada) {
      this.facturas[index].pagada = pagada;
    },
    eliminarFactura(index) {
      this.facturas.splice(index, 1);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f6f8;
}

.app {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.navbar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 10px 15px;
  border: none;
  background-color: #2d89ef;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #1b5fbd;
}
</style>
