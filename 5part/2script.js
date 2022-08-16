'use strict';

const person = {
    name: 'Alex',
    phone: '+380932134567',
    parents: {
        mother: 'Ann',
        father: 'Ted'
    }
};

// console.log(JSON.stringify(person));

// console.log(JSON.parse(JSON.stringify(person)));
const clone = JSON.parse(JSON.stringify(person));
clone.parents.mother = 'Olga';
console.log(person);
console.log(clone);