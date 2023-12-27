import axios from "axios";

const state = {
  isAuthenticated: false,
  name: "",
  email: "",
  userData: {},
};

const actions = {
  async registerUser({ commit }, userData) {
    try {
      // Make API request to Laravel backend
      await axios.post("/register-user", userData);

      // Update Vuex store on successful registration
      sessionStorage.setItem("isAuthenticated", true);
      sessionStorage.setItem("name", userData.name);
      sessionStorage.setItem("email", userData.email);
    } catch (error) {
      throw error;
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
};
