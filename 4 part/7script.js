'use strict';


// const now = new Date(1659453324509);
const now = new Date('2020-05-01');

// new Date.parse('2020-05-01');
console.log(now.setHours(40));
console.log(now);

// console.log(now.getMonth());
// console.log(now.getFullYear());
// console.log(now.getDate());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// console.log(now);


let start = new Date();

for(let i = 0; i < 100000; i ++){
    let some = i ** 3;
}

let end = new Date();

// console.log(start);
console.log(end - start);