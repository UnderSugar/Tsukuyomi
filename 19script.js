'use strict';

// function showFirstMessage(){
//     console.log("Hello world!");
// }

// showFirstMessage();

let num = 20;
///Function declaration
function showFirstMessage(text){ // rest оператор   text
    console.log(text);
    let num = 10; 
    console.log(num); //10
}

showFirstMessage("Hello world!");
console.log(num); //20

// function calc(a,b) { 
//     return(a + b);
// }

// console.log(calc(4,3));
// console.log(calc(4,6));
// console.log(calc(7,8));

function ret(){ 
    let num = 50;
    return num;
}

const anotherNum = ret();

console.log(anotherNum);

const logger = function(){ //function expression 
    console.log("Hello");
};

logger();


const calc = (a, b) => {return a + b}; 
const lal = (a, b) => a - b;
console.log(lal(7,8));

const smalama = (v, c) => {
    console.log(v, c);
    return v + c;
};

console.log(smalama(1,2));