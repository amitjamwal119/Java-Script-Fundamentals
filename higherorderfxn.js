// Higher-Order Functions in JavaScript ------------------
// A higher-order function is a function that does at least one of the following:

//1. Takes another function as an argument
//2. Returns a function as its result
//3. Higher-order functions help make JavaScript code more reusable and concise.

// Callback function-------------------------------------------------------------------------

// e.g 1 :
// function greet (name,callback){
//     console.log("hello " + name + " Brother");
//     callback()
// }

// function sayBye(){
//         console.log("Goodbye")
//     }

// greet("abhi", sayBye)

//e.g 2 :
// Here we can use templete literal to add parameter in string

// function greet (name,callback) {
//     console.log(`Hello ${name} Brother`)
//     callback()
// }

// function say () {
//     console.log("Good Morning")
// }

// greet('Shubh',say)


// Built In High Order Function ---------------------------------------------------------------------
// 1. forEach() – Iterating Over an Array
//  Executes a function on each element of an array but does NOT return a new array.
//  Use it when you just want to perform an action (like logging or modifying something).

// Example:
// Here Annonymous function is used & x is parameter
// numbers =[11,22,33]
// numbers.forEach(x => console.log(x));


//  map() – Transforms Each Element--------------------------------------------------------------------------
//  Creates a new array by applying a function to each element.
//  Use it when you want to modify each item and get a new array.

// const numbers =[11,22,33]
// const newarray = numbers.map(x => console.log(x*x));

// 
















;
