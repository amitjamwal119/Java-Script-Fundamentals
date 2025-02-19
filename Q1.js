//Even numbers are the numbers divisible by 2 i.e - 2,4,6,8,10,12,14
//odd numbers are not divisible by 2 i.e - 1,3,5,7,9,11,13
//prime numbers are numbers greater than 1 which are either divisible by themeslf or 1
//only 2 is even prime number and rest are odd prime e.g - 2,3,5,7,11,13,17,19

//Odd part
// num = 3 ;
// if (num%2 !== 0){
//     console.log("Number is odd", num,"is not divisible by 2");
// }
// else{
//     console.log("Number is even"+ num +"is divisible by 2");
// }



//Even Part
// num = 3 ;
// if (num%2 == 0){
//     console.log("Number is Even",num,"is divisible by 2");
// }
// else{
//     console.log("Number is odd",num,"is not divisible by 2");
// }


//prime part
// let num = 100;
// function prime(para){
//     if(num<=1) return false;

//     for(let i = 2; i < num; i++){
//         if(num%i ==0){
//             return false;
//         }
//         return true;
//     }
// }

// if(prime(num) == false){
//     console.log("Not a prime number");        
// }
// else{
//     console.log("is a prime number");            
// }


// to check prime numbers between values


// for (let i = 0; i <= 10; i++) {
//    if (i % 2 !== 0 && i % 3 !== 0 && i != 1 || i == 2 || i == 3) {         //Method 1
     
//     //Condition for prime
//      console.log(i);
//    }
//  }

// for (let i = 0; i <= 10; i++) {

//    if(i>1){
//       if (i % 2 !== 0 && i % 3 !== 0 || i == 2 || i == 3) {             //Method 2
//          //Condition for prime
//          console.log(i);
//        }
//    }
//  }