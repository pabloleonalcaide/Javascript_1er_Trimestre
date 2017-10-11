/**
* Pablo León Alcaide - Listado 1 - Ejercicio 12
* DWEC 2º D.A.W. 
* Implementa CerosYUnos que lea una secuencia de ceros y unos. Mostrará el número
* de ceros de la secuencia. Dejará de leer cuando el usuario introduzca el número 2.
* @author Pablo Leon Alcaide
* @version 1.01
*/
{
let cont = 0;
	do{
		num = parseInt(prompt("unos y ceros, pulsa 2 para salir"));
		if(num === 0){		
			cont++;
		}
		if(num!= 0 && num!=1 && num!=2)
			alert("solo unos y ceros, por favor");
	}while(num!=2)

	alert("había "+cont+" ceros");
}