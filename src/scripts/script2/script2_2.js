

var jugador = document.getElementById("jugador");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(jugador.classList == "animate"){return}
    jugador.classList.add("animate");
    setTimeout(function(){
        jugador.classList.remove("animate");
    },300);
}