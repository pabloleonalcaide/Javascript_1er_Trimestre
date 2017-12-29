/**
 *  Script Index - Examen Diciembre
 *  @author Pablo Leon Alcaide
 *  @version 2.0
 */
{
	//button to start exercise 1
	let button1 = document.getElementById("button1");
	//buton to start exercise 2
	let button2 = document.getElementById("button2");
	//span 'message'
	let message = document.getElementById("message");	

	/**
	 * Open a new window with the exercise 1
	 */
	let generarDocumentoEjercicio1 = (function(){
		let contenido = "<html><head><title>Pablo Leon Alcaide</title>"+
		"<script src='./js/fecha.js' type='text/javascript' charset='utf-8' async defer></script></head>"+
			"<body style='text-align:center'><header><h1>Pablo Leon Alcaide</h1></header>"+
			"<p id='paragraph1'></p><p id='paragraph2'></p><p id='paragraph3'></p>"+
			"<button id='close'>Cerrar</button>";
		let dateWindow = window.open('','','width=600px height=400px');
		dateWindow.document.open();
		dateWindow.document.write(contenido);
		dateWindow.document.close();
	});

	/**
	 * Open a new window with the exercise 2
	 */
	let openForm = ()=>{

	}
	/**
	 * Adverts that the window from exercise 1 has been closed
	 */
	let showMessage = ()=>{
		message.style.display = "inline";
	}
	/**
	 * Hides the message.
	 */
	let hideMessage = ()=>{
		message.style.display = "none";
	}

	button1.addEventListener("click",generarDocumentoEjercicio1);
	button2.addEventListener("click",openForm);
}