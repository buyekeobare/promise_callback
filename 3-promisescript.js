/* 
 * You can handle the resolved value or the error using the .then() and .catch() methods. 
 * These methods return Promises, allowing you to chain multiple asynchronous operations in sequence.
 * This enhances code readability and provides a streamlined way to handle success and failure.
 */

// Creating a new Promise object and assigning it to the variable myPromise
const myPromise = new Promise((resolve, reject) => {

  // Simulating a condition with a boolean variable 'success'
  let success = true; 

  // If the condition is true, call resolve to mark the promise as fulfilled
  if (success) { 
    resolve("The operation was successful!");
  } else { 
    // If the condition is false, call reject to mark the promise as rejected
    reject("The operation failed!");
  } 
});

// Execute the promise and handle both resolved and rejected states
myPromise
  .then((message) => {
    // Handle the resolved state of the promise
    console.log(message); // Logs: "The operation was successful!"
  })
  .catch((error) => {
    // Handle the rejected state of the promise
    console.error(error); // Logs: "The operation failed!"
  });
