export function footerRenderItems(){

    
    const footerContainer = document.getElementById('FOOTER');
    let footerHTML = '';
    footerHTML +=`
            <div class="contact-info">
                    <p>
                        <b>Addres:  </b>Georgia, Tbilisi
                    </p>
                    <p>
                        <b>Email:  </b>Dimitri.guncadze@gmail.com
                    </p>
                    <p>
                        <b>Number:  </b>+995 558 600 320
                    </p>
            </div>
            <img class="footer-logo logo" src="./assets/logo.svg" alt="">
        `
        footerContainer.insertAdjacentHTML('beforeend', footerHTML);
}