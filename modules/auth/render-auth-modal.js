export function renderAuthModal(){

    
    const authModal = document.getElementById('LOGIN');
    let authHTML = '';
    authHTML +=`
            <div class="container">
                <div class="login-name">Login</div>
                    <div class="login-input">
                        <label for="">Email or Phone</label>
                        <input id="username" type="text" required>
                    </div>
                    <div class="login-input">
                        <label for="">Password</label>
                        <input id="password" type="password" required>
                    </div>
                    <span id="invalid-password">Invalid password</span>
                    <div class="forgot-pass"><a href="#">Forgot password?</a></div>
                    <div>
                        <button id="LOGIN-BTN-BTN" type="submit">Login</button>
                    </div>
            </div>
        `
        authModal.insertAdjacentHTML('beforeend', authHTML);
}