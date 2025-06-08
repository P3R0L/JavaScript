<template>
  <div class="factura" :class="{ pagada }">
    <div>
      <strong>{{ descricion }}</strong> — {{ importe.toFixed(2) }} €
    </div>
    <div>
      <label>
        <input type="checkbox" :checked="pagada" @change="onChange" /> Pagada
      </label>
      <button @click="$emit('eliminar', index)">Eliminar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["descricion", "importe", "pagada", "index"],
  methods: {
    onChange(e) {
      this.$emit("esta-pagada", this.index, e.target.checked);
    },
  },
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
</style>
