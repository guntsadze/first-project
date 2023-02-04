export function burger() {
    const burger = document.getElementById('burgerBtn');
    const navMenu = document.getElementsByClassName('main-navigation')[0];

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('activeBurger');
})
}


