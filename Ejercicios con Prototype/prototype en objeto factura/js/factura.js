/**
 * @author Pablo Leon Alcaide
 * @version 1.0
 */

/** Clase Cliente*/
function Cliente(nombre, direccion, telefono, nif) {
  this.nombre = nombre;
  this.direccion = direccion;
  this.telefono = telefono;
  this.nif = nif;
}
/** Clase elemento de la factura*/
function Elemento(descripcion, cantidad, precio) {
  this.descripcion = descripcion;
  this.cantidad = cantidad;
  this.precio = precio;
  this.iva = "0.16";  //IVA es parte del estado del elemento
}

/** Clase factura, tiene un cliente y un conjunto de elementos*/
function Factura(cliente, elementos) {
  this.id = 0;
  this.cliente = cliente;
  this.elementos = elementos;
  this.informacion = {
    baseImponible:  0,
    total:          0,
    totalIva:       0, 
    formaPago:      "contado"
  };
};

/** Añadimos al prototipo de factura la propiedad 'empresa' */
Factura.prototype.empresa = {
  nombre:    "mi empresa",
  direccion: "Calle falsa 123",
  telefono:  "999666999",
  nif:       "123456789-X"
};

/** Añadimos al prototipo de factura la función calculaTotal */
Factura.prototype.calculaTotal = function() {
  for(let i=0; i<this.elementos.length; i++) {
    this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
  }
  this.informacion.total = this.informacion.baseImponible;
}
/**  --------------------------------------------------------------->>> Esto hay que corregirlo no repetir código */
//Quizás con un flag o que el mismo recorrido modifique this.informacion.total y this.informacion.total.iva
Factura.prototype.calculaTotalIva = function(){
 for(let i=0; i<this.elementos.length; i++) {
    this.informacion.totalIva += (this.elementos[i].cantidad * this.elementos[i].precio * this.elementos[i].iva)+(this.elementos[i].cantidad * this.elementos[i].precio);
  }
}
/** Añadimos al prototipo de la empresa la función muestraTotal */
Factura.prototype.muestraTotal = function() {
  this.calculaTotal();
  this.calculaTotalIva();
  document.write("Total = " + this.informacion.total + " Euros<br>");
  document.write("Total con IVA = " + this.informacion.totalIva + " Euros");
}

/** Inicialización de los objetos*/
let cliente = new Cliente("Pablo", "bajo el mar", "699123456", "123456789P");
let elementos = [new Elemento("elemento1", "1", "8"),
                  new Elemento("elemento2", "2", "34"),
                  new Elemento("elemento3", "3", "61")
                   ];
let factura = new Factura(cliente, elementos);
//llamamos a la función muestraTotal, que ahora forma parte del prototipo de la clase Factura
document.write('Total de la factura de '+ cliente.nombre+"<br>")
factura.muestraTotal();