/**
 * Pablo Leon Alcaide
 * Examen DWEC 14-12-2017
 */

var dateWindow;
let close = document.getElementById('close');
let generarDocumentoEjercicio1 = () =>{
	let date = new Date();
	let lastDay= new Date(2017,11,22);
	d = date.getDate();
	m = getMonthName(date.getMonth());
	y = date.getFullYear();
	d2 = lastDay.getDate();
	m2 = getMonthName(lastDay.getMonth());
	y2 = lastDay.getFullYear();
	content='<head><title>Pablo Leon - Fecha</title>\
	<script src="./js/fecha.js" type="text/javascript" charset="utf-8" async defer></script></head><body>'
	content+='<h1>Pablo Leon Alcaide</h1>';
	content +='<p>Hoy es '+getDayName(date.getDay())+', '+d+' de '+m+' de '+y;
	content +='<p>El fin de trimestre será '+getDayName(lastDay.getDay())+', '+d2+' de '+m2+' de '+y2;
	content +='<p>Y solo quedan '+getDifference(date,lastDay)+ " días";
	content +='<br><button id=close >Cerrar</button></body>';
	dateWindow = window.open('','ventana','width=400px, height=400px');
	dateWindow.document.write(content);
	
}
let getDifference = (date1,date2)=>{
	days1 = date1.getTime()/(24*60*60*1000);
	days2 = date2.getTime()/(24*60*60*1000);
	return Math.round(days2 - days1);
} 
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
let cerrar = function(){
	window.opener.window.document.getElementById('msg').innerHTML = "ventana Cerrada";
	window.close();
}

close.addEventListener("click", cerrar);
