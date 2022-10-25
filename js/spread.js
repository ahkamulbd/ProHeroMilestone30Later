//console.log('Spread.js File');

const max = Math.max(12, 85, 999, 78);
//console.log(max);

const numbers = [12, 85, 999, 78];
//console.log(...numbers);

const largest = Math.max(...numbers);
//console.log(largest);

// const numbers2 = numbers;
// numbers.push(55);
// numbers2.push(777);
//console.log(numbers);
//console.log(numbers2);

// const numbers2 = [numbers];
// numbers.push(55);
// numbers2.push(777);
// console.log(numbers);
// console.log(numbers2);

// const numbers2 = [...numbers];
// numbers.push(55);
// numbers2.push(777);
// console.log(numbers);
// console.log(numbers2);

const numbers4 = [444, 78, ...numbers, 111];
console.log(numbers4);