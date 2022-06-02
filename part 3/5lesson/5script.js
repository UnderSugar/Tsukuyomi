'use strict';


// let id = Symbol("id");
// const obj = {
//     'name': 'Test',
//     [id]: 1,
//     getId: function() {
//         return this [id];
//     }
// };

// // let id = Symbol("id");

// // obj[id] = 1;

// console.log(obj[Object.getOwnPropertySymbols(obj)][0]); // поменять значение символа

// for( let value in obj) console.log(value);


const myAwsomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123
};

//Сторонний код библиотеки

myAwsomeDB.id = '32132132131';

console.log(myAwsomeDB[Symbol.for('id')]);
console.log(myAwsomeDB);