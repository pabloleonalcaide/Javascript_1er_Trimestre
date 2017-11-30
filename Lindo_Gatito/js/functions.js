 /**
  * Funciones para el ejercicio Lindo Gatito
  * @author Pablo Leon
  */

/**
 * Invoca un gato y lo carga en una nueva ventana
 */
 let invoque = function(){
 	let catWindow = window.open('','','width=600,height=450');
 	catWindow.location.href = './catMenu.html';
 	loadSetting(catWindow);
 }

/**
 * Invoca una horda de gatos
 */
let invoqueHorde = function(){
	for (let i = 10; i >= 0; i--) {
		invoque();
	}
}

/**
 * Carga las variables del gato en la nueva ventana
 */
let loadSetting = function (window1){
 		let name = document.getElementById("name").value;
	 	let race = document.getElementById("race").value;
	 	let year = document.getElementById("year").value;
	 	let weight = document.getElementById("weight").value;
 		let cat = new Kitty(name,year,race,weight);
		window1.newCat = cat;

 	}

document.getElementById("submit").addEventListener("click", invoque);

/* Descomentar para habilitar función especial 'llamar a horda de gatos' */
//document.getElementById("horda").addEventListener("click", invoqueHorde);