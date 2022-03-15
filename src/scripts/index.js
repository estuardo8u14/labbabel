import { myFunction } from "./script1/script1_2";
import { draw } from "./script1/script1_3";
import '../styles/styles.css';
import "core-js/stable";

document.getElementById("pie01").innerHTML =
new Date().getFullYear() + " Creado por Estuardo Ureta 17010</p>";
document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='./index.html'>Home</a></li>" +
"<li><a href='../src/pages/pagina1.html'>Pagina 1</a></li>" +
"<li><a href='../src/pages/pagina2.html'>Pagina 2</a></li>" +
"</ul>"; 
//polyfill
const saludo = "   hola".trimStart();
console.log(saludo);

myFunction(img);

setInterval(draw,0.001);