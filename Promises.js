// Promises :------------------------------------------------------------------------------------------------------------

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise can have 3 states:
//1.  Pending – Initial state, before the result is available.
//2.  Fulfilled – The operation completed successfully.
//3.  Rejected – The operation failed.

// e.g-1 :--------------------------------------------------------------------------------------
// let prom = new Promise ((resolve , reject) => {
//     a = 1+1
//     if(a == 2) {
//         resolve('Success')
//     }
//     else {
//         reject('error')
//     }
// })

// prom.then((message) => {
//     console.log('This is Then ' + message)
// }).catch((message) => {
//     console.log('This is catch ' + message)
// })

// Output : This is Then Success


// e.g-2 :--------------------------------------------------------------------------------------------
// let car1 = new Promise ((resolve , reject) => {
//     resolve('Success car1')
// })
// let car2 = new Promise ((resolve , reject) => {
//     resolve('Success car2')
// })
// let car3 = new Promise ((resolve , reject) => {
//     resolve('Success car3')
// })

// Promise.all([car1,car2,car3]) .then((message) => { console.log("Cars:",message)})

// Output :
// Cars: [ 'Success car1', 'Success car2', 'Success car3' ]

// e.g-3 :---------------------------------------------------------------------------------------------
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = true; // Change to false to see the reject case
//       if (success) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("Error fetching data!");
//       }
//     }, 2000); // Simulating a delay of 2 seconds
//   });
// }

// 

// fetchData()
//   .then((message) => {
//     console.log("Success:", message);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// Explanation
// fetchData() returns a Promise that either resolves after 2 seconds (if success is true) or rejects.
// .then() executes when the promise resolves successfully.
// .catch() executes if the promise is rejected.
// Expected Output (After 2 Seconds)


// Success: Data fetched successfully!
// or if success = false:
// Error: Error fetching data!

// async() - await() ------------------------------------------------------------------------------------------------------------------------
// An async function always returns a Promise. If the function returns a value, it is automatically wrapped in a Promise.
// The await keyword is used inside an async function to wait for a Promise to resolve before continuing.

// e.g-1 :----------------------------------------------------------------------------------------------------------
// function fetchdata() {
//     return new Promise (resolve => {
//       setTimeout(() => resolve("Here I am !"),3000)   
//     })
// }

// async function data() {
//       console.log('Wait for me')
//   let result = await fetchdata(); 
//   console.log(result);
// } 

// data();

// Output :
// Wait for me
// Here I am !


// setTimeout() :---------------------------------------------------------------------------------------------------------

// console.log('1. start')

// setTimeout(() =>{
//     console.log('2. mid')
// },2000)

// console.log('3.end')

// Output : 
// 1. start
// 3.end
// 2. mid


//setInterval() :----------------------------------------------------------------------------------------------------------
//  Runs a function repeatedly at a fixed time interval.
// If you want to cancel a setTimeout(), use clearTimeout().

//e.g-1 -----------------------------------------------
// let count = 1;

// setInterval(() => {
//     console.log(`This runs every 2 seconds. Count: ${count}`);
//     count++;
// }, 2000);

//Output : 
// This runs every 2 seconds. Count: 1
// This runs every 2 seconds. Count: 2
// This runs every 2 seconds. Count: 3
// ...


// e.g-2 ----------------------------------------------
// count = 1;

// const stop = setInterval (() => {
//     console.log(`Hello, ${count}`);
//     count++
    
//     if (count == 5){
//        clearInterval(stop)
//         console.log("Execution stopped")
//     }
// },1000)

// Output :
// Hello, 1
// Hello, 2
// Hello, 3
// Hello, 4
// Execution stopped



// try - catch error handling ----------------------------------------------------------------------------------------------------
// To handle error , try catch must be inside timer block otherwise it will directly throw error without handling it

// e.g-1 :-------------------------------------------------------
// setTimeout (() => {
    
//     try{
//             consolelog("Switch on system")
//     }
//     catch (Error){
//         console.log("Error")
//     }
// },1000)

// setTimeout(() => {
//     console.log("Starting windows")
    
//     },2000)

// setTimeout(() => {
//     console.log("Window Started Successfully")
//     },5000)


// Output:
// Error
// Starting windows
// Window Started Successfully


// e.g-2: ------------------------------------------------------------------
// function data (){
//     return new Promise ((resolve,reject) => {
//         setTimeout(() =>{ resolve ("Here it is!!!");
//         },3000)
//     })
// }

// async function handledata (){
//     try{
//         console.log("Something is coming....")
//         let outcome = await data()
//         consolelog(outcome)
//     }
//     catch (error){
//         console.log(error)
//     }
// }

// handledata()

// Output :
// Something is coming....
// ERROR!
// ReferenceError: consolelog is not defined
//     at handledata (/tmp/yAOebf6vG9/main.js:12:9)
