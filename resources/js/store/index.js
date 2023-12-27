import { createApp } from "vue";
import { createStore } from "vuex";
import axios from "axios";
import products from "./products";
import register from "./register";
import cart from "./cart";
import auth from "./auth";

const app = createApp();

const store = createStore({
  modules: {
    auth,
    register,
    products,
    cart,
  },
});

export default store;
