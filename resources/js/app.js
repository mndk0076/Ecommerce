import { createApp } from "vue";
import store from "./store";
import MainNav from "./components/MainNav.vue";
import Products from "./components/Products.vue";
import SignIn from "./components/SignIn.vue";
import Register from "./components/Register.vue";
import Cart from "./components/Cart.vue";
import Checkout from "./components/Checkout.vue";
import Summary from "./components/Summary.vue";

const app = createApp();

app.component("main_nav", MainNav);
app.component("products", Products);
app.component("sign_in", SignIn);
app.component("register", Register);
app.component("cart_view", Cart);
app.component("checkout", Checkout);
app.component("order_summary", Summary);

app.use(store);
app.mount("#app");
