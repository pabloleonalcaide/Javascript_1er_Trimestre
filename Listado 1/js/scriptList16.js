/**
* Pablo León Alcaide - Listado 1 - Ejercicio 16
* DWEC 2º D.A.W. 
* Implementa Pirámide que mediante un bucle for visualice una pirámide del siguientetipo:
* 1
* 22
* 333
* 4444
* 55555
* 666666
* 7777777
* 88888888
* 999999999
* 0000000000
*/
/*let row;
for(let i=1; i<10; i++){
	row="";
	for(let j=0; j<i;j++){
		
		row+=i;
	}
	console.log(row);
}
console.log(0000000000);
*/
{
    let fila;
    let filaCero;

    for(let i=1; i<10; i++){
        fila="";
        for(let j=0; j<i;j++){
            fila+=i;
        }
        console.log(fila);
    }
    filaCero="";
    for(let k=0; k<10; k++){
        
        filaCero+=0;
    }
    console.log(filaCero);

}