/*
    Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.
*/

const result = (first, second = 7) => first + second;

console.log(result(5));