const score = 500

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 23.545
console.log(otherNumber.toPrecision(4));

const hundreds =1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++ Maths ++++++++++

// console.log(Math);
// console.log(Math.abs(-56));
// console.log(Math.round(100.56));
// console.log(Math.ceil(100.567));
// console.log(Math.floor(4.6));

console.log(Math.random());
console.log(Math.random()*10);

console.log(Math.floor(Math.random()*10)+1);
const min = 10
const max = 20

console.log(Math.random() * (max- min + 1))