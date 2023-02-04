import { auth } from "../auth/mainAuth.js";
import { mainJS } from "../home/mainJS.js";
import { removeOneItemFromCart, renderCartList } from "./render-cart-list.js"
import { removeItemFromCart } from "./render-cart-list.js"


window.addEventListener('load', () => {
    mainJS();
    // auth();
    renderCartList();
    removeItemFromCart();
    removeOneItemFromCart();
})


