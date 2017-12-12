
	let code = document.getElementById("codeButton");
	let sleep = document.getElementById("sleepButton");
	let commit = document.getElementById("commitButton");

	let spanName = document.getElementById("spanName");
	let spanDays = document.getElementById("spanDays");
	let spanState = document.getElementById("spanState");
	let spanEnergy = document.getElementById("spanEnergy");

	let toCode = (event)=>{
		event.preventDefault();
		creature.toCode();
		refresh();
	}
	let toCommit = (event)=>{
		event.preventDefault();
		creature.toCommit();
		refresh();
	}
	let toSleep = (event)=>{
		event.preventDefault();
		creature.toSleep();
		refresh();
	}

	/** update the status */
	let refresh = () =>{
		spanName.innerHTML = "My name is: "+creature.getAlias();
		spanDays.innerHTML = "I've been here "+creature.getDate();;
		spanState.innerHTML = "Now I'm.. "+creature.getState();
		spanEnergy.innerHTML = "Vitality? over "+creature.getEnergy();
	}

	window.onload = refresh;



	code.addEventListener("click",toCode);
	commit.addEventListener("click",toCommit);
	sleep.addEventListener("click",toSleep);