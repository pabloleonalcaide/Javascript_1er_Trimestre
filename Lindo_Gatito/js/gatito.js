/**
 * Exercise: Lindo Gatito
 * Object: Cat ('Kitty');
 * @author Pablo Leon 
 */
{
	/** Constructor */
	function Kitty(name,year,race,weight){
	this.setName(name);
	this.weight= Kitty.prototype.checkWeight(weight);
	this.setYear(year),
	this.setRace(race),
	this.isAlive = true,
	this.state = 'sleeping',
	this.id = Kitty.prototype.id++;
	}
	
	Kitty.prototype.id = 1;	
	Kitty.prototype.MAXPESO = 15;
	Kitty.prototype.MINPESO = 1;

	Kitty.prototype.setName = function(newName){
		this.name = newName;
	}
	Kitty.prototype.getName = ()=> this.name;

	Kitty.prototype.setRace = function(newRace){
		this.race = newRace;
	}
	Kitty.prototype.getRace = ()=> this.race;
	
	Kitty.prototype.getWeight =()=> {return this.weight};

	/** check if the new weight is between max and min allowed*/	
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
	Kitty.prototype.setYear = function(nYear){
		if(nYear < 2000)
			throw new Error ('El año es inválido')
		this.year = nYear
	}
	
	Kitty.prototype.getYear = function(){
		return this.year;
	}
	/** Return if is dead or not*/
	Kitty.prototype.checkLive = function(){
		if(this.weight>=this.MAXPESO || this.weight <= this.MINPESO)
			this.isAlive = false;
	}

	/** Return the state of the cat*/
	Kitty.prototype.checkState = ()=> this.state;

	/**
	 * Feed the cat
	 */
	Kitty.prototype.eat = function(){
		this.checkLive();
		if(this.isAlive){
			this.state = 'eating';
			this.setWeight(+1);
		}
	}
	/**
	 * Sleep the cat
	 */
	Kitty.prototype.sleep = function(){
		this.checkLive();
		if(this.isAlive){
			this.state='sleeping';
		}
	}
	/**
	 * The cat play
	 */
	Kitty.prototype.play = function(){
		this.checkLive();
		if(this.isAlive){
			this.state='playing';
			this.setWeight(-1);
		}
	}
	/**
	 * @return the age of the cat
	 */
	Kitty.prototype.getAge = function(){
		let thisDate = new Date();
		let currentYear = thisDate.getFullYear();
		let years = currentYear - this.getYear();
		return years;
	}	
}
