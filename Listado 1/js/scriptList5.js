/*
Pablo León Alcaide - Listado 1 - Ejercicio 5
DWEC 2º D.A.W. 
1 LISTADO DE EJERCICIOS. JAVASCRIPT BÁSICO.
Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos números
primos existen entre el 1 y dicho número.
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
* Count how many numbers are prime
*/
function countPrime(number){
	let countNumbers = 0;
	for(let i=1; i<=number; i++){
		if(isPrime(i))
			countNumbers++;
	}
	return countNumbers;
}

function showPrimes(number){
	if(number >0)
		alert("hay "+number+ " números primos");
	else
		alert("no hay números primos");
}
// ----
let count = countPrime(prompt("indica un número, te diré cuantos números primos hay hasta él"));

showPrimes(count);