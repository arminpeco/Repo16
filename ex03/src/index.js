// Only change code below this line
class Person{
   constructor(name)
   {
       this._name=name;
   }
    static display()
    {
        var message="Static method is invoked from Person class";
        return message;
    }
    static show(){
      
        console.log(this.display());
    }
}

// Only change code above this line
var message=new Person();
message.show();


module.exports=Person;