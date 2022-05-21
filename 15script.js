'use strict';

//// Оператор И //////////////////////////////////

// const hamburger = 5; // true  
// const fries = 0; // false 


// if(hamburger && fries){
//     console.log('я полностью сыт!');
// }
// if(hamburger || fries) {
//     console.log('ну хотя бы покушал...');
// }

// console.log(hamburger && fries);

// const hamburger = 3; // true
// const fries = 1; // true  
// const cola = 0; // false 


// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'aeasjksfds');
// console.log(NaN && 10);
// console.log(Infinity && NaN);
// console.log(Infinity && 1);
// console.log(1 && Infinity);

// console.log(Infinity && -Infinity);
// console.log(-Infinity && Infinity);

// if(hamburger === 3 && cola === 1 && fries){
//     console.log('Все сыты!');
// }else {
//     console.log('Мы уходим');
// }



//// Оператор ИЛИ ////////////// 

const hamburger = 3; // true
const fries = 1; // true  
const cola = 0; // false 

if(hamburger || cola === 1 || fries){
    console.log('Все сыты!');
}else {
    console.log('Мы уходим');
}