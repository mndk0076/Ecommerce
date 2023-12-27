import axios from "axios";

const state = {
  cart: [],
  isCartVisible: false,
};

const mutations = {
  updateCart(state, product) {
    const existingProduct = state.cart.find((p) => p.id === product.id);

    if (existingProduct) {
      // If the product already exists
      existingProduct.quantity += product.quantity;
      // Update the total price based on the new quantity
      existingProduct.totalPrice =
        parseFloat(existingProduct.price) * existingProduct.quantity;
    } else {
      // If the product doesn't exist, add it to the cart
      const productWithQuantity = {
        ...product,
        totalPrice: parseFloat(product.price) * product.quantity,
      };
      state.cart.push(productWithQuantity);
    }
  },
  removeProduct(state, productId) {
    state.cart = state.cart.filter((product) => product.id !== productId);
  },
  toggleCartVisibility(state) {
    state.isCartVisible = !state.isCartVisible;
  },
};

const actions = {
  addToCart({ commit }, product) {
    // Set a default quantity of 1 if 'quantity' is not provided in the product
    const productWithQuantity = { ...product, quantity: product.quantity || 1 };
    commit("updateCart", productWithQuantity);
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  removeProduct({ commit }, productId) {
    commit("removeProduct", productId);
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  // Update Quantity of the
  updateQuantity({ commit, state }, { productId, quantity }) {
    const existingProduct = state.cart.find(
      (product) => product.id === productId,
    );

    // console.log(`existingProduct `, existingProduct);

    if (existingProduct) {
      // If the product exists, update its quantity

      existingProduct.quantity = quantity / 2;

      // Commit the update to the cart mutation
      commit("updateCart", existingProduct);

      // Update local storage with the modified cart
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },

  async confirmCheckout({ commit, state }) {
    const orderItems = state.cart.map((product) => ({
      product_id: product.id,
      quantity: product.quantity,
      price: product.totalPrice,
    }));

    try {
      const response = await axios.post("/api/order/create", orderItems, {
        headers: {
          Authorization: `Bearer 1|mmgj4Bewpknr4xlQStabkFrCnlG3ObxdYnIxk7vG56dddd2b`,
        },
      });

      if (response.status === 200) {
        // clear the cart after successful checkout
        // commit("setCart", []);
        // commit("setTotalPrice", "");

        // Clear local storage
        // localStorage.removeItem("cart");

        console.log(`response: `, response);

        console.log("Order placed successfully!");
      } else {
        console.log(`response: `, response);
        console.error("Failed to place the order.");
      }
    } catch (error) {
      console.log(`error: `, error);
    }
  },

  toggleCartVisibility({ commit }) {
    commit("toggleCartVisibility");
  },
};

const getters = {
  cartLength: (state) => {
    // Calculate the sum of quantities for all products in the cart
    return state.cart.reduce((total, product) => total + product.quantity, 0);
  },
  totalCartPrice: (state) => {
    // Calculate the total price of the cart by summing the product prices * quantities
    return state.cart.reduce(
      (total, product) => total + parseFloat(product.price) * product.quantity,
      0,
    );
  },
  isCartVisible: (state) => state.isCartVisible,
  getCart: (state) => state.cart,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
