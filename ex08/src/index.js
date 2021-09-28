class Person{
    constructor(name,email,age)
    {
        this.name=name;
        this.email=email;
        this.age=age;

    }
    getPerson()
    {
        let personInfo=`Name: ${this._name}, email: ${this._email}, age:${this._age}`;
        return personInfo;
    }
}

module.exports=Person;