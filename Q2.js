//Basic loop 
//It will print till final value defined in loop
// for (let i = 0; i <= 9; i++) {
//     console.log(i);                 //It will print0 to 9
// }

// for (let i = 9; i >= 0; i--) {
//     console.log(i);              //It will print 9 to 0 
// }


//to multiply numbers in array // const element = arr[i]*2;
    // console.log(element);

// const arr=[1,2,3,4,5,6,7];
// for (let i = 0; i <= 6; i++) {
//     console.log(arr[i]*2);       
// }


//wait
// function reverseString(str) {
//     return str.split('').reverse().join(''); 
//   }
  
//   // Example usage:
//   let originalString = "abba";
//   let reversedString = reverseString(originalString);
//   console.log(reversedString); // Output: !dlroW ,olleH
//wait

// let na = "a,b,b,a";                 //string to array
// let change = na.split(",");
// console.log("first change(string to array):", change);


// let secondchange = change.reverse() ;
// console.log("second change(reversed output):", secondchange);      //Reversed Output which is same in our case

// const array = ['Hello', 'world', 'this', 'is', 'JavaScript'];
// const result = array.join(' '); // 'Hello world this is JavaScript'
// console.log(result);


// let thirdchange = secondchange.join('');
// console.log(thirdchange);


// let originalString = "abb";
// let reversedString =  originalString.split('').reverse().join('');   
// console.log(reversedString);


// let originalString = "abb";
function palindrome(para) {                                 //function with initial parameter
  return  para.split('').reverse().join('');                 //convert string to array using .split('') , reverese the string using .reverse , join letters of string using .join 
}

let str = "abba";
console.log(palindrome(str));


if (str == palindrome(str)) {
  console.log("string is palindrome");
}

else{
  console.log("It is not palindrome");
  
}





