let button1 = document.getElementById("ej1");
let button2 = document.getElementById("ej2");
let div =document.getElementById("msg");

let abrirFormulario =()=>{
	document.location.href='formulario.html';
}
let abrirDocument = ()=>{
	generarDocumentoEjercicio1();
}


button1.addEventListener("click", abrirDocument);
button2.addEventListener("click", abrirFormulario);
