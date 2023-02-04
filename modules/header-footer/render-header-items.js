export function headerRenderItems(){

    const header = [
        {title : 'Home', href: './home.html'},
        {title : 'About', href: './about.html'},
        {title : 'Contact', href: './Contact.html'},
        {title : 'Cars', href: './Cars.html'},
    ]
    
    const headerList = document.getElementsByClassName('main-navigation')[0];
    let headerHTML = '';
    
        header.forEach(header =>{
            headerHTML +=`
            <li><a href="${header.href}">${header.title}</a></li>
        `
        
            
    
        })
    
        headerList.insertAdjacentHTML('afterbegin', headerHTML);
}