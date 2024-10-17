
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15
