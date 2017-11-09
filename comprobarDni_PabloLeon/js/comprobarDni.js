/**
 * Comprobación de DNI
 * @author Pablo Leon Alcaide
 * @version 1.0
 */

{
let input = document.getElementById('dni');
let span = document.getElementById('msj');
/** 
 * Valida la letra del dni en función del número
 * @param cadena (String)
 * @return true / false
 */
let validaLetra = function(num,letra){
	 numero = num % 23;
     letras='TRWAGMYFPDXBNJZSQVHLCKET';
     letr=letras.substring(numero,numero+1);
	 return letra.toUpperCase() == letr;
}
/**
 * Limpia la cadena del dni de espacios en blanco y guiones
 * @param      {string}  dni introducido
 * @return     {string}  dni despejado
 */
let limpiarCadena = function(dni){
	let dni2 = dni.trim();
	dni2 = dni2.replace(/ +/g, "");
	dni2 = dni2.replace (/-/g ,"");
	return dni2;
}
/**
 * Comprueba si el dni introducido es válido
 *
 */
var comprobarDNI = function(dni){
	if(dni.length == 0){  //comprobamos que no hay una cadena vacía
		span.className= "error";
		span.innerHTML ="la cadena está vacía";
	}else{
		let miDni = limpiarCadena(dni);  //limpiamos la cadena
		let regExpDni = /^\d{8}[a-zA-Z]$/;
		if(regExpDni.test(miDni)){  //comprobamos que se corresponde con el formato de DNI
			number = miDni.substring(0,miDni.length -1);
			letra = miDni.substring(miDni.length -1);
			if(validaLetra(number,letra)==true){		//comprobamos que la letra se corresponde con el número
				span.className= "valido";
				span.innerHTML = "dni correcto";
				
			}else{
				span.className= "error";
				span.innerHTML = "la letra no es correcta";
				
			}

		}else{
			span.className= "error";
			span.innerHTML="No se corresponde con el formato de DNI";
		}
	}
}
}
