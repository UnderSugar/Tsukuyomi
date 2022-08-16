'use strict';


// filter out

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function (name){
//     return name.length < 5; 
// });

// console.log(shortNames);


// map 

// const answers = ['IvAn','AnnA', 'HellO'];

// const result = answers.map(item =>  item.toLowerCase()); 

// console.log(result);


// every / some 

// const massive = [4, 5, 7];

// console.log(massive.some(item => typeof(item) === 'number')); // если имееться 1 из типов
// console.log(massive.every(item => typeof(item) === 'number')); // если все одинаковые значения

//reduce

// const arr = [4,5,1,3,2,6];
//             // 3* 4
//             // 4 5 
//             // 9 1
//             // 10 3

// const res = arr.reduce((sum, current) => sum  + current, 3); //*

// console.log(res);



// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);


const obj =  {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);




