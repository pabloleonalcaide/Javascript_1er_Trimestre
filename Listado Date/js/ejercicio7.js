/**
 * @author Pablo Leon
 * @version 1.0
 * Implementa el método esBisiesto() que devuelva si una fecha/año es bisiesto o no. 
 * En caso de que el argumento no sea una fecha, que salte una excepción. 
 * Admitirá tantos parámetros como el constructor Date(). Pruébalo con varias invocaciones fallidas (y capturadas) 
 */

let esBisiesto = function(anio, mes, dia, hora, min, seg, miliseg) {
try {
	if (isNaN(anio) || anio < 1) {
		throw "El año no es válido";
	}
	if (isNaN(mes) || mes < 0) {
		throw "El mes no es válido";
	}
	if (isNaN(dia) || dia < 1) {
		throw "El dáa no es válido";
	}
	//Si no hay error
	let fecha = new Date(anio, (mes-1), dia, hora, min, seg, miliseg);
	let annio= fecha.getFullYear();
	if ((annio % 4 == 0) && (annio % 100 != 0) || (annio % 400 == 0)){
		return "El año bisiesto";
	}else{
		return "El año no es bisiesto";
	}
	//Si saltó una excepción
}catch (error) {
	return error;
}
}
document.write(esBisiesto(2017,11,3,12,30,14,0))