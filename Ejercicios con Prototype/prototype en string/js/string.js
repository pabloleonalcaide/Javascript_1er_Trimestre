/**
 * @author Pablo Leon Alcaide
 * @version 1.0
 */

/** Trunca una cadena a la longitud especificada por parámetro */
String.prototype.truncar = function(longitud) {
 longitud = longitud || 10;
  if(this.length > longitud) {
    return this.substring(0, longitud);
  }
  else {
    return this;
  }
}
 
let cadena = "hola mundo";
document.write(cadena.truncar(6)+'<br>');
 
/* Modificamos la función truncar para que añada un indicador */
String.prototype.truncar = function(longitud, indicador) {
  longitud = longitud || 10;
  indicador = indicador || '...';
 
  if(this.length > longitud) {
    return this.substring(0, longitud-indicador.length) + indicador;
  }
  else {
    return this;
  }
}
 
cadena = "Javascript es divertidisimo, me mondo con su falta de tipado y su estandarización, es la alegría de mi vida";
document.write(cadena.truncar(90, '...(mas)<br>'));
document.write(cadena.truncar(90));