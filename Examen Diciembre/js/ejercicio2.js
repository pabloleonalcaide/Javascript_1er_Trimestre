/**
 * Pablo Leon Alcaide
 * Examen DWEC 14-12-2017
 */

let Alumno = function(inombre,iapellido1,iapellido2,ifecha){
	this.setNombre(inombre);
	this.apellido1 = iapellido1;
	this.apellido2 = iapellido2;
	this.setFecha(ifecha);
}

Alumno.prototype.setFecha= function(date){
	this.fecha = date;	
}
Alumno.prototype.setNombre = function(name){
	if(name.length<1)
		throw new Error('El nombre no debe estar vacío');
	this.nombre = name;
}

Alumno.prototype.getNombre = function(){
	return this.nombre;
}

Alumno.prototype.setApellido1 = function(ap1){
	if(ap1.length<1)
		throw new Error('El apellido 1 no debe estar vacío');
	this.apellido1 = ap1;
}

Alumno.prototype.getApellido1 = function(){
	return this.apellido1;
}
Alumno.prototype.setApellido2 = function(ap2){
	if(ap2.length<1)
		throw new Error('El apellido2 no debe estar vacío');
	this.apellido2 = ap2;
}

Alumno.prototype.getApellido2 = function(){
	return this.apellido2;
}

Alumno.prototype.mostrar = function(){
	cadena= '<h2>Alumno</h2>Nombre: '+this.getNombre()+'<br>Apellido1: '+this.getApellido1()+'<br>Apellido2: '+this.getApellido2()+'<br>Edad: '+this.getEdad();
	return cadena;
}
Alumno.prototype.getEdad = function(){
	year = this.fecha.getFullYear();
	month = this.fecha.getMonth();
	currentDate = new Date();
	currentYear = currentDate.getFullYear();
	currentMonth = currentDate.getMonth();
	if (year > currentYear)
		throw new Error('imposible calcular edad');
	else if(year == currentYear)
		return currentMonth - month;
	return currentYear -year;
}