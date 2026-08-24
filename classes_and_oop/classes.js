class Person{
    constructor(name,age){
        console.log("person class constructor");
        this.name = name;
        this.age = age;

    }
    talk(){
        console.log(`Hi, , I love ${this.name}`);
    }
}

let p1 = new Person("shubh",22);
let p2 = new Person("maahi",19);


// Inheritance :- 

class Student extends Person{
    constructor(name,age,marks){
        console.log("student class constructor")
       super(name,age); // Parent class constructor is called
        this.marks = marks;
    }

}

class Teacher extends Perrson{
    constructor(name,age,subject){
        super(name,age);
        this.subject = subject;

    }
    
}