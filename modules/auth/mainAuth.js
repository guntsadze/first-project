import { isAuthorized } from "./check-logedin.js";
import { login } from "./login.js";
import { register } from "./register.js"
import { renderAuthModal } from "./render-auth-modal.js";
import { renderRegisterModal } from "./render-register-modal.js";

window.onload = function(){
    auth();
}



export function auth() {
    if ( !isAuthorized() ){
        renderRegisterModal();
        renderAuthModal();
        register();
        login();
    }
}