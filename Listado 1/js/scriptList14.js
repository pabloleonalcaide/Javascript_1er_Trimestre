/**
* Pablo León Alcaide - Listado 1 - Ejercicio 14
* DWEC 2º D.A.W. 
* Implementa CalculaMedia que pida números hasta que se introduzca uno negativo.
* Entonces, que muestre la media
* @author Pablo Leon Alcaide
* @version 1.0
 */
 {
	let sum= 0;
	let count =0;
	let number=0;

	/**
	 * Calculates the average.
	 *
	 * @param      {number}  sum     The sum
	 * @param      {number}  count   The count
	 * @return     {number}  The average.
	 */
	function calculateAverage(sum,count){
		return sum/count;
	}

	/**
	 * Show the average
	 *
	 * @param      {number}  sum     The sum
	 * @param      {number}  count   The count
	 */
	function mostrarMedia(sum,count){
		if(count>0)
			alert("introduciste un número negativo, la media de los anteriores es: "+calculateAverage(sum,count));
		else
			alert("no has introducido números válidos");	
	}

	do{
		number= parseInt(prompt("introduce un número, introduce negativo para salir"));
		if(isNan(number))
			alert("has introducido una palabra");
		else if(number>0){
			sum += number;
			count++;
		}

	}while(number>0);

	mostrarMedia(sum,count);
}