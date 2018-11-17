// // Expected result: 120

//  let result = sum(doubleAll(removeNumbersOverX([10, 20, 30, 40, 50], 30)));
//  console.log(removeNumbersOverX([10, 20, 30, 40, 50], 30));
//  console.log(doubleAll(removeNumbersOverX([10, 20, 30, 40, 50], 30)));

//  console.log(result);

// // Return sum of all numbers in arr
// function sum(arr) {
//   return arr.reduce(function(acc, x) {
//     return acc + x;
//   },0);
// }

// // Double all numbers in arr
// function doubleAll(arr) {
//   return arr.map(function(x) {
//    return x * 2;
//   });
// }

// // Remove all numbers in arr that is over x
// function removeNumbersOverX(arr, x) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     let value = arr[i];
//     if (value <= x) {
//       newArray.push(value);
//     }
//   }
//   return newArray;
// }

/* 
 * There is a bug in this code. Fix it!
 * You're allowed to change code here, but don't just remove everything and start from scratch.
 * Make sure you understand why the bug occurs (there may be more than one).
 * Expected result should be:
 * Mean: 5.5
 * Median: 3.5
 * Mode: 4
 */
let arr = [1, 4, 4, 19, 3, 2];
console.log("Mean: " + mean(arr))
console.log("Median: " + median(arr))
console.log("Mode: " + mode(arr));

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}   

function mean(arr) {
    let sum = getSum(arr);
    return sum / arr.length;
}

function median(arr) {
    let temp = arr.slice(0);
    temp.sort(function(a, b) {return a - b});
  if (temp.length % 2 === 0) {
    // Even, we'll get the two numbers in the middle and average them
    return getSum(temp.splice(Math.floor(temp.length / 2) - 1, 2)) / 2;
    
  } else {
    // Odd, we'll return the number in the middle
    return temp[Math.floor(temp.length / 2)];
  }
}

function mode(arr) {
  let countObj = {};
  for (let x of arr) {
    if (x in countObj === false) countObj[x] = 0;
    countObj[x]++;
  }

  let maxCount = 0;
  let maxNumber;
  for (let x in countObj) {
    let count = countObj[x];
    if (count > maxCount) {
      maxCount = count;
      maxNumber = x;
    }
  }
  return parseInt(maxNumber);
}

