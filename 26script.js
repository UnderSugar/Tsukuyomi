"use strict";

function first(){
    // Do something
    setTimeout(function(){
        console.log(1);
    },500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) { 
    console.log(`Я учу: ${lang}`);
    callback(); // место для коллбек функции
}
// learnJS('JavaScript', function(){
//     console.log('Я прошел этот урок'); // Это же коллбек функция УАВ
// });
function done() { // просто рандом функция которую можно использовать в другой функции в которой есть место под колбек
    console.log('Я прошел этот урок');
}
learnJS('JavaScript',done); // закинул функцию done (но без её вызова)