import { dibujar } from "./script1_3";

export function Interpolado(imgs) {
    // Get imagen expandida
    var expandImg = document.getElementById("imgexpandida");
    // Get texto
    var imgText = document.getElementById("imgtexto");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    // Mostrar
    expandImg.parentElement.style.display = "block";
  } 