/*
* Pablo León Alcaide - Listado 1 - Ejercicio 15
* DWEC 2º D.A.W. 
* Implementa MuestraDelUnoAlN que pida un número entero y que muestre la
* secuencia del 1 al número indicado. En caso de no poder generarse la secuencia
* (menor que 1), que lo indique.
*/
{
	let number = parseInt(prompt("indica un número entero, te muestraré su secuencia desde 1"));
	let cadena= "";

	if (isNan(number))
		alert("has introducido caracteres no numéricos");
	else if(number < 1)
		alert("en serio, has metido un número menor!");
	else{
		for(let i=1; i<=number;i++){

			cadena+= (i+" ");

		}
		alert(cadena);
	}
}