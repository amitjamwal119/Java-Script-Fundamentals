// Arrow functions -----------------------------------
// const fxn_name = (Para1,Para2) => expressions ;


// Multiply using arraow ---------------------------------
// const mul = (p1,p2) => p1*p2 ;
// console.log(mul(2,3));


// Add using arrow-----------------------------------------
// const adding = (p1,p2,p3) =>{
//     let result =p1+p2+p3;

//     console.log(`${p1} + ${p2} + ${p3} = ${result}`);
// } 
    
// adding(3,5,7);



// Working with Templete literals ---------------------------------------
// const square = (x) => {
//     console.log(`square of ${x} is:`, x*x)    
// }
// square(3)

//Use of arguments------------------------------------------------------
//arguments keyword only display index of items and their values

// function arrrgg (){
//     console.log(arguments)
// }

// arrrgg(1,2,3,4,5,6)

// Arrow with this keyword--------------------------------------
// Arrow does'nt work inside object with this keyword 
// Here this refers to object 
// const obj = {
//     name : "Abhi",
//     age : 22,
//     simple : function () {
//         console.log('Name is:', this.name)
//     }   
    // arroww : () => {
    //     console.log('Name is:', this.name)
    // }   
// }
// obj.simple()


//Spread operator with arrow fxn-------------------------------
//Spread is used to pass multiple arguments to the parameter
// It works with both simple and arrow function

// Spread with Simple Function -----
// const ar = (...para) =>{
//     console.log(para);
// }
// ar(1,2,3,4,5)

// Spread with arrow Function ----
// function pass(...para){
//     console.log(para)
// }
// pass(1,2,3)



// Hoisting----------------------------------------------------
// Hoisting means to call a function before defining it
// Hoisting is only possible in simple function
// You can only call a function after defining it in 

// greet("Akki")

// function greet(name){
//     console.log("hello", name)
// }