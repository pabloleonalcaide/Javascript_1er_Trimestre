/**
 * Pablo León Alcaide - Ejercicio 5
 * Crea  una función que devuelva un array con cada uno de los argumentos.
 */

/**
 * muestra los argumentos introducidos en una función
 */
function recorreArgumentos() {
  var argumentos = "";

  // Iterar a través de los otros argumentos enviados
  for (var i = 0; i < arguments.length; i++)
  	document.write(arguments[i]+",");
}

recorreArgumentos("uno","dos","tres","cuatro");