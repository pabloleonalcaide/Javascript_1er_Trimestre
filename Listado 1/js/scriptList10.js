/**
* Implementa DeNumericoATexto que solicite un número del0 al 99 y lo muestre escrito. Por ejemplo, para 
* 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Que sea lo más eficiente posible
* @author Pablo Leon Alcaide <pabloleonpsico@gmail.com>
* @version 1.0 
*/

/** Return a String with the name of a number*/
function returnText(number){

	let arrayText =[ "cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce",
	"quince","diceiseis","dicisiete","dieciocho","diecinueve","veinte","veintiuno","veintidos","veintitres","veinticuatro",
	"veinticinco","veintiseis","veintisiete","veintiocho","veintinueve","treinta","treinta y uno","treinta y dos","treinta y tres",
	"treinta y cuatro","treinta y cinco","treinta y seis","treinta y siete","treinta y ocho","treinta y nueve","cuarenta"
	,"cuarenta y uno","cuarenta y dos","cuarenta y tres","cuarenta y cuatro","cuarenta y cinco","cuarenta y seis","cuarenta y siete",
	"cuarenta y ocho","cuarenta y nueve", "cincuenta" ,"cincuenta y uno","cincuenta y dos","cincuenta y tres","cincuenta y cuatro","cincuenta y cinco",
	"cincuenta y seis","cincuenta y siete", "cincuenta y ocho","cincuenta y nueve", "sesenta" ,"sesenta y uno","sesenta y dos","sesenta y tres",
	"sesenta y cuatro","sesenta y cinco","sesenta y seis","sesenta y siete","sesenta y ocho","sesenta y nueve","setenta" ,"setenta y uno","setenta y dos",
	"setenta y tres","setenta y cuatro","setenta y cinco","setenta y seis","setenta y siete","setenta y ocho","setenta y nueve", "ochenta" ,
	"ochenta y uno","ochenta y dos","ochenta y tres","ochenta y cuatro","ochenta y cinco","ochenta y seis","ochenta y siete","ochenta y ocho",
	"ochenta y nueve","noventa" ,"noventa y uno","noventa y dos","noventa y tres","noventa y cuatro","noventa y cinco","noventa y seis",
	"noventa y siete","noventa y ocho","noventa y nueve"];

	return arrayText[number];
}

let number = prompt("introduce un numerico");

alert("el numerico introducido es: "+ returnText(number));