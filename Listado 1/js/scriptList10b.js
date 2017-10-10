/**
* Pablo León Alcaide - Listado 1 - Ejercicio 10.2
* DWEC 2º D.A.W. 
* MultiplicaImpares que multiplique los 20 primeros números impares y muestre el resultado en pantalla.
*/

/** Multiply the first 20 odd numbers */
function multiplyOdds(){
	let result = 1;
	let count=0;
	for(let i=1; i<=100; i+=2){
		result = result*i;
		count++;
		if (count==20)
			break;
	}
	return result;
}

alert(multiplyOdds())