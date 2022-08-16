'use strict';

// function showThis(a,b) {
//    // console.log(this); // ссылается на глобальный обьект window 
//                         // при строгом режиме

//     function sum(){
//        // console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4,5);

// const obj = { // 2
//     a: 20,
//     b: 15,
//     sum: function(){
//        function shout() {
//         console.log(this);
//        }
//        shout();
//     }
// };
// obj.sum();

// function User(name,id){
//     this.name = name;
//     this.id = id;
//     this.human = true;

//     this.hello = function(){
//         console.log('Hello!', + this.name);
//     };
// }

// let ivan = new User('Ivan', 23);

// function sayName(surname) { // 4
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name:'John'
// };


// sayName.call(user, ' Smith');
// sayName.apply(user, [' Smith']);

// function count(num){
//     return this*num;
// }

// const double  = count.bind(2); //биндит this 
// console.log(double(3));
// console.log(double(13));

//1) Обычная функци: this = windows, но если будет use strcit - underfind
//2) Контекст вызова обьектов это сам обьект
//3) this  в конструкторах и классах - это новый экземпляр обьекта
//4) ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() { // (e) =>
    // console.log(this);
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function (){
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();

const double = a =>  a * 2;

console.log(double(4));