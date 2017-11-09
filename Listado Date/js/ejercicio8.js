/**
* Ejercicio 8
* Implementa el método calcularEdad() que devuelva la edad indicando la date de nacimiento.  
* En caso de tener menos de un año, indicar días y monthes transcurridos. Indicar errores.
* @author Pablo Leon Alcaide
* @version 1.0
*/

{	
	/** Devuelve la edad a partir de una fecha */
let calcularEdad = function(day, month, year){
	try {
		let date = new Date(year, (month-1), day);
		let today = new Date();
		let currentYear = today.getFullYear(); 

		if ((currentYear-year) < 0) { 
			throw "Año introducido inválido";
		}			
			/* Si es el mismo año */
		if ((currentYear-year) == 0) {
			let currentMonth = today.getMonth(); 
			let currentDay = today.getDay();

			if ((currentMonth - month)<0 || (month - 12)>0) {
				throw "Mes introducido inválido";
			}else{
				if(currentDay>=day){
					return ("Según la fecha, tienes " + (currentMonth - month) + " meses y " + (currentDay - day)+ " días");
				}else{

					month--; //ajuste del mes
					return ("Según la fecha, tienes " + (currentMonth - month) + " meses y " + (day-currentDay)+ " días");
				}
			}
		}else {
			if ((month - 12)>0) {
				throw "Mes introducido inválido";
			}else{
				return "Según la fecha, tienes " + (currentYear -year)+' años';}
			}
				//Caputramos las excepciones:
	} catch (error) {
			return "Lo siento, " + error;
	}
}
	/* Comprobaciones */
document.write(calcularEdad(25, 12, 2015));
document.write('<br>');
document.write(calcularEdad(9, 9, 1988));
document.write('<br>');
document.write(calcularEdad(4, 4, 2017));
document.write('<br>');
document.write(calcularEdad(2, 11, 99999));
document.write('<br>');
document.write(calcularEdad(10, 200, 1990));
}