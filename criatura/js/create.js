/**
 * @author Pablo Leon Alcaide
 * @version 1.0
 */

{
	let errorMsg = document.getElementById("errorMsg");
	let submit = document.getElementById("submit");
	let clock = document.getElementById("clock");
	let name;
	let date;
	let color;
	/** Create a new Creature with the inputs received */
	let generateCreature = (event) =>{  
		event.preventDefault();
	  try {
	  	name = document.getElementById("name"); 
		date = document.getElementById("date");
		color = document.getElementById("color");
		let creature = new Creature(name.value,date.value,color.value);
		let confirm = window.confirm('Are you sure?');
		if(confirm){
			var win = window.open('./sandbox.html','','width=500px, height= 450px');
			win.creature = creature;
			errorMsg.innerHTML = "";
		}else{
			name.value="";
			date.value="";
		}
	  	}catch (e) {
			 errorMsg.innerHTML = e.message;
			 win.close();
	  }
	}
	let setTime = () =>{
		let date = new Date();
		let h = date.getHours();
		let m = date.getMinutes();
		m = m.toString().length ==1 ? "0"+m : m;
		s = date.getSeconds();
		s = s.toString().length ==1 ? "0"+s : s;
		
		clock.style.color ="#fff";
		clock.innerHTML = ""+h+":"+m+":"+s
	}

	submit.addEventListener("click",generateCreature);

	window.onload = setInterval(setTime,1000);
}