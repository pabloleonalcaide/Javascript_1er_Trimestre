/**
 * @author Pablo Leon Alcaide
 * @version 1.0
 */


let spamFive =function (){
	for (let i = 0; i < 5; i++) {
		nombre="ventana"+i;
		var nombre = window.open('','ventana'+i,'width=200px, height=200px, top=0px, left=0px');
		nombre.document.write('<head><title>'+nombre.name+'</title></head>');
		nombre.document.write('<body>');
		nombre.document.write(nombre.name+'<br>');
		nombre.document.write('<input name="button" type="button" onclick="window.close();" value="Cerrar" />'); 
		nombre.document.write('</body>');
		}
	}