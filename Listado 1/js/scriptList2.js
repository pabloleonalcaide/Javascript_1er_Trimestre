/**
* Pablo León Alcaide - Listado 1 - Ejercicio 2 
* DWEC 2º D.A.W. 
* 1 LISTADO DE EJERCICIOS. JAVASCRIPT BÁSICO.
* Implementa DeSieteEnSiete que escriba los números del 100 al 0 de 7 en siete 
* @author Pablo León Alcaide <pabloleonpsico@gmail.com>
* @version 1.0
*
*/
{
	let cadena = "números: ";
	//el decremento o incremento en js se indica con -=  ó   +=
	for (let i =100; i >= 0; i-=7) {
		cadena+=(" "+i);
	}
	alert(cadena);
}