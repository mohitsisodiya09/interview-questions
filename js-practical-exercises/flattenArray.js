/* 
Flat nested array 
input: [1,[2,[3,[4]],5]] 
output: [1,2.3,4,5] 
*/

// Using built-in flat() method
let input = [1, [2, [3, [4]], 5]];
console.log(input.flat(Infinity));

// Using recursion and array methods
function flatArray(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatArray(val) : val);
  }, []);
}

// Using recursion and for-of loop
function flatArray(arr) {
  let retArr = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
      retArr = retArr.concat(flatArray(i));
    } else {
      retArr.push(i);
    }
  }

  return retArr;
}

let a = flatArray(input);
console.log("Flatten Array: ", a);
