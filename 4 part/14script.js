'use strict';


function User(name,id) { //необходимы для новых однотипных компонентов, везде где необходима шаблонизация
    
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`My name is ${this.name}, my id is ${this.id}`);
    };
}

User.prototype.exit = function (){
    console.log(`User ${this.name} left`);
};



const ivan = new User('Ivan', '28');
const alex = new User('Alex', '21');


ivan.exit();

ivan.hello();
alex.hello();