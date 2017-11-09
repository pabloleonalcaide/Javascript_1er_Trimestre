/**
* Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:  
* Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()
*
* @author Pablo Leon Alcaide
* @version 1.0
*/

{
	let letter = new Array('r', 'g', 'b');
	let number = new Array(11, 20, 30, 40);
	let listNumber = new Array(22, 3, 35, 80);

/** Imprime un elemento */
	let printElement = function(element, index, array){
		document.write('Elemento: [' + index + '] = ' + element);
		document.write('<br>');
	}
/** Devuelve la comprobación */	
	let mayorDeDiez = function(element, index, array){
		return element>10;
	}

	/* 
	* Array.prototype.forEach() => Ejecuta la función callback indicada una vez por cada elemento del array 
	* El Callback es invocado con 3 elementos: el valor del elemento, el índice del elemento, el array que 
	* está siendo recorrido.
	*/

	letter.forEach(printElement);

	/*
	* Array.prototype.every() Ejecuta la función callback indicada una vez por cada elemento del array
	*  devolviendo true si todos los elementos cumplen la condición de esa función (si todos dan true).
	*/

	document.write(number+' ¿son mayores de 10? '+number.every(mayorDeDiez));
	document.write('<br>');
	document.write(listNumber+'¿son mayores de 10? '+listNumber.every(mayorDeDiez));
	document.write('<br>');
	/*
	* Array.prototype.some() Ejecuta la función callback indicada una vez por cada elemento del array 
	* en orden ascendente, devolviendo true si algún element cumple la condición de esa función
	* (si uno da true). Devuelve true en cuanto encuentra uno.
	*/

	document.write(number+' ¿son mayores de 10? '+number.some(mayorDeDiez));
	document.write('<br>');
	document.write(listNumber+' ¿son mayores de 10? '+listNumber.some(mayorDeDiez));
	document.write('<br>');

	/*
	* Array.prototype.filter() Crea un nuevo array con todos los elementos que cumplan la condición 
	* de la función dada.
	*/

	document.write(listNumber.filter(mayorDeDiez));

}