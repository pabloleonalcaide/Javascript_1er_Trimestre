
	let fragment = document.createDocumentFragment();
	screenValue="0"; 
	flag=1; 
	decimal=0;

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
	 bt7 = document.createElement("BUTTON");
		bt7.setAttribute("id","b7");
		bt7.setAttribute("onclick","addNumber(7)");
		textbt7 = document.createTextNode("7");
		bt7.appendChild(textbt7);
		fragment.appendChild(bt7);
	 bt8 = document.createElement("BUTTON");
		bt8.setAttribute("id","b8");
		bt8.setAttribute("onclick","addNumber(8)");
		textbt8 = document.createTextNode("8");
		bt8.appendChild(textbt8);
		fragment.appendChild(bt8);
	 bt9 = document.createElement("BUTTON");
		bt9.setAttribute("id","b8");
		textbt9 = document.createTextNode("9");
		bt9.appendChild(textbt9);
		bt9.setAttribute("onclick","addNumber(9)");
		fragment.appendChild(bt9);
	 btdivide = document.createElement("BUTTON");
		btdivide.setAttribute("id","bDivide");
		textbtdivide = document.createTextNode("/");
		btdivide.setAttribute("onclick","addNumber('/')");
		btdivide.appendChild(textbtdivide);
		fragment.appendChild(btdivide);
//// segunda línea
	 bt4 = document.createElement("BUTTON");
		bt4.setAttribute("id","b4");
		bt4.setAttribute("onclick","addNumber(4)");
		 textbt4 = document.createTextNode("4");
		bt4.appendChild(textbt4);
		fragment.appendChild(bt4);
	 bt5 = document.createElement("BUTTON");
		bt5.setAttribute("id","b5");
		bt5.setAttribute("onclick","addNumber(5)");
		 textbt5 = document.createTextNode("5");
		bt5.appendChild(textbt5);
		fragment.appendChild(bt5);
	 bt6 = document.createElement("BUTTON");
		bt6.setAttribute("id","b6");
		bt6.setAttribute("onclick","addNumber(6)");
		textbt6 = document.createTextNode("6");
		bt6.appendChild(textbt6);
		fragment.appendChild(bt6);
	 btmultiplica = document.createElement("BUTTON");
		btmultiplica.setAttribute("id","bMultiplica");
		btmultiplica.setAttribute("onclick","addNumber('*')");
		 textbtmultiplica = document.createTextNode("*");
		btmultiplica.appendChild(textbtmultiplica);
		fragment.appendChild(btmultiplica);
//// tercera línea
	 bt1 = document.createElement("BUTTON");
		bt1.setAttribute("id","b1");
		bt1.setAttribute("onclick","addNumber(1)");
		 textbt1 = document.createTextNode("1");
		bt1.appendChild(textbt1);
		fragment.appendChild(bt1);
	 bt2 = document.createElement("BUTTON");
		bt2.setAttribute("id","b2");
		bt2.setAttribute("onclick","addNumber(2)");
		 textbt2 = document.createTextNode("2");
		bt2.appendChild(textbt2);
		fragment.appendChild(bt2);
	 bt3 = document.createElement("BUTTON");
		bt3.setAttribute("id","b3");
		bt3.setAttribute("onclick","addNumber(3)");
		textbt3 = document.createTextNode("3");
		bt3.appendChild(textbt3);
		fragment.appendChild(bt3);
	 btresta = document.createElement("BUTTON");
		btresta.setAttribute("id","bResta");
		btresta.setAttribute("onclick","addNumber('-')");
		textbtresta = document.createTextNode("-");
		btresta.appendChild(textbtresta);
		fragment.appendChild(btresta);
//// cuarta línea
	 bt0 = document.createElement("BUTTON");
		bt0.setAttribute("id","b0");
		bt0.setAttribute("onclick","addNumber(0)");
		textbt0 = document.createTextNode("0");
		bt0.appendChild(textbt0);
		fragment.appendChild(bt0);
	 btPorcentaje = document.createElement("BUTTON");
		btPorcentaje.setAttribute("id","bResto");
		btPorcentaje.setAttribute("onclick","addNumber('%')");
		textbtPorcentaje = document.createTextNode("%");
		btPorcentaje.appendChild(textbtPorcentaje);
		fragment.appendChild(btPorcentaje);
	 btSigno = document.createElement("BUTTON");
		btSigno.setAttribute("id","bSigno");
		btSigno.setAttribute("onclick","addNumber('+/-')");
		 textbtSigno = document.createTextNode("+/-");
		btSigno.appendChild(textbtSigno);
		fragment.appendChild(btSigno);
	 btsumar = document.createElement("BUTTON");
		btsumar.setAttribute("id","bSuma");
		btsumar.setAttribute("onclick","addNumber('+')");
		textbtsumar = document.createTextNode("+");
		btsumar.appendChild(textbtsumar);
		fragment.appendChild(btsumar);
//// quinta línea
	 btretroceso = document.createElement("BUTTON");
		btretroceso.setAttribute("id","bBack");
		 textbtretroceso = document.createTextNode("\u2190");
		btretroceso.appendChild(textbtretroceso);
		fragment.appendChild(btretroceso);
	 btlimpiar = document.createElement("BUTTON");
		btlimpiar.setAttribute("id","bReset");
		 textbtlimpiar = document.createTextNode("C");
		 btlimpiar.setAttribute("onclick","addNumber('c')");
		btlimpiar.appendChild(textbtlimpiar);
		fragment.appendChild(btlimpiar);
	 btComa = document.createElement("BUTTON");
		btComa.setAttribute("id","bComa");
		btComa.setAttribute("onclick","addNumber('.')");
		textbtComa = document.createTextNode(".");
		btComa.appendChild(textbtComa);
		fragment.appendChild(btComa);
	 btIgual = document.createElement("BUTTON");
		btIgual.setAttribute("id","bResult");
		textbtIgual = document.createTextNode("=");
		btIgual.appendChild(textbtIgual);
		fragment.appendChild(btIgual);

}

addNumber = function(number) {
	let outpScreen = document.getElementById("output");
	let valorPantalla = outpScreen.value
	if (screenValue=="0" || flag==1 ) { 
		outpScreen.setAttribute("value", number);
		screenValue=number; 
		if (number==".") {
			outpScreen.setAttribute("value", "0.");
			screenValue=number;
			coma=1; 
		}
	}else { 
		if (number=="." && decimal==0) { 
			outpScreen.setAttribute("value", valorPantalla=(valorPantalla+number));
			screenValue+=number;
			decimal=1; 
		}
		else if (number=="." && decimal==1) {
		}
		else if(number == 'c'){
			outpScreen.setAttribute("value", "0");
			screenValue="";
		}
		else {
			outpScreen.setAttribute("value", valorPantalla=(valorPantalla+number));
			screenValue+=xx;
		}
	}
	flag=0 

}

generarEstructura();

