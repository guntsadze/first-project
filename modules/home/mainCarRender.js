export function mainCarRender(){
    const product = [
        {name: 'Mercedes-Benz SL', year: '1971', engine: '5.6L (SL)', mileage: '80 000km', img: '../assets/mainCars/mercedes-sl.jpeg', price:'250 000$'},
        {name: 'Ford Mustang', year: '1969', engine: '6.0L', mileage: '35 000km', img: '../assets/mainCars/mustang.jpeg', price:'120 000$'},
        {name: 'Honda S2000', year: '1999', engine: '2.0L', mileage: '50 000km', img: '../assets/mainCars/honda-s2000.jpeg', price:'20 000$'},
        {name: 'Ferrari 308 GTSi', year: '1980', engine: '2.9L', mileage: '120 000km', img: '../assets/mainCars/Ferrari 308 GTSi.jpeg', price:'200 000$'},
    
        
    ]
    
    const carsList = document.getElementsByClassName('cards')[0];
    let carsHTML = '';
    
        product.forEach(product =>{
            carsHTML +=`
            <div class="card-container">
                <div class="img"><img src="${product.img}" alt=""></div>
        
                <div class="car-des">
                    <h1> ${product.name} </h1>
                    <p>
                        <b>Year: </b> ${product.year}
                    </p>
                    <p>
                        <b>Engine: </b> ${product.engine}
                    </p>
                    <p>
                        <b>Mileage: </b> ${product.mileage}
                    </p>
                    <p>
                        <b>Price: </b>${product.price}
                    </p>
                    
                    
                </div>
            </div>
        `
        
            
    
        })
    
        carsList.insertAdjacentHTML('beforeend', carsHTML) 
}