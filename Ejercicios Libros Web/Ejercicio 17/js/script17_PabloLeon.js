/**
 * @author Pablo Leon Alcaide
 * @version 1.0
 */
{
  const MAXIMO = 140;
  let texto = document.getElementById("texto");
  let info = document.getElementById("info");

/**
 * Delimita los caracteres permitidos cuando introducimos texto
 * @return     boolean           permitido o no
 */
let controlaCaracteres = function(event) {
  let evento = event;
  //Cogemos el texto del formulario --> textarea

  let codigoCaracter = evento.charCode || evento.keyCode;
  
  /* Flechas horizontales */
  if(codigoCaracter == 37 || codigoCaracter == 39) {
    return true;
  }
 
  /* Del y Supr */
  if(codigoCaracter == 8 || codigoCaracter == 46) {
    return true;

  /* Controla tamaño de la cadena*/  
  }else if(texto.value.length >= MAXIMO ) {
    return false;

  }

    return true;
  
}
 /**
  * Actualiza la información aportada sobre el texto
  *
  */
let muestraInfo = function(event) {
 
  if(texto.value.length >= MAXIMO ) {
    info.innerHTML = "Máximo "+MAXIMO+" caracteres";
  
  }else {
    info.innerHTML = "Puedes escribir hasta "+(MAXIMO-texto.value.length)+" caracteres adicionales";
  
  }
}
 //callback 
 texto.onkeypress = controlaCaracteres;
 /*podría asociarse a document, pero es más correcto asociarlo a algo más limitado, para que no tome más elementos.*/
 texto.onkeyup = muestraInfo;
}