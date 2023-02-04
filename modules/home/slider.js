export function slider(){
    const SLIDER = [
        {
            url: "https://www.google.ge/",
            img: "../../assets/slider/wk-slider.jpg",
            title: "Volkswagen"
        },{
            url: "https://www.google.ge/",
            img: "../../assets/slider/ferrari-slider.jpg",
            title: "Ferrari"
        },{
            url: "https://www.google.ge/",
            img: "../../assets/slider/ss-slider.jpg",
            title: "GT"
        },{
            url: "https://www.google.ge/",
            img: "../../assets/slider/mustang-slider.jpg",
            title: "Mustang"
        }
    ]
    
    const slider = document.getElementById('slider');
    const right = document.getElementById('right');
    const left = document.getElementById('left');
    let curentIndex = 0;
    
    
    function createImgElement(url){
        let element = document.createElement('img');
        element.src = url;
        return element;
    }
    
    function createAElement(url){
        let element = document.createElement('a');
        element.href = url;
        return element;
    }
    
    function setTitle(title){
        let element = document.createElement('h1');
        element.innerText = title;
        return element;
    }
    
    function setSlider(index){
        let curentSlide = SLIDER[index];
        let element = createAElement(curentSlide.url);
        element.appendChild(createImgElement(curentSlide.img));
        element.appendChild(setTitle(curentSlide.title));
        slider.innerHTML = '';
        slider.appendChild(element);
    }
    
    setSlider(curentIndex);
    
    right.addEventListener('click',() =>{
        if(curentIndex == SLIDER.length -1){
            curentIndex = 0;
        }
        if(curentIndex < SLIDER.length - 1){
            curentIndex++
            setSlider(curentIndex);
        }
    
        
        console.log(curentIndex);
    
        
    })
    
    
    left.addEventListener('click', function(){
        if(curentIndex == 0){
            curentIndex = SLIDER.length -1;
        }
        if(curentIndex !== 0 ){
            curentIndex--;
            setSlider(curentIndex);
        }
    
        console.log(curentIndex);
    })
}