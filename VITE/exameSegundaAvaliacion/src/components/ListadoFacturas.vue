<template>
  <div>
    <h1>Facturas</h1>
    <div
      class="factura"
      v-for="(factura, index) in facturas"
      :key="index"
      :class="{ pagada: factura.pagada }"
    >
      <div>
        <strong>{{ factura.descricion }}</strong> —
        {{ factura.importe.toFixed(2) }} €
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            :checked="factura.pagada"
            @change="$emit('actualizar-factura', index, $event.target.checked)"
          />
          Pagada
        </label>
        <button @click="$emit('eliminar-factura', index)">Eliminar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["facturas"],
};
</script>

<style scoped>
.factura {
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-left: 5px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}
.factura.pagada {
  border-left-color: green;
  background-color: #f0fff0;
}
button {
  margin-left: 10px;
  background-color: #e53935;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #c62828;
}
</style>
