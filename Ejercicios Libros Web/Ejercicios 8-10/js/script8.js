/*
 * Pablo León Alcaide - Script Ejercicio 8
 */
//Check if num is pair 
function comprobarPar(num) {
    let mensaje = "";
    // Check if num is a number
    if (!isNaN(parseFloat(num)) && isFinite(num)) {
        //Check if num is an integer or a float
        if ((num % 1) != 0) {
            return "introduciste un valor decimal";
        } else if (num % 2 == 0) {
            mensaje = "es par";
        } else {
            mensaje = "es inpar";
        }
        return mensaje;
    } else {
        return "es una cadena";
    }
}
let number = prompt("introduce un entero, yo te digo si es Par o Impar");
alert(comprobarPar(number));