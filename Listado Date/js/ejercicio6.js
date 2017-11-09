/**
* Ejercicio 6
* Implementa el método diaDeLaSemana() que devuelva 'lunes, martes... domingo' del día actual o de la fecha indicada (similar al constructor)
* @author Pablo Leon Alcaide
* @version 1.0
*/

{
	let today = new Date();

	/** Devuelve el día de la semana correspondiente, o el del día actual si no se indica fecha */
	let getDiaSemana = function(day, month, year) {
		let nombreDia = Array("DOMINGO", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO", "DOMINGO");
		if (arguments.length != 0) {
			return nombreDia[new Date(year,month-1,day).getDay()];
		} else {
			return nombreDia[today.getDay()];
		}
}
	document.write('Hoy: '+getDiaSemana());
	document.write('<br>día 03-11-2017: '+getDiaSemana(3, 11, 2017));
	document.write('<br>día 04-11-2017: '+getDiaSemana(4, 11, 2017));
}
