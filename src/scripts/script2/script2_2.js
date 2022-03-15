import { checkDead } from "./script2_3";

var jugador = document.getElementById("jugador");
var block = document.getElementById("block");
var counter=0;
export function jump(){
    if(jugador.classList == "animate"){return}
    jugador.classList.add("animate");
    setTimeout(function(){
        jugador.classList.remove("animate");
    },300);
}