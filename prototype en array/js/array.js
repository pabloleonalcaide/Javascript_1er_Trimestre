/**
 * @author Pablo Leon
 * @version 1.0
 */
Array.prototype.aniadir = function(elemento) {
  this[this.length] = elemento;
}
 
let array1 = [0, 1, 2];
array1.aniadir(2);
document.write('Primera llamada tras añadir (aun sin modificar prototype): ' +array1);
 
 /** Devuelve true si existe el elemento pasado por parámetro en el array*/
Array.prototype.contiene = function(elemento) {
  for(let i=0; i<this.length; i++) {
    if(this[i] === elemento) {
      return true;
    }
  }
  return false;
}
 /** añadimos un parámetro a la función aniadir */
Array.prototype.aniadir = function(elemento, permitirDuplicados) {
  let permitir = (permitirDuplicados == null) ? true : permitirDuplicados;
 
  if (!permitir) {
    if(!(this.contiene(elemento))) {
      this[this.length] = elemento;
    }
  }
  else {
    this[this.length] = elemento;
  }
}
 
let array2 = [0, 1, 2];
array2.aniadir(2);
document.write('<br>Segunda llamada tras añadir sin pasar parámetro: ' + array2);
 
let array3 = [0, 1, 2];
array3.aniadir(2, false);
document.write('<br>Tercera llamada tras añadir pasando parametro a false: ' +array3);