/**
 * En este script cargamos el estado del gato en la ventana
 * @author Pablo Leon
 */

//extraemos la llamada al recurso img del arbol DOM
var image = document.getElementById("image");
var play = document.getElementById('play');
var sleep =document.getElementById('sleep');
var eat = document.getElementById('eat');
// al cargar la ventana
window.onload = refresh;

let playCat = ()=>{
	newCat.checkLive();
	if(newCat.isAlive){	
		newCat.play();
		refresh();
	}else
		killCat();
}

let sleepCat = ()=>{
	newCat.sleep();
	refresh();
}

let eatCat = ()=>{
	newCat.checkLive();
	if(newCat.isAlive){
		newCat.eat();
		refresh();
	}else
		killCat();
}

let checkImage = () => {
	switch(newCat.state){
		case 'eating' : 	
			image.setAttribute('src', './images/comiendo.jpg');break;
		case 'playing': 	
			image.setAttribute('src', './images/jugando.jpg');break;
		case 'sleeping' : 
		default:  
			image.setAttribute('src', './images/dormido.jpg');break;
	}
}


/** Refresh values*/
function refresh(){
	document.getElementById("name1").value=newCat.name;
	document.getElementById("race1").value=newCat.race;
	document.getElementById("weight1").value=newCat.weight;
	document.getElementById("age1").value=newCat.getAge();
	checkImage();  
}

/** R.I.P */
function killCat(){
	image.setAttribute('src', './images/muertecito.jpg');
	document.getElementById("age1").value = -0;
	document.getElementById("weight1").value = -0;
	document.body.style.background = "#000000";
	play.className= 'hidden';
	eat.className= 'hidden';
	sleep.className= 'hidden';
}

play.addEventListener('click', playCat);
eat.addEventListener('click', eatCat);
sleep.addEventListener('click', sleepCat);