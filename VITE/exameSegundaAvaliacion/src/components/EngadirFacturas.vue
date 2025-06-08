<template>
  <div>
    <h1>Engadir Factura</h1>
    <form @submit.prevent="engadirFactura">
      <label>Descrición</label>
      <input type="text" v-model="descricion" />

      <label>Importe</label>
      <input type="number" v-model.number="importe" />

      <label> <input type="checkbox" v-model="pagada" /> Pagada </label>

      <button type="submit">Engadir</button>
    </form>

    <!-- Modal -->
    <div v-if="mostrarErro" class="overlay" @click="pecharModal">
      <div class="modal" @click.stop>
        <h2>Erro</h2>
        <p>Todos os campos deben estar cubertos e o importe ser válido.</p>
        <button @click="pecharModal">Pechar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descricion: "",
      importe: null,
      pagada: false,
      mostrarErro: false,
    };
  },
  methods: {
    engadirFactura() {
      if (!this.descricion || isNaN(this.importe) || this.importe <= 0) {
        this.mostrarErro = true;
        return;
      }
      this.$emit("engadir-factura", this.descricion, this.importe, this.pagada);
    },
    pecharModal() {
      this.mostrarErro = false;
    },
  },
};
</script>

<style scoped>
form {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
}
input[type="text"],
input[type="number"] {
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px;
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #1b5e20;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border-radius: 10px;
}
</style>
