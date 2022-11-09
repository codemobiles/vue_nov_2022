import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
import "ant-design-vue/dist/antd.less";
import "./assets/main.css";
import Antd from "ant-design-vue";
import "./assets/main.css";
import store from "@/store";
import filters from "@/services/filters";


const app = createApp(App);
app.config.globalProperties.$filters = filters;
app.use(store);
app.use(Antd);
app.use(router);

app.mount("#app");
