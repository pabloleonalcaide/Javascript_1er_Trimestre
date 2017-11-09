/**
 * Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
 * @author Pablo Leon
 * @version 1.0
 */
 
 /**
  * Muestra información de nuestro sitio web
  */
 let showInfo = function(){
 		let box = document.getElementById("container");	
 		box.innerHTML=("URL: " + window.location.href);						//url
 		box.innerHTML+=("<br>Servidor: " + window.location.hostname);		//Dominio
        box.innerHTML+=("<br>Protocolo: " + window.location.protocol);		//Protocolo
        box.innerHTML+=("<br>Ruta: " + window.location.pathname);			//Pathname 
        box.innerHTML+=("<br>Puerto: " + window.location.port);				//Puerto
        box.innerHTML+=("<br>Origen: " + window.location.origin);			//Servidor/Protocolo/Puerto
 }

showInfo();