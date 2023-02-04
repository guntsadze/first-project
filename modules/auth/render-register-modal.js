export function renderRegisterModal(){

    
    const registerModal = document.getElementById('REGISTER');
    let registerHTML = '';
    registerHTML +=`
        <div class="container">
            <div class="register-name">Register</div>
                <div class="login-input">
                    <label for="">Username</label>
                    <input id="register-username" type="text" required>
                </div>
                <div class="login-input">
                    <label for="">Password</label>
                    <input id="register-password" type="password" required>
                </div>
                <div class="login-input">
                    <label for="">Confirm password</label>
                    <input id="register-confirm-password" type="password" required>
                </div>
                <span id="register-error">User already exits</span>
                <div>
                    <button id="REGISTER-BTN-BTN" type="submit">Register</button>
                </div>
        </div>
        `
        registerModal.insertAdjacentHTML('beforeend', registerHTML);
}