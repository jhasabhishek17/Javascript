//factory function help us to create one time function and use it again and again
// one drawback of this is if we make 1000 entries tehn 1000 copies of that also there and for that New Operator is the best method. to overcome from this
function PersonMaker (name,age){
    const person={
        name : name,
        age : age,
        talk(){
            console.log(`Hi,my name is ${this.name}`);
        }
    }
    return person;
}

//New Operator


//Constructors - doesn't return anything & start with capital
function Person(name,age){
  this.name = name;
  this.age = age;
}

Person.prototype.talk = function (){
    console.log(`Hi , , my name is ${this.name}`);
};

let p1 = new Person("abhi",22);
let p2 = new Person("akshu",19);

// Best Method is classes and inside that there is the method called constructors