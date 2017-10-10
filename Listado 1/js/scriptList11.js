/**
* Pablo León Alcaide - Listado 1 - Ejercicio 11
* DWEC 2º D.A.W. 
* Implementa MediaPositivos que calcule la media de una serie de números positivos,
* introducidos por teclado. Dejará de leer cuando el usuario introduzca el 0.
* @author Pablo Leon Alcaide
* @version 1.01
*/
let num,sum=0, cont =0;

/** calculate the average of many numbers */
function calculateAverage(sum,cont){

	return parseInt(sum)/parseInt(cont);
}

do{
	num = parseInt(prompt("introduce un número positivo, pulsa 0 para salir"));
	if(num>0){
		sum =sum += num; 
		cont++;
	}
}while(num!=0);

alert("genial, la media de esos números fue: "+calculateAverage(sum,cont)+" hemos ignorado los valores negativos");