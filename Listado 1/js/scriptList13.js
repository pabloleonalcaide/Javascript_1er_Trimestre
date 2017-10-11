/** 
* Pablo León Alcaide - Listado 1 - Ejercicio 13
* DWEC 2º D.A.W. 
* Implementa ProductoPotencias que calcule y visualice el producto de las potencias de
* 2 entre 0 y 10.
*/
{
	let result = 1;

	for(let i = 0; i<10;i++){
		result = result * (Math.pow(2,i));
	}
	alert("el sumatorio de potencias de 2 entre 0 y 10 es: "+ result);
}