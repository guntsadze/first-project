import { renderProducts } from "../product-list/render-product.js";
import { generatePagination } from "./pagenation.js"; 
import { ITEM_COUNT } from "./main-product-list.js";



export function search(products) {
    const searchInp =  document.getElementById('search');
            searchInp.addEventListener('keyup', (ev) => {
                const searchValue = searchInp.value;
                const filtered = products.filter(p => p.title.toLowerCase().includes(searchValue.toLowerCase()));
                renderProducts(filtered, 0, ITEM_COUNT);
                generatePagination(filtered, ITEM_COUNT);
                
        if ( filtered.length == 0 ) {
            showSearchMessage();
        } else {
            hideSearchMessage();
        };
    });
 }

 function showSearchMessage() {
    document.getElementsByClassName('filter-btn')[0].style.visibility = 'hidden'
    document.getElementById('PAGENATION').style.visibility = 'hidden'
    document.getElementsByClassName('search-none')[0].style.visibility = 'visible'
 }


function hideSearchMessage() {
    document.getElementsByClassName('filter-btn')[0].style.visibility = 'visible'
    document.getElementById('PAGENATION').style.visibility = 'visible'
    document.getElementsByClassName('search-none')[0].style.visibility = 'hidden' 
    document.getElementById('FOOTER').style.visibility = 'hidden'   
 }