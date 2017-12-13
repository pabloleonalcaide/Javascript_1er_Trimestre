
	let code = document.getElementById("codeButton");
	let sleep = document.getElementById("sleepButton");
	let commit = document.getElementById("commitButton");
	let calculateDays = document.getElementById("showDays");
	let fieldset = document.getElementById("fieldset");

	let spanName = document.getElementById("spanName");
	let spanDays = document.getElementById("spanDays");
	let spanState = document.getElementById("spanState");
	let spanEnergy = document.getElementById("spanEnergy");
	let spanLines = document.getElementById("spanLines");

	let toCode = (event)=>{
		event.preventDefault();
		creature.toCode();
		checkLines();
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
	let showDays = (event)=>{
		event.preventDefault();
		spanDays.innerHTML = "I've been here "+creature.getTimeLife() + "days";
	}

	let checkLife = ()=>{
		if(creature.isDead())
			disableButtons();
	}
	let checkLines = () =>{
		spanLines.innerHTML = "Great! you got "+creature.getLines() + "Lines of code!";
	}
	let disableButtons = ()=>{
		code.disabled = true;
		sleep.disabled = true;
		commit.disabled = true;
	}
	/** update the status */
	let refresh = () =>{
		spanName.innerHTML = "My name is: "+creature.getAlias();
		spanState.innerHTML = "Now I'm.. "+creature.getState();
		spanEnergy.innerHTML = "Vitality? over "+creature.getEnergy();
		setInterval(function(){spanDays.innerHTML = ""},10000);
		checkLife();
	}

	let loadStatus = () =>{
		refresh();
		switch(creature.getColor()){
			case 'black': fieldset.style.background = 'rgba(0,0,0,0.4)';break;
			case 'red': fieldset.style.background = 'rgba(255,0,0,0.4)';break;
			case 'blue': fieldset.style.background = 'rgba(0,0,255,0.4)';break;
			case 'purple': fieldset.style.background = 'rgba(255,0,255,0.4)';break;
			case 'green': fieldset.style.background = 'rgba(0,255,0,0.4)';break;
		}

	}
	window.onload = loadStatus;


	calculateDays.addEventListener("click",showDays);
	code.addEventListener("click",toCode);
	commit.addEventListener("click",toCommit);
	sleep.addEventListener("click",toSleep);