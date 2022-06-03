'use strict';

const arr = ['Alex', 'Ann', 'Alex', 'Ivan', 'Oleg'];

const set = new Set(arr);

set.add('Ivan').add('Oleg');

// console.log(set);

// set.delete(value);
// set.has(value);
// set.clear();
// set.size;
// for(let value of set){
//     console.log(set);
// }
// set.forEach((value, valueAgain, set) => {
//     console.log(value,valueAgain, set);

// });

// console.log(set.values());

// console.log(set.keys());

console.log(set.entries());

function unique(arr){
    return Array.from(new Set(arr));
}

console.log(unique(set));