// ECMAScript2015 aka -- ES6
// ECMAScript 2015 was the second major revision to JavaScript.

// Important topics of ES6
// spread operator
// destructuring
// map , for each -- also difference
// filter

// ---------------------------------------------------------------------------------------------
//1. Spread(...) Operator :--------
//It is used to join arrays
// It breakes brackets and also removes commas
// It modifies and assigns new value to old key

// let languages = ["java-script" , "CSS" , "HTML"]
// let frameworks = ["MongoDB" , "Express" , "React" , "Node"]

// console.log("Programmer essentials:",...languages,...frameworks); 
//Output : Programmer essentials: java-script CSS HTML MongoDB Express React Node

// ----------------------------------------------------------------------------------------------------
// 2. Rest Parameter
//The rest parameter (...) allows a function to treat number of arguments as an array as single argument

// function myfxn(...params) {
// console.log("output using single parameter :" ,params);
// }

// myfxn(1,2,3,4,5);

// Output : output using single parameter : [ 1, 2, 3, 4, 5 ]



// ---------------------------------------------------------------------------------------------------
//3. Destructuring element :--------
// It allows to extract values from arrays and objects and then assign them to variables
//{} - used for object destructuring , [] - used for array destructuring
//In array and objects we are trying to add new values/properties

// e.g 1 : To swap values of two variables :--
// let a = 1 ;
// let b = 2 ;

// [a,b] = [b,a] ;

// console.log(a);         //output : 2
// console.log(b);         //output : 1

// ----------------------------------------------------------

// e.g 2 : To swap values in array using their index  --------
// let colors = ["red" , "green" , "blue" , "orange"];

// [colors[0],colors[3]] = [colors[3],colors[0]];

// console.log(colors);                                //output : [ 'orange', 'green', 'blue', 'red' ]

// --------------------------------------------------------------------------

// e.g 3 : To assign array elements to variables    ---------
// let colors = ["red" , "green" , "blue" , "orange"];

// let [firstcolor, secondcolor , thirdcolor] = colors;

// console.log(firstcolor);                    //output :red
// console.log(secondcolor);                   //output :green
// console.log(thirdcolor);                    //output :blue

// ----------------------------------------------------------------

// e.g 4: To get properties from object-------- wait
// let details1 = {
//     name : "Amit" ,
//     age : 23 ,
//     height : 6.3
// }

// let {age} = details ;
// console.log({age} = details );

// Extract values from variables 
// const details1 = {
//     naam : "Amit" ,
//     age : 23 ,
//     job : "developer",
// }

// const details2 = {
//     naam : "Akki" ,
//     age : 24 , 
// }

// const {naam , age , job ="professor"} = details2; //object 2 doesen't has job variable so we can assign it 
// console.log(naam);
// console.log(age);
// console.log(job);

// --------------------------------------------------------------------

// //e.g  5: Removing element from array using destructuring

// const originalObject = { 
//     a: 1,
//     b: 2, 
//     c: 3
//  };
// const { b, ...newObject } = originalObject;
// console.log(newObject);                     // Output: { a: 1, c: 3 }

// ---------------------------------------------------------------------------------

//e.g 6: Destructure in function parameters
// const car = {
//     brand : "BMW",
//     color : "Black",
//     model : "m"                                      //watch Brocode last part
// }

// function nam({brand , color , model}) {
//     console.log(`brand: ${brand}`);
//     console.log(`color: ${color}`);
//     console.log(`model: ${model}`);

// }

// nam(car);

// --------------------------------------------------------------------------------------

