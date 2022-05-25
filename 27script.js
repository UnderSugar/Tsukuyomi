"use strict";

const arr = [12,2,34,14,5];
arr.sort(compare);
console.log(arr);

function compare(a, b) {
    return a - b;
}

// console.log(arr.length);

// arr[99] = 0;
// // arr.pop();
// arr.push(29);
// console.log(arr);
arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

for(let value of arr){ // break and continue methods
    console.log(value);
}

const str = +prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));
