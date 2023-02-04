import { renderProducts } from "./render-product.js";

let pages = 0;
let currentPage = 1;

export function generatePagination(data, dataPerPage) {

    pages = Math.trunc(data.length / dataPerPage);
    if (data.length % dataPerPage > 0){
        pages+=1;
    }



    const paginationContainer = document.getElementById('PAGENATION');
    paginationContainer.innerHTML = '';
    let pagesHTML = `<li class="page-item disabled"><a class="page-link previous">Previous</a></li>`;
    for (let i = 0; i < pages; i ++){
        if ( i == 0 ) {
            pagesHTML += `<li class="page-item active"><a class="page-link">${i + 1}</a></li>`
        }else{
            pagesHTML += `<li class="page-item"><a class="page-link">${i + 1}</a></li>`
        }
    }
    pagesHTML += `<li class="page-item"><a class="page-link next">Next</a></li>`
    paginationContainer.insertAdjacentHTML('beforeend', pagesHTML);


    paginate(data, dataPerPage);
}


function paginate(data, dataPerPage){
    const pageItems = [...document.getElementsByClassName('page-item')];
    pageItems.forEach(page => {
        page.addEventListener('click', () =>{
            if(page.textContent == "Previous"){
                if (currentPage -1 < 1){
                    return
                }
                currentPage = currentPage -1;
                const prods = dataPerPage * (currentPage -1);
                setActive(pageItems, currentPage);
                renderProducts(data, prods, prods + dataPerPage);
            }else if (page.textContent == 'Next'){
                if(+currentPage + 1 > pages){
                    return;
                }
                currentPage = +currentPage +1;
                const prods = dataPerPage * (currentPage -1);
                setActive(pageItems, currentPage);
                renderProducts(data, prods, prods + dataPerPage);
            }else{
                currentPage = page.textContent;
                const prods = dataPerPage * (currentPage -1);
                setActive(pageItems, currentPage);
                renderProducts(data, prods, prods + dataPerPage);
            }
        })
        
    });
}



function checkBtnDisable(page) {
    const pageItems = document.getElementsByClassName('page-item');
    if ( page == 1 ) {
        pageItems[0].classList.add('disabled');
        pageItems[pageItems.length - 1].classList.remove('disabled');
    } else if ( pages == page ) {
        pageItems[0].classList.remove('disabled');
        pageItems[pageItems.length - 1].classList.add('disabled');
    } else {
        if (page !== 'Previous'  && page !== 'Next') {
            pageItems[0].classList.remove('disabled');
            pageItems[pageItems.length - 1].classList.remove('disabled');
        }
    }
}



function setActive(pages) {
    checkBtnDisable(currentPage);
    pages.forEach(page => {
        if (page.textContent == currentPage) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    })
}