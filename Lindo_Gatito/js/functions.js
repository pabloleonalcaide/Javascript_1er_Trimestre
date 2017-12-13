 /**
  * Exercise: Lindo Gatito
  * Functions
  * @author Pablo Leon
  */

/**
 * Invoque a cat on a new window
 */
let invoque=()=>{
 	let catWindow = window.open('','','width=600,height=450');
 	try{
 		catWindow.location.href = './catMenu.html';
 		loadSetting(catWindow);
 	}catch(e){
 		catWindow.close();
 		alert(e.message);
 	}
 }


/**
 * Load the cat values on the window
 */
let loadSetting = (window1)=>{  
	let name = document.getElementById("name").value;
 	let race = document.getElementById("race").value;
 	let year = document.getElementById("year").value;
 	let weight = document.getElementById("weight").value;
	let cat = new Kitty(name,year,race,weight);
	window1.newCat = cat;
}

document.getElementById("submit").addEventListener("click", invoque);

