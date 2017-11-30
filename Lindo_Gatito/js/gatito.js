/**
 * Clase Gato para ejercicio 'Lindo Gatito'
 * @author Pablo Leon 
 */
{
	function Kitty(name,year,race,weight){
	this.name = name || 'wenceslao',
	this.year = year,
	this.race = race || 'mestizo',
	this.weight = weight,
	this.isAlive = true,
	this.state = 'sleeping';
	}
	
	/** Comprueba si el gato está vivo*/
	Kitty.prototype.checkLive = function(){
		if(this.weight>=15 || this.weight<=1)
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
			++this.weight;
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
			--this.weight;
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
