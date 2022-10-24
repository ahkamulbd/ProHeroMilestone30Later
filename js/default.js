//console.log('Default File');

// Add Function

// function add(first, second = 0) {
//     const total = first + second;
//     return total;
// }

// const result = add(10);
// console.log(result);

// Full Name Function 

function fullName(first, last = 'Chowdhury') {
    const name = first + ' ' + last;
    return name;
}

const name = fullName('Golam');
console.log(name);