import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import router from './routers'
import { Icon } from "@iconify/vue";
const app = createApp(App)

app.use(router)
app.component("Icon", Icon).mount("#app");
