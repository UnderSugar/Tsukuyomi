'use strict';

// let user = {name: 'Ivan'};

// let map = new WeakMap(); // для временного хранилища обьектов или хеш елементов
// map.set(user, 'data');


// const arr = [user];

// user = null;

// // console.log(map.has(user));

// console.log(map);
// // console.log(arr[0]);

let cache = new WeakMap();

function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cacheUser(lena);
cacheUser(alex);

lena = null;


// console.log(cache.has(lena));
// console.log(cache.has(alex));

// WeakSet - не является перебираемой
// add, has, delete

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '...', from: 'Ivan'},
    
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);

messages.shift();
console.log(readMessages.has(messages[0]));







