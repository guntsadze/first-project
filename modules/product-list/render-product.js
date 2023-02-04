import { addToCart } from "./add-to-cart.js";

export function renderProducts(products ,from , to ){
    const carsList = document.getElementsByClassName('main-cars')[0];
    carsList.innerHTML = '';
    let carsHTML = '';
    
        products.slice(from, to).forEach(product =>{
            carsHTML +=`
            <div class="carCards">
                <div class="car-img">
                    <img src="${product.img}" alt="">
                </div>
                <div class="card-des">
                    <h1> ${product.title} </h1>
                    <p>
                        <b>Price: </b>${product.price}$
                    </p>
                    
                    <div class="btn">
                        <button class="add-to-cart" id="${product.id}">Add To Cart</button>
                        <button>Continue</button>
                    </div>
                </div>                
            </div>
        `
        
            
    
        })
    
        carsList.insertAdjacentHTML('beforeend', carsHTML);
        addToCart(products);
}