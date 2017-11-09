/**
* @author Pablo Leon
 * @version 1.0
*/
//Definimos la función callback para el foreach
function ShowResults(value, index, ar) {  
    document.write("value: " + value);  
    document.write(" index: " + index);  
    document.write("<br />");  
}  

// Creamos un array
let letters = ['alfa', 'beta', 'gamma','delta'];  


//Llamaremos a la función callback por cada elemento del array.
letters.forEach(ShowResults);