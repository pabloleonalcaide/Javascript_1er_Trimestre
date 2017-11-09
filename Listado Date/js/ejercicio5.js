/**
 * Crea el método incrementaDias() que incremente/decremente los días indicados. Admitirá como primer argumento un entero 
 * positivo/negativo que reperesente el número de días. El resto de argumentos representarán una fecha, similar a
 * los argumentos del constructor Date()
 * @author Pablo Leon
 * @version 1.0
 */
let incrementaDias = function(numDias, fecha){
	document.write("<hr>fecha origen:"+fecha+"\ndias: "+numDias)
	fecha.setDate(fecha.getDate()+parseInt(numDias));
	document.write("<br>La nueva fecha es: "+fecha);
}

let date = new Date(2017,9,10);
let date2 = new Date();
let date3 = new Date(2000,9,10);

incrementaDias(3,date);

incrementaDias(-2,date);

incrementaDias(2,date2);

incrementaDias(-3,date3);