var number = prompt("Introduce un número, calcularé por tí su factorial");
var result = 1;
for (var i = 1; i <= number; i++) {
    result = result * i;
}
alert("El resultado es: " + result + " Gracias por confiar en JS");