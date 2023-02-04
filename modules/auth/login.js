import { closeBackdrop, hideModal, showModal } from "./register.js";

const loginModal = document.getElementById('LOGIN');
const closeBtn = document.getElementById('CLOSE-BTN');
const URL = 'http://localhost:3000/users';

export function login(){
    const loginBtn = document.getElementById('LOGIN-BTN');
    loginBtn.addEventListener('click', listener);
    document.getElementById('username').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            loginUser(username.value , password.value);
            
        }
    });

    document.getElementById('password').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            loginUser(username.value, password.value);
        }
    });
}


function listener(){
    showModal(loginModal);
    hideModal(loginModal, closeBtn);
    closeBackdrop(loginModal);

    const loginBtnBtn = document.getElementById('LOGIN-BTN-BTN');
    loginBtnBtn.addEventListener('click', () =>{

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;


        loginUser(username , password);
        
        
    })

    

}


export function loginUser(username , password) {
    fetch(URL).then(res =>{
        return res.json()
    }).then(users =>{
        const user = users.filter(user => user.username == username && user.password == password);
        if ( user.length > 0 ) {
            localStorage.setItem('logedInUser', JSON.stringify(user[0]));
            location.reload();
        } else {
            document.getElementById('invalid-password').style.display = 'block';
        }
    })
}