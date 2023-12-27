<template lang="">
  <div class="bg-gray-100 min-h-screen">
    <div class="flex py-8 px-16">
      <div class="left w-1/2">
        <img class="h-full object-cover" :src="coverImg" alt="" srcset="" />
      </div>
      <div class="right w-1/2 bg-white p-10 rounded-lg">
        <p class="text-indigo-600">Payment successful</p>
        <h1 class="text-5xl my-2 font-semibold">Thanks for ordering</h1>
        <p class="text-gray-900">
          We appreciate your order, we’re currently processing it. So hang tight
          and we’ll send you confirmation very soon!
        </p>
        <ul class="mt-8">
          <li
            v-for="(product, index) in cart"
            :key="product.id"
            :class="{ 'pb-16': isLastItem(index) }"
            class="flex border-b-2 py-5"
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
                      Qty {{ product.quantity }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="item w-1/2 flex flex-col justify-between items-end">
                <div class="price font-medium text-gray-900">
                  ${{ product.totalPrice }}
                </div>
              </div>
            </div>
            <div class="right"></div>
          </li>
        </ul>

        <div class="flex justify-between mt-4">
          <h2 class="font-medium text-gray-900">Subtotal</h2>
          <p class="font-medium text-gray-900">${{ totalPrice }}</p>
        </div>

        <div class="mt-16 flex justify-end">
          <a href="/" class="text-indigo-600 hover:text-indigo-500"
            >Continue Shopping<span aria-hidden="true"> →</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import coverImg from "./../../../public/img/confirmation-hero.jpeg";

export default {
  data() {
    return {
      cart: [],
      totalPrice: "",
      coverImg: coverImg,
    };
  },
  methods: {
    isLastItem(index) {
      return index === this.cart.length - 1;
    },
  },
  mounted() {
    const cartStorage = localStorage.getItem("cart");
    this.cart = JSON.parse(cartStorage);

    for (const product of JSON.parse(cartStorage)) {
      this.$store.dispatch("cart/addToCart", product);
    }

    this.totalPrice = this.$store.getters["cart/totalCartPrice"];

    localStorage.clear();
  },
};
</script>

<style lang=""></style>
