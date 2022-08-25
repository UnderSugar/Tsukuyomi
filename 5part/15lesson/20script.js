'use strict';

class User{

    constructor(name,age) {
        this.name = name;
        this._age = age;
    }


    // #surname = 'Bibloivanenko';

   say() {
        // console.log(`My name is ${this.name} ${this.#surname} age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age){
       
        if(typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        }else {
            console.log('Недопустимое значение!');
        }
    }
} 

const ivan = new User('Andrew', 27);

console.log(ivan.surname);
// console.log(ivan._age);
// ivan._age = 99;
// console.log(ivan._age);
ivan.say();
