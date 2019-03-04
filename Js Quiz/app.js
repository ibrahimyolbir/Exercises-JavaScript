function max(arr) {
    return arr.reduce((acc, val) => {
 
         acc = (acc === undefined || val > acc) ? val : acc
        return acc;
    }, []);
}

console.log(max([1, 2, 3]));
console.log(max([9, 5, 33]));

 
function squareSum(arr1) {
    return arr1.reduce((acc, val) => {
        return acc + val;
    }, 0)
}

console.log(squareSum([1, 2, 3]));
console.log(squareSum([5, 7, 2]));
