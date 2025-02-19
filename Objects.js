4
// Objects are containers which contain more than one values
// objects are collections of key value pairs1
// syntax : vartype varname = {key:value,....}

//In JavaScript, Objects are King.
// If you Understand Objects, you Understand JavaScript.
// Objects are containers for Properties and Methods.

// Properties (variables) are named Values.

// Methods are Functions stored as Properties.

// Properties can be primitive values, functions, or even other objects.

//Simple Example
const car = {
    carname : "Volkswegon",
    modeltype : "Sedan" ,
    modelcolor : "white"
};

console.table(car); //used to get output in the form of table
console.log(car);

//To creater empty object and add property to it
const person = {};

person.firstname = "abhi" ;
person.age = 22 ;

console.table(person);
console.log(person);

//new
// const person = new Object();

// person.firstname = "abhi" ;
// person.age = 22 ;

// console.table(person);


//Objects are non primitive datatype and are mutable 
//Mutable means they can be changed after creation

const banda = {
    name : "Bholu",
    age : 20 ,
    BG : "O+" 
}


//To change value 
const neww = banda ;//here neww is new variable and banda is object
neww.BG = "AB+" ; //neww.variable/property = "changed value"

console.table(banda); // changed blood group O+ to AB+

console.log(neww.BG);

// The syntax for accessing the property of an object is:

// // objectName.property
// let age = person.age;
// or

// //objectName["property"]
// let age = person["age"];
// or

// //objectName[expression]
// let age = person[x];


let wordrobe = {
    color : "brown",
    opening : "handles",
    privacy : "Lock"
}

delete wordrobe.opening; // to delete opening property

console.table(wordrobe);

console.log("Color of wordrobe is " + wordrobe.color); //to print independent property


//Nested Objects    ---- how to print
 const mydevices = {
        myphone :{
            phncolor : "blue",
            price : 12000,
            processor : "snapdragon"
        },

        mylaptop :{
            lapcolor : "black",
            price : 40000 ,
            processor : "i3"
        }
 };  

 console.table(mydevices);
 





