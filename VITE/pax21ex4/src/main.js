import { createApp } from "vue";
import App from "./App.vue";
import Persoa from "./components/Persoa.vue";
import FormularioPersoa from "./components/FormularioPersoa.vue";

const app = createApp(App);
app.component("Persoa", Persoa);
app.component("FormularioPersoa", FormularioPersoa);
app.mount("#app");
