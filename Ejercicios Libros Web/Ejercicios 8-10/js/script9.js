/*
* Pablo León Alcaide - Script Ejercicio 9
*/
//check if the String is written in lowercase, uppercase or both
function checkCase(myString){
	var msj ="";
	if(myString.toLowerCase() == myString){
		msj = "la cadena está en minúscula";
	}else if (myString.toUpperCase() == myString){
		msj = "la cadena está en mayúscula";
	}else{
		msj = "la cadena tiene mayúsculas y minúsculas"
	}
	return msj;
}
var stringChecked = prompt("introduce una cadena, te si está en mayúscula o minúscula");
alert(checkCase(stringChecked));