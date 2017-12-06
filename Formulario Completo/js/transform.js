/**
 * this script allow to change the appearance of the form
 *
 * @author Pablo Leon Alcaide
 */

/** 
 * Write a message
 * span -> the tag where the message will appear
 */
	let setVisibleMsj = function(span,msj){
		span.innerHTML= msj;
	}
	//Transform the message to UpperCase
	let setVisibleMsjUpper = function(span,msj){
		span.innerHTML =msj.toUpperCase();
	}
	//Paint in red the message
	let setVisibleMsjRed = function(span,msj){
		span.style.color = "#ff0000";
		span.innerHTML = msj;
	}
