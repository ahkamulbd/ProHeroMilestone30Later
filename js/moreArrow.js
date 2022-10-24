const add = (first, second) => first + second;
const getFullName = (first, last) => first + ' ' + last;
const multiply = (a, b) => a * b;
const addAll = (a, b, c, d, e) => a + b + c + d + e;

// No parameter arrow function
const getPie = () => 3.14;

// one parameter arrow function
const doubleIt = (num) => num * 2;

// one parameter arrow function simple version
const fiveTimes = num => num * 5;

// multiline arrow function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;

    return result;
}

const finalResult = doMath(5, 10, 12);
console.log(finalResult);