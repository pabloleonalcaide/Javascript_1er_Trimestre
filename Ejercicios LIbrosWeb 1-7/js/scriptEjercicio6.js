var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N','J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var number = prompt("introduce el número de DNI");

if (number < 0 || number>99999999){
	alert("El número introducido no es válido");
}else{
	var position = (number%23);
	var rightLetter = letras[position];
	var letter = prompt("número correcto, introduce la letra");
	if(rightLetter != letter){
		alert("La letra no se corresponde con ese número");
	}else{
		alert("El número y letra indicados son correctos, gracias");
	}
}