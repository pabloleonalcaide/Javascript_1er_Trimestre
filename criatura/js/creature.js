/**
 * @author Pablo Leon Alcaide
 * @version 1.0
 * Class Creature (invoque one and play with her)
 *
 * @class      Creature
 * @param      {string}  iname   The iname
 * @param      {date}  idate   The idate
 * @param      {string}  icolor  The icolor
 */

  function Creature(iname,idate,icolor){
	this.setName(iname);
	this.setDate(idate);
	this.setColor(icolor);
	this.energy = 10;
	this.state = 'active';
	this.dead = false;
	}
	Creature.prototype.MAXENERGY = 20;
	Creature.prototype.MINENERGY = 1;

	Creature.prototype.setName = function (newName){
		if(newName.length == 0)
			throw new Error("a Creature need a name");
		this.name = newName;
	}
	Creature.prototype.getAlias = function(){
		return this.name;
	}
	Creature.prototype.setDate = function (newDate){
		c = new Date();
		n = new Date(newDate);
		if(newDate == 'Invalid Date')
			throw new Error("a Creature need a date");
		else if (n.getTime() > c.getTime())
			throw new Error("a Creature doesn't travel in time");
		this.date = n;
	}
	Creature.prototype.getDate = function(){
		return this.date;
	}

	Creature.prototype.setEnergy = function(newEnergy){
		if(!this.isDead())	
			this.energy = newEnergy;
	}
	Creature.prototype.getEnergy = function(){
		return this.energy;
	}
	Creature.prototype.setColor = function(newColor){
		this.color = newColor;
	}
	Creature.prototype.getColor = function(){
		return this.color;
	}
	Creature.prototype.getState = function(){
		return this.state;
	}
	Creature.prototype.isDead = function(){
		this.checkLive();
		return this.dead;
	}
	Creature.prototype.checkLive = function(){
		if(this.getEnergy()> this.MAXENERGY || this.getEnergy() < this.MINENERGY)
			this.dead = true;
	}
	Creature.prototype.getTimeLife = function(){
		let currentDate = new Date();
		let millisec = currentDate.getTime() - this.getDate();
		return Math.round(millisec / (24*60*60*1000));
	}
// State

	Creature.prototype.toSleep = function(){
		this.state = 'sleeping';
	}
	Creature.prototype.toCode = function(){
		this.state = 'coding';
		this.setEnergy(this.getEnergy()-1);
	}
	Creature.prototype.toCommit = function(){
		this.state = 'commit';
		this.setEnergy(this.getEnergy()+1);
	}

