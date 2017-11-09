/*
* @author Pablo Leon
* @version 1.0
* Muestra en  una lista la siguiente información. Cada uno de las etiquetas <ol> 
* y <li> han de crearse mediante los métodos de document. Explica en cada uno la 
* diferencia con respecto a los demás.
* 
*     window.outerHeight
*     window.innerHeight
*     window.screen.availHeight
*     window.screen.height
*     window.document.clientHeight
*/

/** Muestra información sobre alto y ancho */
showInfo = function(){
	window.document.open();
	window.document.write('<ol>');
	window.document.write('<li>OuterHeight: '+window.outerHeight+' muestra el alto de la ventana incluida barra de navegación</li>');
	window.document.write('<li>InnerHeight: '+window.innerHeight+' muestra el alto de la ventana sin incluir barra de navegación</li>');
	window.document.write('<li>AvailHeight: '+window.screen.availHeight+' muestra el alto total disponible de la pantalla </li>');
	window.document.write('<li>Height: '+window.screen.height+' muestra el alto del document (deprecated)</li>');
	window.document.write('<li>ClientHeight: '+window.document.body.clientHeight+' muestra el alto del document, se utiliza a partir de  Gecko 6.0</li>');
	window.document.write('</ol>');
	window.document.close();
}
