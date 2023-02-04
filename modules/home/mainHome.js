import { slider } from "./slider.js";
import { mainCarRender } from "./mainCarRender.js";
import { mainJS } from "./mainJS.js";
import { auth } from "../auth/mainAuth.js";




window.onload = function (){
    auth();
    mainJS();
    slider();
    mainCarRender();
}






