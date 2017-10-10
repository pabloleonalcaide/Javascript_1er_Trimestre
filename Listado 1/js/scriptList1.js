/** Pablo León Alcaide - Listado 1 - Ejercicio 1 
* DWEC 2º D.A.W. 
* 1 LISTADO DE EJERCICIOS. JAVASCRIPT BÁSICO.
* 1. Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número 
* entre el 1 y el 100. Mostrará un mensaje:
* a. Para indicar si has  acertado (en una nueva ventana) 
* b. Para indicar si la solución es mayor o es menor.
* Al finalizar, se le preguntará al usuario si quiere repetir el juego.
* @author Pablo León Alcaide <pabloleonpsico@gmail.com>
* @version 1.0
*/

let aleatorio;
let opcion;

/**
* Determine if the choosen number is the correct one
*/
function isWinner(myNumber, correctNumber){
	if (myNumber == correctNumber)
		return true;
	return false;
}

/**
* Determine if the choosen number is higher
*/
function isHigher(myNumber, correctNumber){
	if (myNumber > correctNumber)
		return true;
	return false;
}
/**
* Determine if user wish continue
*/
function wishContinue(){
	do{
		let answer = prompt("¿Desea Continuar? (si / no)");
		if(answer === "si" || answer === "SI" || answer === "Si")
			return true;
		else if(answer === "no" || answer === "NO" || answer === "No")
			return false;
	}while(true);
}
/*
* Game
*/
function playGame(){
	do{
	aleatorio =  Math.floor((Math.random() * 100) + 1);
	//console.log(aleatorio);  <-- Para que me muestre el valor en consola, trampas para probar el juego
	do{
		opcion = prompt("A ver si adivinas en qué número estoy pensando");

		if(isHigher(opcion,aleatorio))
			alert("el número que estoy pensando es menor!");
		else if(isHigher(aleatorio,opcion))
			alert("el número que estoy pensando es mayor!");

	}while(!isWinner(opcion,aleatorio));
		alert("acertaste!");
		
	}while(wishContinue());
}

playGame();
