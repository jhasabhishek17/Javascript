// // console.log("abhishek")

// const { useReducer } = require("react")

// // Variables 

// const accountId = 14455 // we cannot change the const value 
// let accountEmail = "abc@gmailcom"
// var accountPassword = "1234"
// accountCity= "jaipur"// this is the bad way to create a variable
// let accountState; // undefined value

// // prefer not to use var because of issue in block scope and fucntional scope

// //accountId= 2 // not allowed


// accountEmail = "abcd@gmailcom"
// accountPassword = "12384"
// accountCity= "jaipurrr"



// console.table([accountEmail,accountPassword,accountCity,accountState]);

// DATA TYPES

//"use strict"; // this will treat all JS code as newer version 

//alert(3+3)// this will run in browser not in code editior


// number = 2 to power 53
// bigint
// string = ""
// boolean = true/false
// null = standalone value
// undefine 
// symbol = unique

// object 


// console.log(typeof "abhi");
// console.log(typeof null); // object 
// console.log(typeof undefined); // undefined


// let score = 33 
// let scores = "33abc"

// console.log(typeof(score));
// console.log(typeof(scores));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// let valueInNumbers = Number(scores)
// console.log(typeof valueInNumbers); // NaN 
// console.log(typeof valueInNumbers);


// "33" = 33
// "22abc" = NaN
// true = 1 ; false= 0

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn); // converts 1 into boolearn true 
// console.log(booleanIsLoggedIn); 

// let someNumber = 33

// let stringNUmber = String(someNumber)
// console.log(typeof stringNUmber);


// OPERATIONS

// let value = 3
// let negValue = -value
// console.log(negValue);


// let str1 = "hello"
// let str2 = "abhi"

// let str3 = str1+str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// console.log(true); // true
// console.log(+true); //1

// let gameCounter = 100
// ++gameCounter; //Increments first, then uses the new value.
// gameCounter++; // Uses the current value first, then increments.
// console.log(gameCounter);



// DATA TYPES

// console.log(2>5);
// console.log(2<=5);
// console.log(2>=5);
// console.log(2<5);
// console.log(2==5);
// console.log(2!=5);

// console.log("2" > 1);

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

// // === strict check

// console.log("2" === 2); //false

// DATA TYPES SUMMARY 

// PRIMITIVE 7 types => String , Number, Boolean , null , undefined, Symbol(to make any vlaue unique), BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 2372682982n // n convert it into BigInt


// Reference(Non - primitive) = Array , objects , Functions

//const heros = ["abhi", "shubh"] // array
//object 
// let myObj = {
//     name: "abhi",
//     age: 22
// }

// // function
// const myFunction = function(){
//     console.log("hello");
    
// }
// non primitive data type are object function
// check all the datatype by using typeof



// MEMORY ; stack (used in primitive)and heap (non primitive)
// in stack memory we get the copy of the original and in HEAP we get the original one 

// let myName = "abhishek"

// let anotherName = myName
// anotherName = "shubham"

// console.log(anotherName); 
// console.log(myName); // here we understand that we get the copy and we change the value in copy


// let user1 = {
//     email: "abc@gmail.com",
//     upi: "ajiafa"
// }

// let user2 = user1

// user2.email = "abcd@gmail.com"
// console.log(user1.email);
// console.log(user2.email); // here we learn that in heap memory we change the original value by their original reference , in heap we get reference and we directly change the original value and in stack we get copy and we change the copy value 



// STRINGS

// const name = "abhi"
// const repoCount = 50 

// console.log(name + repoCount + "value"); // this is not the good way of concatenation

// console.log(`My name is ${name} and repoCount is ${repoCount} `);

// const gameName = new String('abhishek')// another way to declare string when it runs in console it has so many methods 
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3)); // by giving the indices we can get the character at particular index
// console.log(gameName.indexOf('k')) // we can get the index of character

// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-8,4)
// console.log(anotherString);


// const newStringOne = "   hello   "
// console.log(newStringOne)
// console.log(newStringOne.trim()); // this will remove all the extra spaces 


// const url = "https://abhi.com/abhi%20abc"
// console.log(url.replace('%20' , '-')); // this method will help to replace something
// console.log(url.includes('shubh')); // false - by this method we can check anything whethere it is present or not 

// console.log(gameName.split('-'))


// NUMS AND MATHS 

// const  score = 400
// console.log(score);
// console.log(typeof(score));



// const balance = new Number(100)
// console.log(balance);
// console.log(typeof(balance));

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // 100.00 this method will return with given precision

// const otherNumber = 23.9323
// console.log(otherNumber.toPrecision(4)); // this method will return the precison but it count from starting before the decimal

// const hundreds = 100000
// console.log(hundreds.toLocaleString()) // this will return as per US standards
// console.log(hundreds.toLocaleString('en-IN')) // this will return as per Indian Standards

// MATHS
// console.log(Math); // this will return the object 
// console.log(Math.abs(4));
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2)); // this will return like no matter how much bigger or near  it is...if it is greater than 4 it will return 5  
// console.log(Math.floor(4.6)); // this will take only the lower value 
// console.log(Math.min(3,5,1,6));


// console.log(Math.random());// this will return only the value in between 0 and 1
// console.log(Math.random()*10);// here is no gurantee that value will always greater than one 
// console.log((Math.random()*10)+1);// this will give us the surity that it will always return the value greater than 1 we add one so that it will always return the value >1

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max-min + 1)) + min) // this formula will always return the value greater than 10


// DATE AND TIME 

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// //let myCreatedDate2 = new Date(2023,0,23,5,3)
// let myCreatedDate2 = new Date("2023-01-13")
// let myCreatedDate3 = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate3.toLocaleString());


// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // by using this we will get the time 
// console.log(Math.floor(Date.now()/1000)); //. to convert in seconds we divide by 1000

// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// newDate.toLocaleString('default',{
//     weekday:"long",
// })


// ARRAY 

// const myArr = [0,1,2,3,4,5,true,"abhi"]
// const myHero= ["abhi","shubh"]

//const myArr2 = new Array[]
// the above codes are the various ways to declare the arrays 
//console.log(myArr[0]);


// Array Methods

// myArr.push(6) // here we add 6 in array 
// myArr.pop(7) // here we rempve the last element by using their index
// myArr.unshift(9) // here we add 9 in starting but it creates problem when there is large no. of array 

// console.log(myArr.includes(9));

// const newArr = myArr.join() // it changes the type of array into string 

// console.log(myArr);
// console.log(newArr);

// console.log(typeof(newArr));

 
// slice and splice 

// console.log("A",myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3) // splice manipulates the original array and slice does not 
// console.log("c",myArr);
// console.log(myn2);


// const heroes = ["AbHi","shubh","ironman"]
// const dcHeores= ["superman","flash","batman"]

//heroes.push(dcHeores) // this will pass array inside array 

//console.log(heroes);

// const allHeroes = heroes.concat(dcHeores)
// console.log(allHeroes);


 /// this will do same work as concat

// const anotherArray = [1,2,3,[4,5,6],[6,7,[8,9]]]
// const realArray = anotherArray.flat(Infinity) // this will resolve the array when we pass the depth in .flat
// console.log(realArray);


// console.log(Array.isArray("abhi")) // here we ask that it is array or not 
// console.log(Array.from("abhi")); // here we convert into array 
// console.log(Array.from({name: "abhi"})); // this will give us empty array we have to tell them which we have to convet into array key or value

// let score = 100
// let score2 = 300
// let score3 = 500

// console.log(Array.of(score,score2,score3)); // here we convert all the score values in array by using of function 




// Objects
// singleton = when we declare as a constructor then singleton is made  and when we declare as a literals then singleton is made 
// object.create() // this is singleton 

// object literals

// const mySym = Symbol("key1")

// const jsuser = {
//     name: "abhi", // here "name" is also act as a string  
//     age: 22,
//     [mySym]: "mykey1",
//     location: "faridabad",
//     isloggedIn: false,
//     email: "abc@gmail.con"

// }


// console.log(jsuser.email); // this is also correct
// console.log(jsuser["email"]); // this is the exact method to get the object
// console.log(jsuser.mySym); // here it will act as  a string
// console.log(typeof(jsuser.mySym)); 
// console.log(jsuser[mySym]);

// jsuser.email = "abcd@gmail.com"
// Object.freeze(jsuser) // here we freeze our object now we cannot change the object
// jsuser.email = "hekj@gmail.com" // here value will not change because we fix the value
// console.log(jsuser);

// jsuser.greetings = function(){
//     console.log("hello js user");  
    
// }
//     jsuser.greetings2 = function(){
//     console.log(`hello js user, ${this.name}`);  
// }

// console.log(jsuser.greetings); // this will give only the reference not the function // output is ;- [Function (anonymous)]
// console.log(jsuser.greetings());
// console.log(jsuser.greetings2());


//const tinderUser = new Object () // singleton Object


// const tinderUser = {} // this is non singleton object

// tinderUser.id = "abcd123"
// tinderUser.name = "shubh"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email : "abcd@gmail.com",
//     fullName: {
//         userFullName: {
//         firstName: "abhi",
//         lastName: "jha"
//         }
//     }
// }

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);


// const obj1 = {
//     1: "a",
//     2: "b",
//     3: "c"
// }

// const obj2 ={ 4:"d", 5:"e", 6:"f"}


// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2);
//const obj3 = Object.assign({},obj1,obj2) // this will also give the same value as above line but here is more surity that curly bracket act as a empty object as a target 
// const obj3 = {...obj1,...obj2} // this will also give the sam value 
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // in this we get the arrays inside th array with key and value 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


//  DE STRUCTURE OF OBJECT 

// const course = {
//     courseNmae: "js in english",
//     price: 999,
//     courseInstructor: "abhishek"
// }

// // course.courseInstructor

// const {courseInstructor} = course 
// const {courseInstructor: instructor} = course 

// console.log(courseInstructor);
// console.log(instructor); // both gives the same value 



// FUNCTIONS 
 
// function myName () {
//     console.log("hello abhi")
// }

// myName();

// function addNumber(num1,num2){
//     console.log(num1 + num2);
    
// }
// addNumber(2,3)

// function addNumber(num1,num2){
//     // let result = num1 + num2 
//     // return result

//     return num1 + num2
// }

// const result = addNumber(3,5)
// console.log(result);

// function loginUserMessage(username){
//     //if(username === undefined)
//     if(!username){ // this is also the another way to write the above line
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("abhi")); // when we does not pass anything then we get the outpur undefined 

// ... these triple dots are our rest and spread operator naming depends on their usecase 
// function calculateCardPrice(...num1){
//     return num1
// }

// console.log(calculateCardPrice(200));
// console.log(calculateCardPrice(200,400,500)); // this will return this value in array 

// const user = {
//     username: "abhi",
//     price: 28398232
// }

// function handleObject(anyObject){
//       console.log(`username is ${anyObject.username} and price is ${anyObject.price}` );
      
// }

// handleObject(user)



// const newArray = [200,400,100,300]

// function returnSecondValue(getArray){
//     return getArray
// }

// console.log(returnSecondValue(newArray));


// SCOPES : BLOCK SCOPE (declare inside the function only accesible to that function) GLOBAL (accessible outside the function globally )


// function one(){
//     const username = "abhi"

//     function two(){
//         const website = "linkedin"
//         console.log(username);
        
//     }
//     console.log(website); // we cannot access this outside the another function

//     two()
    
// }
//one()

// if(true){
//     const username = "abhi"
//     if (username === "abhi"){
//         const website = "youtube"
//         console.log(username + website);
        
//     }
//     //console.log(website);
    
// }
// //console.log(username);


// ARROW FUNCTION 

// const user = {
//     username: "abhi",
//     price: 888,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`); // this function help us to print the current context 
//         console.log(this); // here it is returning both the contexts 
        
//     }
// }

//  user.welcomeMessage()
// user.username = "shubh" // here we change the context 
// user.welcomeMessage()

//console.log(this) // here it is returning the empty object

// function chai(){
//     let username = "abhi"
//     console.log(this); // this will give all the value
//     console.log(this.username); // undefined - we cannot access the this inside the function
    
    
// }

// chai()


// const chai = () => {
//     let username = "abhi",
//     console.log(this);
    
// }

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)  // if we use {} then we have to write return and if we use () then we do not need to write return 

// console.log(addTwo(3,4));


//  IIFE - Immediately Invoked Function Expression 
// immediately execute the function to remove the problem of global scope pollution we use IIFE
// 


// (function chai(){
//     // named IIFE
//     console.log(`DB connected`);
    
// })();

// ((name) => {
//     // Unnamed IIFE
//     console.log(`DB connected two ${name}`);
    
// })('abhi')



// CONTROL FLOW 

// const temperature = 41

// if(temperature === 42){
//     console.log("less than 50 ");    
// } else {
//     console.log("greater than 50 ");
    
// }

// console.log("code executed");


// const score = 200

// if (score > 100 ){
//     let power = "fly" // if we use var at the place of let then we can print outside the scope but this is not correct we cannot access this outside the scope
//     console.log(`user power ${power}`); 
// }
// console.log(`user power ${power}`);


// const balance = 1000

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
    
// }

// const userLoggedIn = true
// const debitCard = false
// const loggedInGoogle = false
// const loggedInEmail = true

// if (userLoggedIn && debitCard){
//     console.log("allow to buy the course");
    
// }else{
//     console.log("not allowed to buy the course");
    
// }


// if (loggedInGoogle || loggedInEmail){
//     console.log("allowed");
// } else{
//     console.log("not allowed");
    
// }

// SWITCH 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// const month = 6

// switch (month) {
//     case 1:
//         console.log("January"); 
//         break;
//     case 2:
//         console.log("februaru"); 
//         break;
//     case 3:
//         console.log("march"); 
//         break; // if we will not use break it will execute rest of the code where it matches except the default code
//     case 4:
//         console.log("april"); 
//         break;

//     default:
//         console.log("default case matched");
//         break;
// }


// falsy values => false, 0, -0, BigInt , 0n , null , undefined , NaN
// Truthy Values =>  "0", 'false' , " " , [ ], { } , function (){}

// if(userEmail.length === 0){
//     console.log("array is empty");
    
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
    
// }

// Nullish Coalescing Operator (??): null undefined 

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // a binary programming operator that returns its left-hand operand if it exists and is not null; otherwise, it returns its right-hand operand.
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20 // 10

// console.log(val1);

// TERNARY OPERATOR 

// condition ? true : false

// const iceteaPrice = 90
// iceteaPrice <= 80 ? console.log("less than 80") : console.log("greater than 80");


// iterations 

// for 

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         //console.log(`inner loop ${j} and inner loop ${j}`);
//           console.log(i + '*' + j + ' = ' + i*j);
           
//     }
    
// }


// let myArray = ["shubh", "abhi"]
// console.log(myArray.length);


// for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }

// break and continue 

// for (let index = 0; index <= 20; index++) {
//     if (index == 5){
//         console.log(`detected 5`);
//         break
        
//     }
//     console.log(`value of i id ${index}`);
    
// }
// for (let index = 0; index <= 20; index++) {
//     if (index == 5){
//         console.log(`detected 5`);
//         continue
        
//     }
//     console.log(`value of i id ${index}`);
    
// }

// while 

// let index = 0
// while (index<= 10) {
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }

// let myArr = ["abhi", "shubh"]

// let arr = 0
// while (arr < myArr.length) {
//     console.log(`value is ${myArr[arr]}`);
//     arr = arr + 1
// }


// do while 

// let score = 1;

// do {
//     console.log(`score is ${score}`);
//     score++;
// } while (score<=10);

// FOR OF LOOP 

// const arr = [1,2,3,4,5]

// for await (const num of arr) {
//     console.log(num);
    
// }

// const greetings = "heelloo"
// for await (const greet of greetings) {
//     console.log(`each char is ${greet}`);
    
// }


// Maps ;- it is a objects it holds a key value pair  here no duplicate values present 

// const map = new Map()
//     map.set('IN',"INDIA")
//     map.set('USA',"United state of america")
//     map.set('Fr',"France")
//     map.set('IN',"INDIA") // it does not allow duplicate value
// console.log(map);

// for await (const [key,value] of map) {
//     console.log(key,':-',value);
    
// }

// const myObject = {
//     'game': 'NFS',
//     'game2': 'spiderman'
// }

// for await (const [key,value] of myObject) {
//     console.log(key , ':-' , value); // we cannot apply for of loop on object 
    
// }


// for in loop ;- for in loop works in object too but on arrays it will return the keys 
// const myObject = {
//     js: 'Javascript',
//     cpp: 'C++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
// }


// for each loop

//const coding = ["js", "ruby", "javascript", "python", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// })

// callback function
// coding.forEach((item) => {
//     console.log(item);
    
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) // it will also do the same work as the above code is doing 

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
    
// })


// const myCoding = [
//     {
//         languageName: "javascript",
//         langugaeFileName: "js"
//     },
//     {
//         languageName: "java",
//         langugaeFileName: "java"
//     },
//     {
//         languageName: "python",
//         langugaeFileName: "py"
//     }
// ]

// myCoding.forEach((item)=>{
//     console.log(item.langugaeFileName);
    
// })


//const myNums = [1,2,3,4,5,6,,7,8,9,10]

// const newNums = myNums.filter( (num) =>{
//     return num > 4 // here we use {} that's why we wrote return if we just write num >4 after arrow function then we do not need to return the value
// })
//console.log(newNums);



// const newNums = []

// myNums.forEach((num) => {
//     if (num>4){
//         newNums.push(num)
//     }
// }) // this is just the another way to write the above code but here we have to apply some logics 
// console.log(newNums); 


//const myNumbers = [1,2,3,4,5,6,7,8,9,10]


//const newNums = myNumbers.map((num) => num+10)
// const newNums = []
// myNumbers.forEach( (num) =>
//     newNums.push(num + 10)
// )

// console.log(myNumbers);
// console.log(newNums);



// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers
//         .map((num) => num*10)
//         .map((num) => num+1)
//         .filter((num) => num>=40)

// console.log(newNums);



// REDUCERS
const myNums = [1,2,3,]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// },0)

// console.log(myTotal);

const myTotal = myNums.reduce((acc,curr) => acc + curr , 0)

console.log(myTotal);// this is just the another way to write the above code

