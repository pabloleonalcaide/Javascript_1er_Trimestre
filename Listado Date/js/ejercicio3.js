/**
 * Indica el formato del parámetro cadena del método Date.parse().
 * @author Pablo Leon
 * @version 1.0
 */

document.write('<p>El método parse toma una cadena con una fecha en inglés (como por ejemplo "Dec 25, 1995") ');

let fecha = Date.parse("Dec 25, 2016");
document.write('<br>Introducido: Date.parse("Dec 25, 2016) <br>Resultado:'+fecha);
