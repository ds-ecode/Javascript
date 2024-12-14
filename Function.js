// Functions 

// Declaration 

// function nameOfFunction(){
//     console.log("You are running code in the function")
//     // Body of function
// }

// nameOfFunction()
// nameOfFunction()

// Function Expression

// let fun = function(){// anonymus function
//     console.log("This is an example of function Expression")
// } 
// fun()

//  Real Example
// let invitation=function(name="defaultName",time="Morning"){
//     console.log(`welcome ${name} You are invited in the Event at the ${time} time `);
// }

// invitation("marie","morning")
// invitation("Rohit","evening")
// invitation("Mo","noon")

// invitation()//undefined --> will call default value

// Returning value

// let age =function(birthYear,currentYear=2024){
// let age=currentYear-birthYear
// // console.log("Your current age is ",age)
// return age
// }

// let functinoResult = age(2003);
// console.log(`Your age is ${functinoResult}`)


// Arrow function

// let invitation = function(guest){
//     return `Welcome ${guest} to the party`
// }
// let inv = name => `Welcome ${name} to the party`

// let i = name => {
//     return `Welcome ${name} to the party`
// }
// console.log(invitation("Coders"))
// console.log(inv("Coders"))
// console.log(i("coders"))

// Passing function as an argument(Higher order function example)

// let uppercase = function(str){
//     return str.toUpperCase();
// }

// let lowercase = function(str){
//     return str.toLowerCase();
// }


// // Transformer -> Hogher order function

// let transformer = function(str,fun){
//     return fun(str)
// }

// console.log(transformer("hello",uppercase))
// console.log(transformer("Hello World",lowercase))


// 2nd types od higher order function

let compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`)
    }
};

console.log(compliment("You are a good programmer")("Lurie"))


// 2nd method

let complimented = compliment("You are a good programmer");

complimented("Lurie");

// compliment is higher order function

// Immediately invoked function Expression - IIFE

(function(name){
    console.log("This will Execute",name);
})("IIFE");
// (function() {
//     console.log("This will execute once")
// })();


// SetTimeOut and setInterval

//  also called as timer functions 

//  Async 

// setTimeOut(func|code,delay , arg1, arg2)

// function greeting(name){
    // console.log(`Welcome ${name}`)
// }
// setTimeout(greeting,1000)

// setTimeout(function(nm){
    // console.log(`Printing in a function ${nm}`)
// },1000,"Divyansh");

// setInterval(func|code, time ,arg,arg)

// setInterval(greeting,1000,"John")

// // Hoisting
// test = 30
// console.log(test)
// var test;

// function declaration 

console.log(sum(1,2,3))
function sum(a,b,c){
    return a+b+c;
}
