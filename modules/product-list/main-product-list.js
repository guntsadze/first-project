import { headerRenderItems } from "../header-footer/render-header-items.js";
import { clock } from "../other/clock.js";
import { filter } from "../product-list/filter.js";
import { generatePagination } from "../product-list/pagenation.js";
import { renderProducts } from "../product-list/render-product.js";
import { search } from "../product-list/search.js";
import { burger } from "../burger/burger.js"
import { footerRenderItems } from "../header-footer/render-footer.js";
import { auth } from "../auth/mainAuth.js";
import { addToCart } from "./add-to-cart.js";


export const ITEM_COUNT = 10;


function main() {



    const PRODUCTS = [
        {id: '1', title: 'Mustang 1969', img: '../assets/prod-cars/mustang.jpeg',price:45000},
        {id: '2', title: 'Dodge 1970', img: '../assets/prod-cars/dodge.jpeg',price:2500},
        {id: '3', title: 'Sl-500 1960',img: '../assets/prod-cars/sl-500.jpeg',price:100000},
        {id: '4', title: 'Porschce 911', img: '../assets/prod-cars/911.jpeg', price:45000},
        {id: '5', title: 'Cobra 1960', img: '../assets/prod-cars/cobra.jpeg', price:55000},
        {id: '6', title: 'BWM e38 1990', img: '../assets/prod-cars/e38.jpeg', price:30000},
        {id: '7', title: 'Supra 1999', img: '../assets/prod-cars/supra.jpeg', price:50000},
        {id: '8', title: 'Skyline 1997', img: '../assets/prod-cars/skyline.jpeg', price:25000},
        {id: '9', title: 'Cadillac 1949', img: '../assets/prod-cars/cadillac.jpeg',price:45000},
        {id: '10', title: 'Lamborghini 1980', img: '../assets/prod-cars/lambo.jpeg', price:100000},
        {id: '11',title: 'Mini 1970', img: '../assets/prod-cars/mini.jpeg', price:10000},
        {id: '12',title: 'Civic eg 1995', img: '../assets/prod-cars/eg.jpeg', price:7000},
        {id: '13',title: 'Civic Ek 1999', img: '../assets/prod-cars/ek.jpeg', price:13000},
        
    ]



    renderProducts(PRODUCTS, 0, ITEM_COUNT);
    generatePagination(PRODUCTS, ITEM_COUNT);
    search(PRODUCTS);
    filter(PRODUCTS);
    clock();
    headerRenderItems();
    footerRenderItems();
    burger();
}










window.addEventListener('load', () => {
    main();
});