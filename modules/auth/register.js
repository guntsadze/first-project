import { loginUser } from "./login.js";

const registerModal = document.getElementById('REGISTER');
const backdrop = document.getElementById('BACKDROP');
const closeBtn = document.getElementById('CLOSE-BTN-REG');


export function register(){
    const registerBtn = document.getElementById('REGISTER-BTN');
    registerBtn.addEventListener('click', listener);
}


function listener(){
    showModal(registerModal);
        hideModal(registerModal, closeBtn);
        closeBackdrop(registerModal);
        const registerBtnBtn = document.getElementById('REGISTER-BTN-BTN');
        registerBtnBtn.addEventListener('click', registerCallbackFunction )
}

function registerCallbackFunction() {
    const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;

            if(!username.trim() || !password.trim() || !confirmPassword.trim()) {
                return
            }

            if (password === confirmPassword){
                const data = {username :  username, password :  password};
                fetch('http://localhost:3000/users').then(res =>{
                return  res.json()
                }).then(users =>{
                    if (users.filter(user => user.username == username).length == 0){
                        registerUser(data);
                    }else{
                        document.getElementById('register-error').style.display = 'block'
                    }
                })
            }
        }


function registerUser(data){
    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(() =>{
        loginUser(data.username, data.password);
    })
}



export function showModal(modal){
    modal.classList.toggle('showModal');
    backdrop.classList.toggle('showBackdrop');
}


export function hideModal(modal, closeBtns){
    closeBtns.addEventListener('click', () =>{
        backdrop.classList.remove('showBackdrop');
        modal.classList.remove('showModal');
    })
}


export function closeBackdrop(modal){
    backdrop.addEventListener('click', () =>{
        modal.classList.remove('showModal');
        backdrop.classList.remove('showBackdrop');
    })
}