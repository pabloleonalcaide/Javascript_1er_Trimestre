//INTRODUCIR EXCEPCIONES (SI INTENTA CREAR UN GATO CON PESO POR ENCIMA O POR DEBAJO  DE LO PERMITIDO)

// CADA CAJA DE TEXTO TIENE SU PROPIO MENSAJE DE ERROR (AL PERDER EL FOCO);
/**
 * Clase Gato para ejercicio 'Lindo Gatito'
 * @author Pablo Leon 
 */
{
	function Kitty(name,year,race,weight){
	this.setName(name);
	this.setWeight(weight);
	this.year = year,
	this.race = race,
	this.weight = weight,
	this.isAlive = true,
	this.state = 'sleeping';
	}
	
	Kitty.prototype.MAXPESO = 15;
	Kitty.prototype.MINPESO = 1;

	Kitty.prototype.setName = function(newName){
		
		this.name = newName;
	}
	Kitty.prototype.getName = function(){
		return this.name;
	}
	Kitty.prototype.setRace = function(newRace){
		this.race = newRace;
	}
	Kitty.prototype.getRace = function(){
		return this.race;
	}
	Kitty.prototype.getWeight = function(){
		return this.weight;
	}

	Kitty.prototype.setWeight = function(mod){
		if(this.weight>=this.MAXPESO || this.weight <= this.MINPESO)
			throw 'El peso es inválido';
		this.weight = parseInt(this.weight) + parseInt(mod);
	}
	/** Comprueba si el gato está vivo*/
	Kitty.prototype.checkLive = function(){
		if(this.weight>=this.MAXPESO || this.weight <= this.MINPESO)
			this.isAlive = false;
	}

	/** Comprueba el estado del gato*/
	Kitty.prototype.checkState = function(){
		return this.state;
	}

	/**
	 * Alimenta al gato
	 */
	Kitty.prototype.eat = function(){
		this.checkLive();
		if(this.isAlive){
			this.state = 'eating';
			this.setWeight(+1);
		}
	}
	/**
	 * Duerme al gato
	 */
	Kitty.prototype.sleep = function(){
		this.checkLive();
		if(this.isAlive){
			this.state='sleeping';
		}
	}
	/**
	 * Hace jugar al gato
	 */
	Kitty.prototype.play = function(){
		this.checkLive();
		if(this.isAlive){
			this.state='playing';
			this.setWeight(-1);
		}
	}
	/**
	 * Calcula la edad del gato
	 *
	 * @return 
	 */
	Kitty.prototype.getAge = function(){
		let thisDate = new Date();
		let currentYear = thisDate.getFullYear();
		let years = currentYear - this.year;
		return years;
	}	
	

}
