var remove = document.getElementById("linkRemove");
var insert = document.getElementById("linkInsert");
var moreless = document.getElementById("moreless");
var mode = document.getElementById("mode");
var insertStart = document.getElementById("insertStart");
var time = document.getElementById("time");

//insert an element without position 
let insertParagraph = ()=>{
	let paragraph = document.createElement("p");
	let text = document.createTextNode("parrafo insertado");
	paragraph.appendChild(text);
	document.body.appendChild(paragraph);
	insert.style.display="none";
}

//remove an element
let removeContent = () =>{
	let text = document.getElementById("remove");
	text.parentNode.removeChild(text);
	//once deleted, this link is useless
	remove.style.display ="none";
}
// show or hide an element
let showHide = () =>{
	let text = document.getElementById("extend");
	if(text.style.display == "none"){
		text.style.display = "inline";
		moreless.innerHTML = " >menos< "; //the <a> text change when we show or hide the element
	}else{
		text.style.display = "none";
		moreless.innerHTML = " >mas< ";
	}

}
//change attributes
let nightMode = () =>{
	if(document.body.style.backgroundColor == 'black'){
		document.body.style.backgroundColor = 'white';
		document.body.style.color = 'black';
	}else{
		document.body.style.backgroundColor = 'black';
		document.body.style.color = 'white';
	}
}

//insert an element at the start of body
let insertToStart = () => {
	let span = document.createElement("span");
	let text = document.createTextNode("span añadido al principio");
	span.appendChild(text);
	document.body.insertBefore(span,document.getElementById("first"));
}

let writeTime = () => {
	let date = new Date();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	time.innerHTML = "tiempo:"+hour+':'+min+':'+sec;
}
let showDate = () =>{
	setInterval(writeTime,1000);
}

remove.addEventListener("click", removeContent);
insert.addEventListener("click", insertParagraph);
moreless.addEventListener("click",showHide);
mode.addEventListener("click",nightMode);
insertStart.addEventListener("click", insertToStart);

window.onload =showDate;

