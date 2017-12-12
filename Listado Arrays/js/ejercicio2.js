/**
* Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.
* @author Pablo León Alcaide
* @version 1.0
*/

{

	/*
	* El operador in retorna True si la propiedad especificada está en el objeto indicado o en su prototipo
	*/

	let colores = new Array('rojo', 'verde', 'aguamarina', 'negro', 'cian');

	document.write("Es una propiedad 0? "+(0 in colores));
	document.write("<br>Es una propiedad 'rojo'? "+('rojo' in colores)); 
	document.write("<br>Es una propiedad length? "+("length" in colores));
}
