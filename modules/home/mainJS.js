import { burger } from "../burger/burger.js";
import { footerRenderItems } from "../header-footer/render-footer.js";
import { headerRenderItems } from "../header-footer/render-header-items.js";
import { clock } from "../other/clock.js";
import { addToCart } from "../product-list/add-to-cart.js";





export function mainJS() {
    clock();
    burger();
    addToCart();
    headerRenderItems();
    footerRenderItems();
}