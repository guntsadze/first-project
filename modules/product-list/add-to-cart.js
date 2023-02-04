export let cartItemCount = 0;
const cartNumber = document.getElementsByClassName('cartNumber')[0];

export function addToCart(products) {
    const p = localStorage.getItem('products');
    if ( p ) {
        cartItemCount = JSON.parse(p).length;
        cartNumber.innerHTML = cartItemCount;
    }
    addToCartListener(products);

}

function addToCartListener(products) {
    const cartButtons = [...document.getElementsByClassName('add-to-cart')];
    cartButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const product = products.filter(product => product.id == +btn.id);
            if ( localStorage.getItem('products')) {
                const localStorageProducts = JSON.parse(localStorage.getItem('products'));
                localStorageProducts.push(product[0]);
                localStorage.setItem('products', JSON.stringify(localStorageProducts));

                cartItemCount+= 1;
                cartNumber.innerHTML = cartItemCount;
            } else {
                localStorage.setItem('products' , JSON.stringify(product));

                cartItemCount+= 1;
                cartNumber.innerHTML = cartItemCount;
            }
            
            
        })
    })
}