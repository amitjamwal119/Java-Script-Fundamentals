// Promises
// Example: Simulating a Delayed Task

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

