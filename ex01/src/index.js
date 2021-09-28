// Only change code below this line
class Car{
    constructor(manifacturer,model,production){
        this.manifacturer=manifacturer;
        this.model=model;
        this.production=production;
    }
}

// Only change code above this line
const bmw=new Car("BMW","BMW X3",2003);
console.log(bmw.manifacturer);
console.log(bmw.model);
console.log(bmw.production);

module.exports=Car;