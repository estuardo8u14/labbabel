import { script2_1 } from "../script2/script2_1";

var context;
var dx= 1.7;
var dy=4;
var y=0;
var x=0;

export function dibujar(){
	context= Canvas.getContext('2d');
	context.beginPath();
	context.fillStyle="#e600ff";
	context.arc(x,y,20,0,Math.PI*2,true);
	context.closePath();
	context.fill();
	if( x<0 || x>1900)
	dx=-dx;
	if( y<0 || y>300)
    context.fillStyle="#15ff00"
		dy=-dy;
		x+=dx;
		y+=dy;
}
setInterval(dibujar,0.001);
