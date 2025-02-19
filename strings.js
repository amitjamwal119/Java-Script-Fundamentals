// Strings working
// let car = "BMW";
// console.log(car);

// console.log(`His name is "John"`);        // to write double quotes inside string sentence , we have to use backticks ``

// let s = "whaatttttt" ;
// console.log(s.length);                      // variable_name.length is used to find length of the string here length is 10

// console.log("Check Your" , "facts", "before speaking");

// let quote = "Check your \"Pocket\" before spending";     //use backslash (\) before writing double quotes string in variable value 
// console.log(quote);

// console.log("hel"+"lo");                             // String Concatenation -- output - hello


//String methods
//These methods produces new strings without changing original one

// let text = "Hello";
// console.log(text.charAt(0));                            // charAt() returns character index defined in charAt()

// let username = "John Doe" ;                              //same like charAt
// console.log(username.at(3));


// let user = "akki" ;                                           //same like charAt
// console.log(user[3]);                                        //same like charAt


// charCodeAt() : return UTF-16 code of indexed item 

// let entity = "Hello";
// console.log(entity.charCodeAt(3));                        //Utf-16 code of i is output - 108


// Now work on slice , substring -- (start , end) and sustr(start, length) 
// you can work in both +ve and -ve values in which +ve start from beginning of code and -ve from end point 


// string slicing part

// let fruit = "banana-apple";
// console.log(fruit.slice(7,12));

// variable.slice(startingpt,endpt) is used to get specific string from sentence here output is apple
//we can also write starting point to get whole string after that

// let fruits = "Apple, Banana, Kiwi";                     //it counts from end output - Banana, Kiwi
// console.log(fruits.slice());

// substring 
// let str = "Apple, Banana, Kiwi";
// console.log(str.substring(-7,9));
 

// Uppercase and Lowercase operations
//For Uppercase :
// let text1 = "lionking";
// console.log(text1.toUpperCase());

// let text2 = "LINKINPARK";
// console.log(text2.toLowerCase());


//concat() to join strings
// let txt1 = "Rollce";
// let txt2 = "Royace";
// console.log(txt1.concat(" ", txt2));


//trim() removes whitespace
// let naam1 = "   Hello World    ";
// console.log(naam1.trim());


//trimStart() removes whitespace from beginning of string
// let naam2 = "       Hey    Mama ";
// console.log(naam2.trimStart());


//trimEnd() removes whitespace from end of string
// let naam3 = "   Hello World    ";
// console.log(naam3.trimEnd());
 
// length property returns the length of a string
// let su = "Ambessedor";
// console.log("length fo Ambessedor:", su.length)


