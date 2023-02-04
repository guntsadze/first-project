import { mainJS } from "../home/mainJS.js";
import { getUserInfo } from "./profile.js";
import { changePassword } from "./profile.js"
import { auth } from "../auth/mainAuth.js";

window.onload = function (){
    auth();
    mainJS();
    getUserInfo(1);
    changePassword()

}
