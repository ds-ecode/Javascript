// Intro to Objects in JS
"Use Strict"
// let car = {
//     color:"black",
//     model:"2022",
//     company:"Honda"
// }

// console.log(car);
//  Accessing the JS Object prop

// console.log(car["model"]);

// other way
// console.log(car.color);

// let propertyName="color";
// console.log(car[propertyName]); // can pass as a variable
// console.log(car.propertyName); // can not use variable

// Modify the Object

// car.color = "brown";
// car['color'] = "bl";
// console.log(car.color)

// Delete properties if Objects 
 
// let Obj = {
//     prop1: "value1",
//     prop2: "value2"
// }
// console.log(Obj);
// let retur = delete Obj["prop1"];
// console.log(retur)

// function ageCalculate(year){
//     return 2024 - year;
// }
// console.log(ageCalculate(2002))

// let person ={
//     ageCalculate: function(year = 2000){
//         let age = 2024 - year;
//         return age;
//     }
// };
// ageCalculate in person is a method as it is called in context
// of the Object
// console.log(`Current age is ${person.ageCalculate(2002)}`)

// this keyword

// let person ={
//     firstName:"Divyansh",
//     lastName : "Sharma",
//     city : "Indore",
//     Education : "Software Engineer",
//     getSummary: function(){
//         // return `${this.firstName} ${this.lastName} lives in ${this.city} and is a ${this.Education}`
//         return this
//     }
// };
// console.log(person.getSummary())





// ForEach method of array

// Another loop 

// let dishes = ["a",'b','c']

// for (let i=0;i<dishes.length;i++){
//     console.log(dishes[i])

// };

// dishes.forEach(function(element){
//     console.log(element)
// });

// Objects in an Array

// let blockList=[{userName:"john",reason:"Abusive Content"},{userName:"paul",reason:"Copyright issue"}]
// console.log(blockList);

// for (let i=0 ; i<blockList.length;i++){
    // console.log(` ${blockList[i].userName} Blocked due to ${blockList[i].reason}`)
// }


// Math object

// console.log(Math)

// let number = 7.5;
// console.log(Math.round(number)) // round off Maths
// console.log(Math.floor(number))
// console.log(Math.trunc(number))

// let random = Math.random();
// console.log(Math.round(random*100))

// call and apply -> changes reference of this

// let mainPlane = {
//     airline:"Fly India",
//     iatacode:"FI",
//     bookings:[],
//     book:function(flightNum,name){
//         console.log(`${name} Booked flight on ${this.airline} with flight number ${this.iatacode}${flightNum}`)
//         this.bookings.push({flight:`${this.airline}`,name:name,flightNum:`${this.iatacode}${flightNum}`})
//     }
// }
// mainPlane.book(552,"Carlos")
// mainPlane.book(643,"Jack")
// childplane ={
//     airline:"childLine",
//     iatacode:"CP",
//     bookings:[]
// }
// let book = mainPlane.book;

// book.call(childplane,772,"Devi");

// console.log(childplane)

// book.call(mainPlane,69,"suri")

// book.apply(childplane,[785,"HASHESH"]);
// console.log(childplane)

//  bind method

// function greet(){
    // console.log(`Welcome ${this.firstName} ${this.lastName} on Channel`)
// };
// let user={
    // firstName:"Paul",
    // lastName:"Harington"
// };
// let greets = greet.bind(user);

// greets();


// Reference

let arry=[1,2,3,4,5];
let getRef=arry;

getRef[5]=7;
getRef.shift() // [2,3,4,5,]
console.log("Original Part ",arry)
console.log("Getrefpart",getRef)

//pass by value
let getValue = [...arry]; // Spread Operator

arry[5]=8
console.log("Original Part ",arry)
console.log("Getrefpart",getValue)

// For - in loop (in keyword is generally used in objects)

let car={
    model:2022,
    color:"Black",
    company:"Toyota"
};
// console.log(car)
// let x="";
// for (let key in car){
//     x+=car[key]+"\n"
//     // console.log(x)
// };
// console.log(x)
