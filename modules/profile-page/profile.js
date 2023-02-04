export function getUserInfo(u) {
    let URL = `http://localhost:3000/users/${u}`;
    fetch(URL).then(user =>{
        return user.json();
    }).then(info =>{
        // if( info.id = user.id)
        // console.log(info.id)
        renderInfo(info);
        // console.log(user)
    })
}



function renderInfo(userInfo){
    const username = userInfo.username ;
    document.getElementById('profile-username').innerHTML += username;
}


export function changePassword() {
    let URL = `http://localhost:3000/users/1`;
    fetch(URL).then(user =>{
        return user.json()
    }).then(object =>{
        renderPass(object)
        const changePass =document.getElementById('changePass')
        const changeBtn =document.getElementById('changeBtn')
        changeBtn.addEventListener('click', () =>{
            console.log(changePass.value)
            let password = object.password ;
            // console.log(password)
            password = changePass.value
            
            // let ragaca = localStorage.setItem(password)
            // console.log(password)
        })
    })

    
}


function renderPass(object){
    const password = object.password ;
    document.getElementById('profile-username').innerHTML += password;
}


