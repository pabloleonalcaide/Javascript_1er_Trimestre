/**
* Implementa DeNumericoATexto que solicite un número del0 al 99 y lo muestre escrito. Por ejemplo, para 
* 12 mostrar: doce, para 44 mostrar: cuarenta y cuatro. Que sea lo más eficiente posible
* @author Pablo Leon Alcaide <pabloleonpsico@gmail.com>
* @version 1.0 
*/
{
	let ceroANueve=[ "cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve",];
    
    let diezAVeintiNueve=["diez","once","doce","trece","catorce","quince","diceiseis","dicisiete","dieciocho",
    "diecinueve","veinte","veintiuno","veintidos","veintitres","veinticuatro","veinticinco","veintiseis","veintisiete",
    "veintiocho","veintinueve",];
    
	let decenas=["","","","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
	let number;
	/**
	 * Returns the text of a number.
	 * @param      {<type>}  number.
	 * @return     {Array}   { text of the number }
	 */
	function returnText(num){ 	
		if(num<10){
			return ceroANueve[num];
		}else if((num >10) && (num <30)){
			return diezAVeintiNueve[(num-10)]
		}else{
			let cadena =""
			let array = num.split('');
			cadena= decenas[array[0]] +" y "+ceroANueve[array[1]]
			return cadena;
		}
	                             	
	}

	do{
	number = prompt("introduce un numerico");
}while(number<0 && !isNan(number));
	console.log("el numerico introducido es: "+ returnText(number));
}