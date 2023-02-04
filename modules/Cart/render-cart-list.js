import { isAuthorized } from "../auth/check-logedin.js";
import { showModal } from "../auth/register.js";
import { hideModal } from "../auth/register.js";


const productsToRender = [];

export function renderCartList() {
    const cartContainer = document.getElementById('CART');
    const products = JSON.parse(localStorage.getItem('products'));
    cartContainer.innerHTML = '';
    if ( products ) {
        // console.log(products)
        let html = '';
        products.forEach(product => {
            if (productsToRender.filter(p => p[0].id == product.id).length > 0) {
                productsToRender.map(p => {
                    if (p[0].id == product.id) {
                        p[1] += 1;
                    }
                });
            } else {
                productsToRender.push([product,1])
            }  
        });

        
        let sumPrices = [];
        
        products.forEach( obj =>{
            sumPrices.push(obj.price)
        });

        let sum = sumPrices.reduce((partialSum, a) => partialSum + a, 0)
        console.log(sum)
        const totPrice = document.getElementsByClassName('totPrice')[0];
        totPrice.insertAdjacentHTML('beforeend', sum)
        productsToRender.forEach(p => {
            html += `
            
                <div class="cart-container">
                    <div class="carts">
                        <img src="${p[0].img}" alt="img">
                        <div><span>${p[0].title}</span>
                        <span>${p[0].price}$</span>
                        <span> Count: ${p[1]} </span>
                        <button id="${p[0].id}" class="filter-btn removeBtns"> Remove </button>
                        </div>
                        
                    </div>
                </div>
            
            `
        })
        
        cartContainer.insertAdjacentHTML('beforeend', html);
    } else {
        const emptycart = document.getElementById('CARD');
        let HTML = '';
            HTML +=`
            <div class="emptyCart">Card Is Empty</div>
        `
        emptycart.insertAdjacentHTML('beforeend', HTML);
        document.getElementById('FOOTER').style.visibility = 'hidden'  
        document.getElementsByClassName('filter-btn')[0].style.visibility = 'hidden'
        document.getElementsByClassName('buy')[0].style.visibility = 'hidden'
        document.getElementsByClassName('totPrice')[0].style.visibility = 'hidden'
    }
}



export function removeItemFromCart(products) {
    const removeBtn = [...document.getElementsByClassName('removeBtnBtn')];
    removeBtn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            localStorage.removeItem('products');
            location.reload();
        })

    })
}


export function removeOneItemFromCart() {
    const removeBtn = [...document.getElementsByClassName('removeBtns')];
    // const removeOne = [...document.getElementsByClassName('oneRemove')];
    const products = JSON.parse(localStorage.getItem('products'));
    removeBtn.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            const filtered1 = products.filter(p => p.id == btn.id);
            const filtered2 = products.filter(p => p.id != btn.id);
            let prices = [];
            filtered1.forEach(price =>{
                
            })
            
            if (filtered1[0].id = btn.id ) {
                filtered1.shift();
                location.reload()
                // filtered1.length = 0
            }
            const newProducts = [...filtered1, ...filtered2];
            localStorage.setItem('products', JSON.stringify(newProducts));
            renderCartList();
        })

    })
}




function checkregister(){
    const buyBtn = document.getElementsByClassName('buy')[0]
    

    buyBtn.addEventListener('click', () =>{
        if (!isAuthorized()){
            const registerModal = document.getElementById('REGISTER');
            const closeBtn = document.getElementById('CLOSE-BTN-REG');
            showModal(registerModal);
            hideModal(registerModal, closeBtn);
        }else{
            alert('Congratulations on your purchase')
        }
        
    })
}



checkregister();