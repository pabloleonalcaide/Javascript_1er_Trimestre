/**
 * Pablo León Alcaide - Listado 1 - Ejercicio 6
 * DWEC 2º D.A.W. 
 * 1 LISTADO DE EJERCICIOS. JAVASCRIPT BÁSICO.
 * Implementa OrdenaTres que pida tres números y los muestre ordenados de menor a mayor.
 * @author Pablo León Alcaide <pabloleonpsico@gmail.com>
 * @version 1.0
 */

/**
 * order 3 numbers desc.
 */
function orderNumber(num1, num2, num3) {
    if(num1 === num2 === num3){
    	alert("son todos iguales");
    }else if (num1 < num2 && num2 < num3) {
        alert(num1 + "-" + num2 + "-" + num3);

    }else if (num1 < num2 && num3 > num2) {
        alert(num1 + "-" + num3 + "-"+ num2);

    } else if (num2 < num1 && num1 < num3) {
        alert(num2 + "-" + num1 + "-" + num3);

    } else if (num2 < num1 && num1 > num3) {
        alert(num2 + "-" + num3 + "-" + num1);

    }     else if (num3 < num2 && num2 < num1) {
        alert(num3 + "-" + num2 + "-" + num1);

    } else if (num3 < num1 && num2 > num1){
        alert(num3 + "-" + num1 + "-" + num2);
    }
}


//apply for the numbers
let number1 = prompt("introduce un número");
let number2 = prompt("introduce un segundo número");
let number3 = prompt("introduce un tercer número");

//parse numbers to order it (if not, for '123' only take the first digit ('1'))
number1 = parseInt(number1);
number2 = parseInt(number2);
number3 = parseInt(number3);

//call for the function
orderNumber(number1, number2, number3);