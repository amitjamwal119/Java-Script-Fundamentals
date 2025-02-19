// arithmatic operations start
var a = 3;
var b = 5;

console.log("a","+","b :", a+b);
console.log();

console.log("a","-","b :", a-b); 
console.log("b","-","a :", b-a);
console.log();

console.log("a","*","b :", a*b);
console.log(); 

console.log("a","**","2 :", a**2); // here , 3^2 = 9    --raise to the power with number
console.log("a","**","b :", a**b); // here , 3^5 = 243 --raise to the power with variable value
console.log();

console.log("a","/","b :", a/b); // here , 3/5 = 0.6 --division
console.log();

console.log("a","%","b :", a%b); // here , 3%5 = 0.6 --division - remainder
console.log();

console.log("value initialized for increment:" ,a++); // here we will initialize value for increment
console.log("Value after increment","a++:" ,a); // here increment of 3 is 4
console.log();

console.log("direct incremented value:" ,++a); // here we can get incremented value direct no need to print variable after assigning operator  
console.log();

console.log("value initialized for decrement: " ,a--); // here we will initialize value for decrement
console.log("Value after decrement","a-- :", a); // here decrement of 3 is 4
console.log();

console.log("direct decremented value: " ,++a); // here we can get decremented value direct no need to print variable after assigning operator
console.log();

//let's check combo of ops:-
var combo = 10+3/5**7;
console.log("Combination of multiple values in single variables: ",combo);


// converting numbers into another formats and doing operations
console.log("other type to number(-) :", "10"-3);
console.log("other type to number (+):", "10"+3); //whattttt - this is string concatenation
console.log("other type to number (/):", "10"/3);
console.log("other type to number (%):", "10"%3);
console.log("other type to number (*):", "10"*3);

// arithmatic operations end
