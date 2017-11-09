/**
* Ejercicio 4
* Implementa el método esFecha() que devuelva si el argumento es una fecha o no.
* @author Pablo Leon
* @version 1.0
*/

/*
* Comprueba si es una fecha el argumento que le introducimos
*/
let esFecha = function(fecha){	
	return fecha instanceof Date;
}

/* Comprobaciones */

document.write("es una fecha?: "+esFecha("2017-03-3"));
document.write('<br>');
document.write("es una fecha?: "+esFecha(new Date("Septembre 11, 2000 13:04:00"))+' ');
