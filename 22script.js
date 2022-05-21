'use strict';

const str = 'test';
const arr = [1,2,4];

// console.log(str.length());  

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str);

let fruit = "Some fruit";

// console.log(fruit[fruit.indexOf("f")]);

for(let i = 0; i < fruit.indexOf("f"); i++){
    console.log(fruit[i]);
}


const logg = "Hello world";

console.log(logg.slice(6,11)); //вырезает строкой

console.log(logg.slice(logg.indexOf("w"), logg.length)); // tru metod sam pridumal

console.log(logg.substring(6,11)); // вырезает символами

const num = 12.2;

console.log(Math.round(num));

const test = "12.2px";