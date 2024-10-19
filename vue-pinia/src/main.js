import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./app.vue";
import "./assets/main.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
