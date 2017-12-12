/**
 * @author Pablo Leon Alcaide
 * @version 1.0
 */

{
	let errorMsg = document.getElementById("errorMsg");
	let submit = document.getElementById("submit");
	
	/** Create a new Creature with the inputs received */
	let generateCreature = (event) =>{  
		event.preventDefault();
	  try {
	  	let name = document.getElementById("name"); 
		let date = document.getElementById("date");
		let color = document.getElementById("color");
		let creature = new Creature(name.value,date.value,color.value);
		var win = window.open('./sandbox.html','','width=500px, height= 450px');
		win.creature = creature;
		errorMsg.innerHTML = "";
	  } catch (e) {
			 errorMsg.innerHTML = e.message;
			 
			 win.close();
	  }
	}

	submit.addEventListener("click",generateCreature);
}