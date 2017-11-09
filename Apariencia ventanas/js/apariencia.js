/**
 * @author Pablo Leon Alcaide
 * @version 1.0
 */


/**
 * Función que abre una ventana nueva con dimensiones y contenido predefinido
 */

let abreVentana = function (){
	var ventana = window.open('','ventana','width=200px, height=200px, top=0px, left=0px');
	ventana.document.write('<head><title>Apariencia ventana</title></head>');
        ventana.document.write('<body>');
        ventana.document.write('<p>Se han utilizado las siguientes propiedades </p>');
        ventana.document.write('<ul>');
        ventana.document.write('<li>height='+ventana.innerHeight+'</li>');
        ventana.document.write('<li>width='+ventana.innerWidth+'</li>');
        ventana.document.write('</ul>');
        ventana.document.write('</body>');
}