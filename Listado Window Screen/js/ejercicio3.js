/**
* @author Pablo Leon Alcaide
 * @version 1.0
* Crea una página web con el siguiente comportamiento:
*
*    Un botón "bajar línea" para bajar una línea.
*    Un botón "subir línea" para subir una línea
*    Un botón "bajar" para bajar una página.
*    Un botón "subir" para subir una página.
*    Un botón "inicio" para ir al inicio del documento
*    Un botón "fin" para ir al final del documento.
*    Puedes utilizar los siguientes métodos de windows: scroll(), scrollBy(), scrollByLines(), scrollTo()
*/
	var alto = window.innerHeight;

	let bajarLinea = function(){
		window.scrollByLines(1);
	}

	let subirLinea = function(){
		window.scrollByLines(-1);
	}

	let bajarPagina = function(){
		window.scrollBy(0,alto);
	}

	let subirPagina = function(){
		window.scrollBy(0,-alto);
	}

	let moverInicio = function(){
		window.scrollTo(0,0);
	}

	let moverFinal = function(){
		window.scrollTo(0,document.body.scrollHeight);
	}
