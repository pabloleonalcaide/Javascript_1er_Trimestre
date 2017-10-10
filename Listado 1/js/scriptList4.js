/*
* Pablo León Alcaide - Listado 1 - Ejercicio 4
* DWEC 2º D.A.W. 
* 1 LISTADO DE EJERCICIOS. JAVASCRIPT BÁSICO.
*  4. Implenta NumeroPrimo que pida un número e indique si es primo o no.
* @author Pablo León Alcaide <pabloleonpsico@gmail.com>
* @version 1.0
*/

/*
* check if the number is prime
*/
function isPrime(number){
	for (let i = 2; i < number; i++) {

	    if (number % i === 0) {
    	  return false;
    	}

  	}

  	return number !== 1;
}

/*
* Show the result
*/
function showPrime(bool){
	if(bool)
		alert("Es primo");
	else
		alert("No es primo");
}
//*****************
number = prompt("introduce un número, te diré si es primo");
showPrime(isPrime(number));