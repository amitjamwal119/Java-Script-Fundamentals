// Promises
// Example: Simulating a Delayed Task

// setTimeout() :





//setInterval() :
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

// Using the promise

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

