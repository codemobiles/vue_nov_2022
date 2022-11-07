import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Stock from "@/views/Stock.vue";
import StockCreate from "@/views/StockCreate.vue";
import StockEdit from "@/views/StockEdit.vue";
import Shop from "@/views/Shop.vue";
import Transaction from "@/views/Transaction.vue";
import Report from "@/views/Report.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/stock",
      meta: { isSecured: true },
      name: "stock",
      component: Stock,
    },
    {
      path: "/stock-create",
      meta: { isSecured: true },
      name: "stock-create",
      component: StockCreate,
    },
    {
      path: "/stock-edit/:id",
      meta: { isSecured: true },
      name: "stock-edit",
      component: StockEdit,
    },
    {
      path: "/shop",
      meta: { isSecured: true },
      name: "shop",
      component: Shop,
    },
    {
      path: "/report",
      meta: { isSecured: true },
      name: "report",
      component: Report,
    },
    {
      path: "/transaction",
      meta: { isSecured: true },
      name: "transaction",
      component: Transaction,
    },
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/login", // page not found
    },
  ],
});

export default router;
