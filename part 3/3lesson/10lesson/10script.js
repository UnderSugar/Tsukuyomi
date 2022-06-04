'use strict';

// const bigInt = 231213213123812388381881n;
const sameBigInt = BigInt(231213213123812388381881);

console.log(typeof(bigInt));

// console.log(5n + 1); // not working

// console.log(Math.round(5n)); // not working too

console.log(1n + 2n);
console.log(5n / 2n); //округляет до целых

let bigint = 1n;

let number= 2;
console.log(bigint + BigInt(number));

console.log(Number(bigint) + number);
