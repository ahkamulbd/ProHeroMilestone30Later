// Object Destructuring:

const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '00000000000000',
    price: 4000
}
// const phone = fish.phone;
// const name = fish.name;
// const price = fish.price;

const { price } = fish;
const { phone } = fish;
const { name } = fish;


// console.log(price);
// console.log(phone);
// console.log(name);

const { age, name1 } = { name1: 'Almas', age: 56, profession: 'fisherman' };

// console.log(age);
// console.log(name1);

/* -----------------
    Array Destructuring
------------------------*/

const [first, another] = [44, 99, 88, 456];
//console.log(first, another);

const [second, third] = ['first', 'second', 'third', 'fourth', 'fifth'];
//console.log(second, third);

const cricketers = ['sakib', 'miraj', 'mushi', 'mash', 'tamim'];
const [King, queen, jack] = cricketers;
//console.log(jack);

function getName() {
    return ['Alim', 'Halim'];
}
const [baba, chacha] = getName();
console.log(baba, chacha);
