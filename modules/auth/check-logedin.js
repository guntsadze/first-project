export function isAuthorized() {
    let user = localStorage.getItem('logedInUser');
    const authContainer = document.getElementById('AUTH-BTNS');
    if ( user ) {
        user = JSON.parse(user);
        authContainer.innerHTML = '';
        const html = `
            <span id="username-d"><a href="./profile.html">${user.username}</a></span>
            <button id="LOGOUT" class="logout">logout</button>
        `
        authContainer.insertAdjacentHTML('beforeend', html);

        document.getElementById('LOGOUT').addEventListener('click', logout);
        return true
    }else{
        const html = `
            <button id="LOGIN-BTN">LOGIN</button>
            <button id="REGISTER-BTN">REGISTER</button>
        `
        authContainer.insertAdjacentHTML('beforeend', html);
        return false
    }
}

function logout(){
    localStorage.removeItem('logedInUser');
    location.reload();
}