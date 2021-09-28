// Only change code below this line
class Pets{
    constructor(name,legs)
    {
        this._name=name;
        this._legs=legs;
    }
     walk(numberOfLegs) {
        return `${this._name} is walking on ${numberOfLegs} legs` ;
    }
}
class Dog extends Pets{
    constructor(name,legs)
    {
        super(name,legs);
    }
    bark(dogSay)
    {
        return `${this._name} say ${dogSay}`;
    }
}
 // Only change code above this line
let dog=new Dog("Pujdo",4);
console.log(dog.walk(4));
console.log(dog.bark("WUF-WUF"));
 module.exports={
     Pets,
     Dog
 };