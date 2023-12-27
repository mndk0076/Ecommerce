<template lang="">
  <div class="bg-gray-100">
    <a
      href="/"
      class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 mx-16 mt-6"
    >
      Back
    </a>
    <p class="px-16 mt-8">Dummy Display Data. Don't need to fill it up!</p>

    <div class="flex py-4 px-16 gap-10">
      <div class="left w-1/2">
        <form>
          <div class="row pb-10 border-b-2">
            <h2 class="text-xl font-semibold">Contact information</h2>
            <div class="col flex flex-col mt-6">
              <label for="email">Email</label>
              <input
                class="border-solid border-2 p-1 rounded"
                type="email"
                id="email"
                name="email"
              />
            </div>
          </div>

          <div class="row mt-6 pb-10 border-b-2">
            <h2 class="text-xl font-semibold">Shipping information</h2>
            <div class="col flex mt-6 gap-3">
              <div class="item flex flex-col w-1/2">
                <label for="fname">First Name</label>
                <input
                  class="border-solid border-2 p-1 rounded"
                  type="text"
                  id="fname"
                  name="fname"
                />
              </div>
              <div class="item flex flex-col w-1/2">
                <label for="lname">Last Name</label>
                <input
                  class="border-solid border-2 p-1 rounded"
                  type="text"
                  id="lname"
                  name="lname"
                />
              </div>
            </div>
            <div class="col flex flex-col mt-6">
              <label for="address">Address</label>
              <input
                class="border-solid border-2 p-1 rounded"
                type="text"
                id="address"
                name="address"
              />
            </div>
            <div class="col flex flex-col mt-6">
              <label for="apartment">Apartment, suite, etc.</label>
              <input
                class="border-solid border-2 p-1 rounded"
                type="text"
                id="apartment"
                name="apartment"
              />
            </div>

            <div class="col flex mt-6 gap-3">
              <div class="item flex flex-col w-1/2">
                <label for="city">City</label>
                <input
                  class="border-solid border-2 p-1 rounded"
                  type="text"
                  id="city"
                  name="city"
                />
              </div>
              <div class="item flex flex-col w-1/2">
                <label for="countries">Country</label>
                <select
                  id="countries"
                  class="border-solid border-2 p-1 rounded focus:border-blue-500 block w-full"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            <div class="col flex mt-6 gap-5">
              <div class="item flex flex-col w-1/2">
                <label for="state">State / Province</label>
                <input
                  class="border-solid border-2 p-1 rounded"
                  type="text"
                  id="state"
                  name="state"
                />
              </div>
              <div class="item flex flex-col w-1/2">
                <label for="postal">Postal code</label>
                <input
                  class="border-solid border-2 p-1 rounded"
                  type="text"
                  id="postal"
                  name="postal"
                />
              </div>
            </div>

            <div class="col flex flex-col mt-6">
              <label for="phone">Phone Number</label>
              <input
                class="border-solid border-2 p-1 rounded"
                type="text"
                id="phone"
                name="phone"
              />
            </div>
          </div>

          <div class="row mt-8">
            <h2 class="text-xl font-semibold">Payment</h2>
            <div class="col flex flex-col mt-6">
              <label for="card_number">Card number</label>
              <input
                class="border-solid border-2 p-1 rounded"
                type="text"
                id="card_number"
                name="card_number"
              />
            </div>

            <div class="col flex flex-col mt-6">
              <label for="card_name">Name on card</label>
              <input
                class="border-solid border-2 p-1 rounded"
                type="text"
                id="card_name"
                name="card_name"
              />
            </div>

            <div class="col flex mt-6 gap-3">
              <div class="item flex flex-col w-2/3">
                <label for="expiration_date">Expiration date (MM/YY)</label>
                <input
                  class="border-solid border-2 p-1 rounded"
                  type="text"
                  id="expiration_date"
                  name="expiration_date"
                />
              </div>
              <div class="item flex flex-col w-1/3">
                <label for="cc">CC</label>
                <input
                  class="border-solid border-2 p-1 rounded"
                  type="text"
                  id="cc"
                  name="cc"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="right w-1/2 bg-white self-start py-6 pb-8 rounded-lg">
        <ul>
          <li
            v-for="(product, index) in cart"
            :key="product.id"
            :class="{ 'pb-16': isLastItem(index) }"
            class="flex border-b-2 py-5 mx-10"
          >
            <div class="flex w-full">
              <div class="item w-1/2 flex">
                <img
                  class="w-26 h-28 object-contain mr-4 border-2 rounded"
                  :src="product.image"
                  alt=""
                />
                <div class="info flex flex-col justify-between">
                  <div>
                    <h3 class="text-base font-medium text-gray-900">
                      {{ product.name }}
                    </h3>
                    <p class="font-extralight text-sm text-gray-500">
                      {{ product.description }}
                    </p>
                  </div>
                  <div>
                    <p class="font-extralight text-sm text-gray-500">
                      Qty
                      <select
                        id="quantity"
                        v-model="product.quantity"
                        @change="
                          handleQuantityChange(product.id, product.quantity)
                        "
                        class="rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      >
                        <option
                          v-for="qty in quantityOptions"
                          :key="qty"
                          :value="qty"
                        >
                          {{ qty }}
                        </option>
                      </select>
                    </p>
                  </div>
                </div>
              </div>
              <div class="item w-1/2 flex flex-col justify-between items-end">
                <div class="price font-medium text-gray-900">
                  ${{ product.totalPrice }}
                </div>
                <button
                  @click="removeProduct(product.id)"
                  type="button"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Remove
                </button>
              </div>
            </div>
            <div class="right"></div>
          </li>
        </ul>

        <div class="flex justify-between mt-3 mx-10">
          <h2 class="font-medium text-gray-900">Subtotal</h2>
          <p class="font-medium text-gray-900">${{ totalPrice }}</p>
        </div>

        <div class="flex justify-end mt-10 mr-10">
          <!-- 
            TODO:
                  finish @click="confirmCheckout"
          -->
          <a
            href="/summary"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-white font-bold py-2 px-4 rounded"
          >
            Confirm Checkout
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: [],
      totalPrice: "",
      quantityOptions: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  methods: {
    isLastItem(index) {
      return index === this.cart.length - 1;
    },
    handleQuantityChange(productId, quantity) {
      this.$store.dispatch("cart/updateQuantity", { productId, quantity });

      this.totalPrice = this.$store.getters["cart/totalCartPrice"];
      this.cart = this.$store.getters["cart/getCart"];
    },
    removeProduct(productId) {
      this.$store.dispatch("cart/removeProduct", productId);
      this.cart = this.$store.getters["cart/getCart"];
      this.totalPrice = this.$store.getters["cart/totalCartPrice"];
    },

    async confirmCheckout() {
      try {
        await this.$store.dispatch("cart/confirmCheckout");
      } catch (error) {
        console.error("Error confirming checkout:", error);
      }
    },
  },
  mounted() {
    const cartStorage = localStorage.getItem("cart");
    this.cart = JSON.parse(cartStorage);

    for (const product of JSON.parse(cartStorage)) {
      this.$store.dispatch("cart/addToCart", product);
    }

    this.totalPrice = this.$store.getters["cart/totalCartPrice"];
  },
};
</script>

<style lang=""></style>
