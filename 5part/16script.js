'use strict';


// new RegExp('pattern', 'flags');

// /pattern/f


// const ans = prompt('Введите ваше имя');

// const reg = /\d/ig; // 

// console.log(ans.match(reg));


const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i)); //R2D2

// \D not digits
// \W  not words 


// \d digits
// \w words
// \s spaces
// i // 
// g //global 
// m // 


// console.log(ans.search(reg)); // ищет первое совпадение

// console.log(ans.match(reg));// отримуємо масив в якій є входження 


// const pass = prompt('password');

// console.log(pass.replace(/./g, "*")); // глобально перестанавлює зірки 

// console.log('12-34-56'.replace(/-/g, ':'));

