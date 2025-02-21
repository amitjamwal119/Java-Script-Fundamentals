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
// Output Type	Array (even if one element matches)

// e.g 1:----------------------------------------------
// const numbers =[11,22,33]
// const newarray = numbers.map(x => console.log(x*x));


// e.g 2:----------------------------------------------
//  const data = 
// [{name:"Abhi" , age:20 , gender:"male"},
//     {name:"Akki" , age:21 , gender:"male"},
//     {name:"Kusu" , age:18 , gender:"female"},
//     {name:"Rani" , age:20 , gender:"female"}
//     ]
    
//     const newdata = data.map(para => para.age < 21);
//     console.log(newdata);

// Output: [ true, false, true, true ]

// 👀condition : To check gender is female or not------------
// These conditions are not ideal for map we must use filter instead
// const newdata = data.map(para => para.gender === "female");
// console.log(newdata);
    
// filter()------------------------------------------------------------
// Creates a new array with elements that pass a condition.
// Returns	An array of all matching elements.
// When you need all matching elements
// eg. 1:

// const numbers =[11,22,33]
// const newarray = numbers.filter(x => console.log(x === 11));

// output :
// true
//false
//false

// eg. 2: To check is number in array even or not---------------
// const numbers =[1,2,3]
// const newarray = numbers.filter(x => console.log("Even number in array:" , x % 2 === 0));

// Output:
// Even number in array: false
// Even number in array: true
// Even number in array: false

// eg. 3: To print odd number from array-------------
// const numbers =[1,2,3]
// const newarray = numbers.filter(x => x % 3 === 0);

// console.log(newarray)

// Output: [ 3 ]

// e.g. 4: To find candidates only with gender female---------

// const data = 
// [{name:"Abhi" , age:20 , gender:"male"},
// {name:"Akki" , age:21 , gender:"male"},
// {name:"Kusu" , age:18 , gender:"female"},
// {name:"Rani" , age:20 , gender:"female"}
// ]

// const newdata = data.filter(para => para.gender === "female");
// console.log(newdata);

// Output: 
// [
//     { name: 'Kusu', age: 18, gender: 'female' },
//     { name: 'Rani', age: 20, gender: 'female' }
//   ]

// 👀Condition : To get candidate with age = 21-----

// const newdata = data.filter(para => para.age === 21);
// console.log(newdata);

// Output : [ { name: 'Akki', age: 21, gender: 'male' } ]

// find() ----------------------------------------------------------
// Returns The first matching element.
// Output Single element or undefined.
// Used When you need only the first match

// eg.1 
// const numbers =[1,2,3,2]
// const newarray = numbers.find(x => x > 1 );

// console.log(newarray)

// Output: 2

// 

// e.g.2 to find user with age = 20
// This will return first occurence in array

// const users = 
// [{name:"Abhi" , age:20 , gender:"male"},
// {name:"Akki" , age:21 , gender:"male"},
// {name:"Kusu" , age:18 , gender:"female"},
// {name:"Rani" , age:20 , gender:"female"}
// ]

// const newdata = users.find(para => para.age === 20);
// console.log(newdata);

// Output: 
// { name: 'Abhi', age: 20, gender: 'male' }