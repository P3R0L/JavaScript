import { createApp } from "vue";
import App from "./App.vue";
import ListadoFacturas from "./components/ListadoFacturas.vue";
import Factura from "./components/Factura.vue";
import EngadirFacturas from "./components/EngadirFacturas.vue";
import Resumo from "./components/Resumo.vue";

const app = createApp(App);
app.component("ListadoFacturas", ListadoFacturas);
app.component("Factura", Factura);
app.component("EngadirFacturas", EngadirFacturas);
app.component("Resumo", Resumo);
app.mount("#app");
