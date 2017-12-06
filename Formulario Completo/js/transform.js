/**
 * this script allow to change the appearance of the form
 *
 */

 /** Alert of empty field*/
	let paintVacio = function(element){
		setVisibleMsj(element,"el campo no puede ir vacío");

	}
/** Clear the span text */
	let paintNormal = function(element){
		setVisibleMsj(element,"");
	}
/** 
 * Write a message
 * span -> the span where the message will appear
 */
	let setVisibleMsj = function(span,msj){
		span.innerHTML= msj;
	}
