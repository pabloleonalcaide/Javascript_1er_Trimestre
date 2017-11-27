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
}
/** Clase factura, tiene un cliente y un conjunto de elementos*/
function Factura(cliente, elementos) {
  this.cliente = cliente;
  this.elementos = elementos;
  this.informacion = {
    baseImponible:  0,
    iva:            16,
    total:          0,
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
  this.informacion.total = this.informacion.baseImponible * this.informacion.iva;
}

/** Añadimos al prototipo de la empresa la función muestraTotal */
Factura.prototype.muestraTotal = function() {
  this.calculaTotal();
  document.write("Total = " + this.informacion.total + " Euros");
}


let cliente = new Cliente("Pablo", "bajo el mar", "699123456", "123456789P");
let elementos = [new Elemento("elemento1", "1", "8"),
                  new Elemento("elemento2", "2", "34"),
                  new Elemento("elemento3", "3", "61")
                   ];
let factura = new Factura(cliente, elementos);
//llamamos a la función muestraTotal, que ahora forma parte del prototipo de la clase Factura
document.write('Total de la factura de '+ cliente.nombre+"<br>")
factura.muestraTotal();