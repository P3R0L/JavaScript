import { createApp } from "vue";
import App from "./App.vue";
import Contact from "./components/Contact.vue";
import newContact from "./components/newContact.vue";

const app = createApp(App);
app.component("Contact", Contact);
app.component("newContact", newContact);
app.mount("#app");
