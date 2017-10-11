/*
Pablo León Alcaide - Listado 1 - Ejercicio 5
DWEC 2º D.A.W. 
1 LISTADO DE EJERCICIOS. JAVASCRIPT BÁSICO.
Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos números
primos existen entre el 1 y dicho número.
* @author Pablo León Alcaide <pabloleonpsico@gmail.com>
* @version 1.0
*/

/**
 * Determines if prime.
 * @param      {number}   number  The number
 * @return     {boolean}  True if prime, False otherwise.
 */
function isPrime(number){
	for (let i = 2; i < number; i++) {

	    if (number % i === 0) {
    	  return false;
    	}
  	}
  	return number !== 1;
}

/**
 * Counts the number of prime.
 * @param      {number}  number  The number
 * @return     {number}  Number of prime.
 */
function countPrime(number){
	let countNumbers = 0;
	for(let i=1; i<=number; i++){
		if(isPrime(i))
			countNumbers++;
	}
	return countNumbers;
}
/**
 * Shows the primes.
 *
 * @param      {(number|string)}  number  The number
 */
function showPrimes(number){
	if(number >0)
		alert("hay "+number+ " números primos");
	else
		alert("no hay números primos");
}
// ----
let count = countPrime(prompt("indica un número, te diré cuantos números primos hay hasta él"));

showPrimes(count);