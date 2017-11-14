{
	let fragment = document.createDocumentFragment();

/* Genera la estructura de la calculadora */	
let generarEstructura = function(){
		var maindiv = document.createElement("div");
		maindiv.setAttribute("id","main");
		document.body.appendChild(maindiv);
		generarBotones();
		generarCabecera();
		maindiv.appendChild(fragment);
	}

/* Genera los nodos del texto de cabecera */
let generarCabecera = function(){
	let cabecera = document.createElement("h2");
	textoCabecera = document.createTextNode("Calculadora Básica - Pablo León");
	cabecera.appendChild(textoCabecera);
	document.body.appendChild(cabecera);
}

/* Genera los botones de la calculadora */
let generarBotones = function(){
	let outputScreen  = document.createElement("input");
	outputScreen.setAttribute("id","output");
	outputScreen.setAttribute("disabled","disabled");
	outputScreen.setAttribute("value","0");
	fragment.appendChild(outputScreen);
//// primera línea
	let bt7 = document.createElement("BUTTON");
		bt7.setAttribute("class","button");
		let textbt7 = document.createTextNode("7");
		bt7.appendChild(textbt7);
		fragment.appendChild(bt7);
	let bt8 = document.createElement("BUTTON");
		bt8.setAttribute("class","button");
		let textbt8 = document.createTextNode("8");
		bt8.appendChild(textbt8);
		fragment.appendChild(bt8);
	let bt9 = document.createElement("BUTTON");
		bt9.setAttribute("class","button");
		let textbt9 = document.createTextNode("9");
		bt9.appendChild(textbt9);
		fragment.appendChild(bt9);
	let btdivide = document.createElement("BUTTON");
		btdivide.setAttribute("class","button");
		let textbtdivide = document.createTextNode("/");
		btdivide.appendChild(textbtdivide);
		fragment.appendChild(btdivide);
//// segunda línea
	let bt4 = document.createElement("BUTTON");
		bt4.setAttribute("class","button");
		let textbt4 = document.createTextNode("4");
		bt4.appendChild(textbt4);
		fragment.appendChild(bt4);
	let bt5 = document.createElement("BUTTON");
		bt5.setAttribute("class","button");
		let textbt5 = document.createTextNode("5");
		bt5.appendChild(textbt5);
		fragment.appendChild(bt5);
	let bt6 = document.createElement("BUTTON");
		bt6.setAttribute("class","button");
		let textbt6 = document.createTextNode("6");
		bt6.appendChild(textbt6);
		fragment.appendChild(bt6);
	let btmultiplica = document.createElement("BUTTON");
		btmultiplica.setAttribute("class","button");
		let textbtmultiplica = document.createTextNode("*");
		btmultiplica.appendChild(textbtmultiplica);
		fragment.appendChild(btmultiplica);
//// tercera línea
	let bt1 = document.createElement("BUTTON");
		bt1.setAttribute("class","button");
		let textbt1 = document.createTextNode("1");
		bt1.appendChild(textbt1);
		fragment.appendChild(bt1);
	let bt2 = document.createElement("BUTTON");
		bt2.setAttribute("class","button");
		let textbt2 = document.createTextNode("2");
		bt2.appendChild(textbt2);
		fragment.appendChild(bt2);
	let bt3 = document.createElement("BUTTON");
		bt3.setAttribute("class","button");
		let textbt3 = document.createTextNode("3");
		bt3.appendChild(textbt3);
		fragment.appendChild(bt3);
	let btresta = document.createElement("BUTTON");
		btresta.setAttribute("class","button");
		let textbtresta = document.createTextNode("-");
		btresta.appendChild(textbtresta);
		fragment.appendChild(btresta);
//// cuarta línea
	let bt0 = document.createElement("BUTTON");
		bt0.setAttribute("class","button");
		let textbt0 = document.createTextNode("0");
		bt0.appendChild(textbt0);
		fragment.appendChild(bt0);
	let btPorcentaje = document.createElement("BUTTON");
		btPorcentaje.setAttribute("class","button");
		let textbtPorcentaje = document.createTextNode("%");
		btPorcentaje.appendChild(textbtPorcentaje);
		fragment.appendChild(btPorcentaje);
	let btSigno = document.createElement("BUTTON");
		btSigno.setAttribute("class","button");
		let textbtSigno = document.createTextNode("+/-");
		btSigno.appendChild(textbtSigno);
		fragment.appendChild(btSigno);
	let btsumar = document.createElement("BUTTON");
		btsumar.setAttribute("class","button");
		let textbtsumar = document.createTextNode("+");
		btsumar.appendChild(textbtsumar);
		fragment.appendChild(btsumar);
//// quinta línea
	let btretroceso = document.createElement("BUTTON");
		btretroceso.setAttribute("class","button");
		let textbtretroceso = document.createTextNode("\u2190");
		btretroceso.appendChild(textbtretroceso);
		fragment.appendChild(btretroceso);
	let btlimpiar = document.createElement("BUTTON");
		btlimpiar.setAttribute("class","button");
		let textbtlimpiar = document.createTextNode("C");
		btlimpiar.appendChild(textbtlimpiar);
		fragment.appendChild(btlimpiar);
	let btComa = document.createElement("BUTTON");
		btComa.setAttribute("class","button");
		let textbtComa = document.createTextNode(",");
		btComa.appendChild(textbtComa);
		fragment.appendChild(btComa);
	let btIgual = document.createElement("BUTTON");
		btIgual.setAttribute("class","button");
		let textbtIgual = document.createTextNode("=");
		btIgual.appendChild(textbtIgual);
		fragment.appendChild(btIgual);

}


generarEstructura();
}