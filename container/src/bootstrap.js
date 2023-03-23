import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartIndex";

console.log("container!");

productsMount(document.getElementById("dev-products"));
cartMount(document.getElementById("dev-cart"));
