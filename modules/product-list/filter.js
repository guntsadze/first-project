import { generatePagination } from "./pagenation.js";
import { renderProducts } from "./render-product.js";
import { ITEM_COUNT } from "./main-product-list.js";

const sidebar = document.getElementsByClassName('sidebar')[0];
const backdrop = document.getElementsByClassName('sidebar-backdrop')[0];



export function filter(products){
    const filterBtn = document.getElementsByClassName('filter-btn')[0];
    filterBtn.addEventListener('click', () =>{
        showSidebar();
        addBackdropListener();
        addFilterBtnListener(products);
    })
}



function showSidebar(){
    sidebar.classList.remove('hidden');
    sidebar.classList.add('shown');
    backdrop.style.visibility = "visible";
    backdrop.style.opacity = "1";
}


function hideSidebar(){
    sidebar.classList.add('hidden');
    sidebar.classList.remove('shown');
    backdrop.style.visibility = "hidden";
    backdrop.style.opacity = "0";
}


function addBackdropListener(){
    backdrop.addEventListener('click', () =>{
        hideSidebar();
    })
}


function addFilterBtnListener(products){
    const filterBtnBtn = document.getElementById('filter-btn-btn');
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    filterBtnBtn.addEventListener('click',() =>{
        filterProds(products, from.value, to.value);
    })
    
    document.getElementById('from').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            filterProds(products, from.value, to.value);
        }
    });

    document.getElementById('to').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            filterProds(products, from.value, to.value);
        }
    });
}



function filterProds(products, from, to) {
    let fitleredProducts;
    if (from && !to) {
        fitleredProducts = products.filter(pr => {
            return pr.price >= from;
        });
    } else if (!from && to) {
        fitleredProducts = products.filter(pr => {
            return pr.price <= to;
        });
    } else {
        fitleredProducts = products.filter(pr => {
            return pr.price >= from && pr.price <= to;
        });
    }
    renderProducts(fitleredProducts, 0, ITEM_COUNT);
    generatePagination(fitleredProducts, ITEM_COUNT);
    hideSidebar();
}


