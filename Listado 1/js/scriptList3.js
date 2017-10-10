/*
* Pablo León Alcaide - Listado 1 - Ejercicio 3
* DWEC 2º D.A.W. 
* 1 LISTADO DE EJERCICIOS. JAVASCRIPT BÁSICO.
* Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de 5.
* @author Pablo León Alcaide <pabloleonpsico@gmail.com>
* @version 1.0
*/

let count = 0;

/*
* Check if the number is multiple of five
*/
function isMultipleOfFive(number){
	return (number % 5 == 0);
}

for(let i = 0; i<7; i++){
	let number = prompt("introduce un número, te diré si es múltiplo de 5");
	if(isMultipleOfFive(number))
		count++;
}
if(count >0)
	alert("había "+count+" múltiplos de 5");
else
	alert("no había múltiplos de 5");