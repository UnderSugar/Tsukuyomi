'use strict';

const user = {
    name: 'Alex',
    surName: 'Smith',
   
    showMyPublicData: function (){
        console.log(`${this.name} ${this.surname}`);
    }
};
// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true });
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));
// Object.defineProperty(user, 'name', {writable: false});
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showMyPublicData',{enumerable: false} );
for(let key in user ) console.log(key);



// Object.defineProperties(user, {
//     name: {enumerable: false, configurable: false},
//     surname: {writable: false}
// });

// Object.defineProperty(user, 'name', {writable: false});

// Object.defineProperty(user, 'gender', {value: 'male'});

// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// user.name = '1231';
//writeble

// enumerable  

// configurable 

//Object.seal()

//Object.freeze()

let  masUser = Object.keys(user);

for(let i; i < masUser.length; i++){
    console.log(masUser[i]);

}

// let valuesUser = Object.values(user);

// for(let i; i < valuesUser.length; i++){
//     console.log(valuesUser[i]);

// }