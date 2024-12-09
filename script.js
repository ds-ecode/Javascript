console.log("Welcome to the server")
let v=10;
console.log('Welcome to the server')
let firstName = "wow" ;
let lastName = "Programmer" ;
console.log(firstName,lastName)
// String Concatenation

// Method 1  + operator 
//let fullName= firstName+" "+lastName;
//console.log(fullName);
// Method 2 Using Template literals 
//let fullName = `i want to become ${firstName} ${lastName}`;
//console.log(fullName);

// Getting strgin charachet
//console.log(firstName[5]);
//console.log(lastName.toUpperCase());
//console.log(fullName.toLocaleUpperCase()); //
//console.log(fullName.toLowerCase());
//console.log(fullName.toLocaleLowerCase()); // ...
//console.log(firstName.indexOf("o"));

//let hobbies = '   coding reading running   ';
//trim method to clean data 
//let results = hobbies.trim();
//console.log(results.lastIndexOf("running")); // Case sensitive

//console.log(results.includes("readings")); // reading == true ans readings = false

// slice method

//let fullName = "wowprogrammer";
//console.log(fullName.slice(0,1)); // excludes last bit of index
// string method does not change the original string value


// string split method 
//let hobbies = '   coding reading running   ';
// sting to array conversion 
//console.log(hobbies.trim().split(' '));



// strings are immutable
//let str='Hello';

//str= str + "Programmers";

//console.log(str);
// Numbers 

let score =50;
//console.log(typeof(score));

//console.log(score/2);//division
//console.log(score%2); // remainder
//let result = score*2+(4*3)-8/2%4;
//console.log(result);//

// Using priority and precedence 
// 1 () => Brackets
// 2 ** => Power brackets
// 3 */ %  =>  From left tot right
//4 + - =>  from left tot right 

//console.log(`My total score is ` + result );    // Dynamic conversin 
// Loosely Typed language


// loose Equality (==) and strict Equality (===) 

//==
//let age = 22;
//console.log(age == `22`); // check for value only
//console.log(age != `22`); // check for value only
// ===
//console.log(age === `22`); // check for values and type 
//console.log(age !== `22`); // check for values and type



// Type Conversion

//let stringType = "54";

//console.log(typeof(stringType));

// Number Method 
//let NumberType = Number(stringType);

//console.log(NumberType,typeof(NumberType));

// Imp note

//let NumberType = "54";

//console.log(typeof NumberType)

// Boolean Method

//let  age = 32;
//let BooleanValueOfAge = Boolean(age); // empty string and 0 is false in boolean 


//console.log(`Boolean value of age is --> `+BooleanValueOfAge);

let dishes =["Biriyani","Chat",'Parathy'];
//console.log(dishes[3]);// --> OutofBound == undefined

//dishes[0] = "Karahi Paneer"
//console.log(dishes);

//console.log(dishes.join(''));
//console.log(dishes.indexOf("Biriyani"));

// let newdishes = ["sweet-dishes","Pani-Puri"];
//console.log(dishes.concat(newdishes));
// let updatedDishes = dishes.concat(newdishes);
// console.log(updatedDishes.length);

// console.log(updatedDishes.push("bhally")); // return value is new length of the array

//console.log(updatedDishes);
//console.log(updatedDishes.pop());

// let booleanType= true;
// let stringType= "true";

// method returns boolean value

// let email = "divyanshsharma285@gmail.com";

// let booleanValue = email.includes("@");

// console.log(booleanValue);


let status = "low";

console.log(status == "low"); 

// > < ,>= , <= , 