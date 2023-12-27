// auth.js

import axios from "axios";

const state = {
  user: null,
  error: null,
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  CLEAR_USER(state) {
    state.user = null;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await axios.post("/api/login", credentials);
      console.log("🚀 ~ file: auth.js:26 ~ login ~ response:", response);
      console.log(`response: `, response);

      sessionStorage.setItem("isAuthenticated", true);
      sessionStorage.setItem("name", response.data.user.name);
      sessionStorage.setItem("email", response.data.user.email);

      commit("SET_USER", response.data.user);
    } catch (error) {
      // Handle login error
      commit("SET_ERROR", "Invalid credentials"); // Set the error message
      console.error("Login error:", error);
      throw error; // Rethrow the error to propagate it to the component
    }
  },
  async logout({ commit }) {
    try {
      await axios.post("/logout");
      commit("CLEAR_USER");
    } catch (error) {
      // Handle logout error (e.g., show an error message)
      console.error("Logout error:", error);
    }
  },
  async fetchUser({ commit }) {
    try {
      const response = await axios.get("/user");
      commit("SET_USER", response.data.user);
    } catch (error) {
      // Handle fetch user error (e.g., show an error message)
      console.error("Fetch user error:", error);
    }
  },
};

export default {
  state,
  mutations,
  actions,
};
