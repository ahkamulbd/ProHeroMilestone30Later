// function declaration
function add(first, second) {
    const total = first + second;
    return total;
}

// function expression
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}
const result = add1(10, 20);
//console.log(result);

const add2 = function (first, second) {
    const total = first + second;
    return total;
}
const result2 = add1(30, 20);
//console.log(result2);

const add3 = function (first, second) {
    return first + second;
}
const result3 = add3(40, 50);
//console.log(result3);

const add4 = (first, second) => first + second;

const result4 = add4(50, 60);
console.log(result4);
