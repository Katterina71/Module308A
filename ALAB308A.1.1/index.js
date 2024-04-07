
// Part 1: Stack Overflow

// let counter = 1;

// function increments(counter) {
//   counter++;
//   console.log(counter);
//   increments(counter);
// } 

// try {
// increments(counter)
// }
// catch(e) {
//   console.log(`${e} catch`);
// }

// 9071 RangeError: Maximum call stack size exceeded 

//EXAMPLE


// const n= 50000;
// const factorial = (n) => {
//   if (n === 0) return 1; // The base case, to stop recursion
//   return n * factorial(n - 1); // The recursive call
// }

// function fibo(x) {
//   debugger
//   if (x < 2) return x;
//   return x + fibo(x - 1);
// }

// console.log(fibo(4));

//  const trampoline = (f, ...args) => {
  // debugger;
//   let result = f(...args);
//   while (typeof result === "function") {
//     result = result();
//   }
//   return result;
// }

// console.log(trampoline(facto(10000)))

// printNumbers 

// function printNumbers(index, arr) {
//   // debugger;
//   if (index === arr.length) return
//   console.log(arr[index]);
//   printNumbers(index+1, arr);
// }

// printNumbers(0, [1,2,3,4]);

// function fib(n) {
//   debugger;
//   if (n===2 || n ===1) return 1;
//   return fib(n-1)+fib(n-2);
// } 

// console.log(fib(6));

//Part 2 

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
// Once your recursive function is complete, trampoline it.

const deeplyNestedArray = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// const deeplyNestedArray = [1, [2, [3, 4, [5, 6]], 7], 8, [9, 10]];
// const deeplyNestedArray = [0, 1, [2, [3, [4, 5]]]];
// const deeplyNestedArray = [0, [1, 2]];

// function flattenArray(arr) {
//   let flattened = [];
//   function flattenHelper(arr) {
//     debugger;
//     arr.forEach((element) => {
//       if (Array.isArray(element)) {
//         flattenHelper(element)
//       }
//       else {
//         flattened.push(element);
//       }
//     })
//   }
//   flattenHelper(arr);
//   return flattened;
// }

// console.log(flattenArray(deeplyNestedArray));



// const trampoline = (f, ...args) => {
//   let result = f(...args);
//   while (typeof result === "function") {
//     result = result();
//   }
//   return result;
// }

// console.log(trampoline(flattenArray(arr)));

//Part 3

// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
// Once complete, use the alert() method to alert the user that the calculation is finished.

const container = document.getElementById('container');


function addParagraphs(n, inc=1) {
  
  function addText (n, inc) {

    const p = document.createElement('p'); 
    p.textContent = inc;
    container.appendChild(p); 

    if (inc < n) {
      setTimeout(() => addText (n, inc+1), 0) 
    } else { window.alert("The calculation is finished!")}
   
  }

  addText(n, inc);
}

const trampoline = (f, ...args) => {
  let result = f(...args);
  while (typeof result === "function") {
    result = result();
  }
  return result;
}


trampoline(addParagraphs(10000, inc = 1));
