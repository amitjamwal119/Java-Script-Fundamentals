// Local scope start

// var a = 20;

// function myfxn(){
//   var a = 30;
//     console.log("This is local element its exixtance is within function block:" ,a);
// }

// console.log("This is global element:" ,a);
// myfxn();


let a = 20;
    a = 30; // this is reassigning
// let a = 30; This is redeclearing which is not possible in let in same scope


function myfxn(){
    let a = 10;
    a = 11;
    a = 7;
// let a = 30; This is redeclearing which is not possible in let in same scope
    
     console.log("This is local element its exixtance is within function block:" ,a);
 }

console.log("This is global element:" ,a);
myfxn();
