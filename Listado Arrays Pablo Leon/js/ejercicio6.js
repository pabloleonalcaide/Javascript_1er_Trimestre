/**
* Crea una función que devuelva un array con cada uno de los argumentos. En caso de que 
* alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.
* @author Pablo León Alcaide
* @version 1.0
*/

{
	let miArray = new Array('Gandalf', 'Radagast', 'Saruman', 'Pallando', 'Alatar');

	/*
	* Crea un array a partir de los argumentos
	*/
	let createArray = function(){  //Se puede hacer con recursividad, porque podría haber un array dentro de un array dentro de otro array...

		let miArray = new Array();

		for(let i=0; i < arguments.length; i++){
/
			if(Array.isArray(arguments[i])){
				arguments[i].forEach(function(element){
					miArray.push(element);
				});
			}
			else{	
				miArray.push(arguments[i]);
			}
		}

		return miArray;
	}

	createArray(9, 'Sauron', miArray).forEach(function (element){
		document.write(element+"<br>");
	})
}

