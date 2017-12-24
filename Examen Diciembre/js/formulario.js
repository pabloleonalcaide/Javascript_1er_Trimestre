/**
 * @author Pablo Leon Alcaide
 * Examen DWEC Diciembre
 */


let name = document.getElementById('name');
let ape1 = document.getElementById('ape1');
let ape2 = document.getElementById('ape2');
let date = document.getElementById('date');
let submit = document.getElementById('submit');

let errName = document.getElementById('errName');
let errApe1 = document.getElementById('errApe1');
let errApe2 = document.getElementById('errApe2');
let errDate = document.getElementById('errDate');


let checkName = function(){
	checkEmpty(name,errName);
}
let checkApe1 = function(){
	checkEmpty(ape1,errApe1);
}
let checkApe2 = function(){
	checkEmpty(ape2,errApe2);
}
let checkDate = function(){
	checkEmpty(date,errDate);
	if (!pattern.fecha.test(date))
		errDate.innerHTML ='patrón de fecha inválido';
	else
		errDate.innerHTML ="";
}

let checkEmpty = (input,span)=>{
	if(input.value =="")
		span.innerHTML = "el campo no puede estar vacío";
	else
		span.innerHTML = "";
		
}
let checkAll = (event)=>{
	event.preventDefault();
	let errors = false;
	checkName();
	errors = errName.value==""
	checkApe1();
	errors = errApe1.value==""
	checkApe2();
	errors = errApe2.value==""
	checkDate();
	errors = errDate.value==""
	if(!errors)
		openWindow();
}
let openWindow = ()=>{
	try{
	fecha = date.value.replace(/-/g,'/');
	usuarioFecha = new Date(fecha);
	user = new Alumno(name.value,ape1.value,ape2.value,usuarioFecha);
	win = window.open('','','width=300px, height=200px');
	win.usuario=user;
	win.document.write(win.usuario.mostrar());
	win.document.close();
	}catch(e){
		errDate.innerHTML=e.message;
		win.close();
	}
}

name.addEventListener("blur", checkName);
ape1.addEventListener("blur", checkApe1);
ape2.addEventListener("blur", checkApe2);
date.addEventListener("blur", checkDate);
submit.addEventListener("click",checkAll);