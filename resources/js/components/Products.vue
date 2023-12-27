<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        All Products
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="product.image"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                {{ product.description }}
              </p>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900">
                {{ product.price }}
              </p>
              <button
                @click="addToCart(product)"
                class="cursor-pointer bg-blue-500 text-white border border-blue-500 p-1 rounded text-sm mt-1"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products.products;
    },
  },
  methods: {
    addToCart(product) {
      // Dispatch an action to update the cart in the Vuex store
      this.$store.dispatch("cart/addToCart", product);
    },
  },
  mounted() {
    this.$store.dispatch("products/fetchProducts");
  },
};
</script>
