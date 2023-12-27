// In resources/js/store/products.js
import axios from "axios";

const state = {
  products: [],
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    try {
      const response = await axios.get("/api/products");
      commit("setProducts", response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
