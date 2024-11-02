/*
* To create a Promise, you use the new Promise constructor, 
* which takes a function with two parameters: resolve and reject. 
* The resolve function is called when the asynchronous operation completes successfully, 
* and the reject function is called when it fails.
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