/* 
Write a function that takes n as parameter and prints each number from 1 to n (comma separated).

For each multiple of 3, print "Fizz" instead of the number.
For each multiple of 5, print "Buzz" instead of the number.
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

Example input: 16
Example output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16 
*/

// Using if-else block
function fizzBuzzPrinter(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 == 0) {
      arr.push("Fizz");
    } else if (i % 5 == 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  console.log(arr.join(", "));
}

// Using ternary operator conditional chaining
function fizzBuzzPrinter(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 5 === 0
        ? "Buzz"
        : i % 3 === 0
        ? "Fizz"
        : i
    );
  }
  console.log(arr.join(", "));
}

fizzBuzzPrinter(16);
