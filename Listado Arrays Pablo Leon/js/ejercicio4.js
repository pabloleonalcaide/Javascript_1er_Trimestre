/**
* Crea una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0.
* @author Pablo León Alcaide
* @version1.0
*/

{
	/**
	* Crea un array de naturales con la dimensión indicada.
	*/
	let createArray = function (dimension){

		let number = new Array();

		for (let i = 0; i < dimension; i++) {
			number.push(i);		   
		}

		return number;
	}



	for (let num in createArray(10)){
		document.write(num);
	}
}
