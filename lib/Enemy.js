const Potion = require('./Potion');
const Character = require('./Character');


class Enemy extends Character {
    constructor(name, weapon){
        // have to call super constructor for inehrited methods
        super(name);
       
        this.weapon = weapon;
        this.potion = new Potion();

       

    }

    //return the description of the enemy
    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
}
module.exports = Enemy;