/**
 * Implementa el método calcularHastaFinDeAnno() que devuelva los días que quedan hasta fin de año
 * @author Pablo Leon 
 * @version 1.0
 */

let calcularHastaFinDeAnno = function(anno, mes, dia) {
	
		let fechaUsuario = new Date(anno, (mes-1), dia);
		let fecha = new Date(anno, 11, 31);
		let dias = (fecha.getTime() - fechaUsuario.getTime()) / (1000 * 60 * 60 * 24);
		dias = Math.round(dias);
		document.write("Quedan " + dias + " días hasta fin de año, ¿has comprado polvorones?<br>");
	}
calcularHastaFinDeAnno(2017, 11, 3);
calcularHastaFinDeAnno(2017, 10, 5);
