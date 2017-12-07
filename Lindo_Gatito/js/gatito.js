// CADA CAJA DE TEXTO TIENE SU PROPIO MENSAJE DE ERROR (AL PERDER EL FOCO);
/**
 * Clase Gato para ejercicio 'Lindo Gatito'
 * @author Pablo Leon 
 */
{
	function Kitty(name,year,race,weight){
	this.setName(name);
	this.weight= Kitty.prototype.checkWeight(weight);
	this.setYear(year),
	this.race = race,
	this.isAlive = true,
	this.state = 'sleeping';
	this.id = Kitty.prototype.id++;
	}
	Kitty.prototype.id = 1;	
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
	Kitty.prototype.checkWeight = function(weight){
		if(weight>=Kitty.prototype.MAXPESO || weight <= Kitty.prototype.MINPESO)
			throw new Error('El peso es inválido');
		return weight;
	}
	Kitty.prototype.setWeight = function(mod){
		if(this.weight>=Kitty.prototype.MAXPESO || this.weight <= Kitty.prototype.MINPESO)
			throw new Error('El peso es inválido');
		this.weight = parseInt(this.weight) + parseInt(mod);
	}
	Kitty.prototype.setYear = function(year){
		if(year < 2000)
			throw new Error ('El año es inválido')
		return year;
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
