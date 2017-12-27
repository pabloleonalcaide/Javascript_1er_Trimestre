/**
 *  Script Ejercicio 1 - Examen Diciembre
 *  @author Pablo Leon Alcaide
 *  @version 2.0
 */

	//Global variables	
	now = new Date();	
	finalDate = new Date(2017,11,22);
	paragraph1 = document.getElementById("paragraph1");
	paragraph2 = document.getElementById("paragraph2");
	paragraph3 = document.getElementById("paragraph3");
	closeButton = document.getElementById("close");

/**
 * Writes paragraphs
 */
let writeParagraphs = ()=>{
	paragraph1.innerHTML = writeParagraph1();
	paragraph2.innerHTML = writeParagraph2();
	paragraph3.innerHTML = writeParagraph3();
}
/**
 * Writes a paragraph 1.
 */
let writeParagraph1 = ()=>{
	let day = now.getDate();
	let month = now.getMonth();
	let year = now.getFullYear();
	return 'Hoy es '+getDayName(now.getDay())+', '+day+' de '+getMonthName(month)+' de '+year;
}
/**
 * Writes a paragraph 2.
 */
let writeParagraph2 = ()=>{
	let finalDay = finalDate.getDate();
	let finalMonth = finalDate.getMonth();
	let finalYear = finalDate.getFullYear();
	return 'El fin de trimestre será '+getDayName(finalDate.getDay())+', '+finalDay+' de '+getMonthName(finalMonth)+' de '+finalYear;
}
/**
 * Writes a paragraph 3.
 */
let writeParagraph3 = ()=>{
	return 'Y sólo quedan '+getDifference(now,finalDate)+' días';
}
/**
 * Gets the difference between two dates
 */
let getDifference = (date1,date2)=>{
	days1 = date1.getTime()/(24*60*60*1000);
	days2 = date2.getTime()/(24*60*60*1000);
	return Math.trunc(days2 - days1);
} 
/**
 * Gets the day name.
 */
let getDayName =(num) =>{
	switch(num){
		case 1: return 'Lunes';break;
		case 2: return 'Martes';break;
		case 3: return 'Miercoles';break;
		case 4: return 'Jueves';break;
		case 5: return 'Viernes';break;
		case 6: return 'Sábado';break;
		case 7: return 'Domingo';break;
	}
}
/**
 * Gets the month name.
 */
let getMonthName = function(num){
	switch(num){
		case 0: return 'Enero';break;
		case 1: return 'Febrero';break;
		case 2: return 'Marzo';break;
		case 3: return 'Abril';break;
		case 4: return 'Mayo';break;
		case 5: return 'Junio';break;
		case 6: return 'Julio';break;
		case 7: return 'Agosto';break;
		case 8: return 'Septiembre';break;
		case 9: return 'Octubre';break;
		case 10: return 'Noviembre';break;
		case 11: return 'Diciembre';break;
	}
}
/**
 * Closes a window.
 */
let closeWindow = () =>{
	window.opener.window.document.getElementById("message").style.display= "block";
	window.close();
}
window.onload = writeParagraphs();
closeButton.addEventListener("click",closeWindow);