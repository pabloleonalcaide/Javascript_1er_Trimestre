/**
 * @author Pablo Leon
 * @version 1.0
 * El objeto window dispone de las propiedades scrollX, scrollY y scrollbars. Muéstralos reaccionando al evento scroll sobre window.
 */

{

 let scrolleando = function(x,y){
 	let sb = window.scrollbars.visible;
 	let cadena = 'scrollX: '+x+"\nscrollY: "+y+"\nscrollbars: "+sb;
 	document.getElementById('info').innerHTML=cadena;
	}
 

window.onscroll = function(){
	x = window.scrollX;
	y = window.scrollY;
	scrolleando(x,y);	
}
}