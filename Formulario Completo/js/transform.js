/**
 * this script allow to change the appearance of the form
 *
 */

	let paintVacio = function(element){
		setVisibleMsj(element,"el campo no puede ir vacío");

	}
	let paintNormal = function(element){
		setVisibleMsj(element,"");
	}

	let setVisibleMsj = function(span,msj){
		span.style.color ="#ff0000";
		span.innerHTML= msj;
	}
