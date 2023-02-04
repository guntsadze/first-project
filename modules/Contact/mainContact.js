import { mainJS } from "../home/mainJS.js"
import { auth } from "../auth/mainAuth.js";




window.onload = function (){
    auth();
    mainJS();
    
}


