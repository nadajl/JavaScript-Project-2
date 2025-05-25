/*** String Manipulation Functions:  */
// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 2. Count Characters
function countCharacters(str) {
  return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
/**Array Functions: */
// 1. Find Maximum and Minimum
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

// 2. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// 3. Filter Array
function filterArray(arr, condition) {
  return arr.filter(condition);
}
// Example usage: filterArray([1, 2, 3, 4], num => num > 2);

/** Mathematical Functions: */
// 1. Factorial
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// 2. Prime Number Check
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 3. Fibonacci Sequence
function fibonacci(n) {
  const sequence = [];
  let [a, b] = [0, 1];
  while (sequence.length < n) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }
  return sequence;
}
