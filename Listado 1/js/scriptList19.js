/**
* Pablo León Alcaide - Listado 1 - Ejercicio 19
* DWEC 2º D.A.W. 
* Implementa PorLineasDos que visualice los números del 0 al 100 separados por comas.
* Cada múltiplo de 7 o finalizado en 7 ha de comenzar en una línea nueva.
*/

let secuence ="";

for(i=0;i<=100;i++){
	if(i%7==0 ||  i.toString().substr(i.length - 1) == 7)
		secuence+="\n"+i+",";
	else
		secuence += i+","
}
console.log(secuence);