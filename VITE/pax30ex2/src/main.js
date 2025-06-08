import { createApp } from "vue";
import App from "./App.vue";
import VentaModal from "./components/VentaModal.vue";

const app = createApp(App);
app.component("VentaModal", VentaModal);
app.mount("#app");
