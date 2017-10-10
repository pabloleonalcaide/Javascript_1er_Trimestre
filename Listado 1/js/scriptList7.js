/*
*
* Pablo León Alcaide - Listado 1 - Ejercicio 7
* DWEC 2º D.A.W. 
* 1 LISTADO DE EJERCICIOS. JAVASCRIPT BÁSICO.
* Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
* a.Cuántas cifras tiene(7cifras)
* b.Lo muestre del revés
* @author Pablo Leon Alcaide <pabloleonpsico@gmail.com>
* @version 1.0 
*/

/**
* Count how many digits have our number
*/
function countDigit(number){
	let count = number.length;
	if(number.indexOf('.')>=0){ //ignore thousands point
		count--;
	}
	if(number.indexOf(',')>=0){ //ignore decimal point
		count--;
	}
	return count;
}
/**
* Reverse the number
*/
function reverseNumber(number){
	let reverse = number.split('').reverse().join('');
	return reverse;
}

let number= prompt("introduce un número, contaremos sus cifras y luego lo pondremos del revés");

alert("Tiene "+(countDigit(number))+" çifras y del revés se vería así: "+reverseNumber(number));