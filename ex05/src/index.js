// Only change code below this line

class Microsoft{
    constructor(name)
    {
        this._name=name;
    }
    getter()
    {
        return this._name;
    }
    setter(newName)
    {
        this._name=newName;
    }
    occupation()
    {
        return `${this._name} is a philanthropist!`;
    }
}

class Facebook extends Microsoft{
    constructor(name,age)
    {
        super(name);
        this._age=age;
    }
    studentAge()
    {
        return `${this._name} is ${this._age}`;
    }
}
var henry=new Microsoft("William Henry Gates III");
console.log(henry.occupation());
var elliot=new Facebook("Mark Elliot Zuckenberg",23);
console.log(elliot.occupation());
console.log(elliot.studentAge());
 // Only change code above this line

module.exports={
    Microsoft,Facebook
}