/**Pablo León Alcaide - Listado 1 - Ejercicio 17
* DWEC 2º D.A.W. 
* Implementa PiramideDos que mediante un bucle for visualice una pirámide del
* siguiente tipo:
* 1
* 12
* 123
* 1234
* 12345
* 123456
* 1234567
* 12345678
* 123456789
* 1234567890
*/
{
    let row="";
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= i; j++) {
            row+=j + "     ";
        }
      	console.log(row);
        row="";
    } 
}