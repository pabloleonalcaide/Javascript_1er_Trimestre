/**
 * Pablo León - Ejercicio 7
 * @author Pablo Leon
 * @version 1.0
 * Crea una función que elimine todos los undefined de un array.
 */

let miArraysito = ["uno", 2,undefined,"cuatro",undefined,"seis"];
document.write("elementos:<br>");
for (let i = 0; i< miArraysito.length; i++) {
	document.write(miArraysito[i]+",");
	}
document.write("<br>Elementos del array antes de eliminar los undefined: "+miArraysito.length);
document.write("<br>");
for (let i = 0; i< miArraysito.length; i++) {
	if(miArraysito[i] === undefined){
		miArraysito.splice(i,1);
	}
}
document.write("Elementos del array después de eliminar los undefined: "+miArraysito.length)