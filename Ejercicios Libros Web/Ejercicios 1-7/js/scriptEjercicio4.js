var valores= [true,5, false, "hola", "adios", 2];

alert("La primera cadena es mayor que la segunda?:");
//comprobamos si la primera cadena es mayor que la segunda
answer1 = valores[3] > valores[4];
alert(answer1);

//generamos un valor True con los booleanos del array
alert("generamos un valor true: true != false");
alert(valores[0] != valores[3]);

//generamos un valor False con los booleanos del array
alert("generamos un valor false: true == false");
alert(valores[0] == valores[3]);


//Operaciones matemáticas:
alert(' Suma: '+valores[1]+' + '+valores[5]+' = '+(valores[1]+valores[5])+
	'\n Resta: '+valores[1]+' - '+valores[5]+' = '+(valores[1]-valores[5])+
'\n Multiplicación: '+valores[1]+' * '+valores[5]+' = '+(valores[1]*valores[5])+
'\n División: '+valores[1]+' / '+valores[5]+' = '+(valores[1]/valores[5])+
	'\n Resto: '+valores[1]+' % '+valores[5]+' = '+(valores[1]%valores[5]));