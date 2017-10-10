/**
* Implementa ComprobacionFecha que solicite el día, el mes y el año
* e indique si la fecha es correcta.Si lo fuera, ha de mostrar el día después
* @author Pablo Leon Alcaide <pabloleonpsico@gmail.com>
* @version 1.0 
*/

let day = prompt("introduce el día");
let month = prompt("introduce el mes (1-12)")-1;
let year = prompt("introduce el año");

/** Check if the day is correct */
function checkDay(day){
	day = parseInt(day);
	if(day<1 || day>31)
		return false;
	return true;
}

/** Check if the month is correct */
function checkMonth(day,month){
	day = parseInt(day);
	month = parseInt(month);
	//31 --> enero, marzo, mayo, julio, agosto, octubre, diciembre
	if(month < 0 || month >11)
		return false;
	else if(month == 1 && day > 28)
		return false;
	else if (day >30 && (month ==3 || month ==5 || month == 8 || month == 10))
		return false;
	return true;
}

/** Check if the year is correct*/
function checkYear(year){
	year = parseInt(year);
	if(year<1 || year>2017)
		return false;
	return true;
}
// -----
if(checkDay(day) && checkMonth(day,month) && checkYear(year)){
	
	let myDate = new Date(year,month,day);
	//increase one day
	myDate.setDate(myDate.getDate()+1);

	alert("la fecha es correcta, el dia siguiente es: "+myDate.getDate()+"/"+parseInt(myDate.getMonth()+1) +"/"+myDate.getFullYear());

}else{
	alert("introduciste valores erroneos");
}
	
