'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name}, ${this.surname}`);

    }
};

const userMap = new Map(Object.entries(user));



const newUserObj = Object.fromEntries(userMap);
console.log(userMap);
console.log(newUserObj);

const shops = [
    {rice: 500},
    {oil: 200}, 
    {bread: 100}
]


const budget = [5000, 1500, 24000];

const map = new Map([
    [{paper: 400}, 8000]
]);


shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});


// map.set(shops[0], 5000);
// map.set(shops[1], 3000);
// map.set(shops[2], 2000);


map.set(shops[0], 5000)
.set(shops[1], 2000)
.set(shops[2], 2055);


console.log(map);
// console.log(map.has(shops[0]));

// map.delete(key);
// map.clear();
// map.size;


// // map.keys();

// // console.log(map.keys());

// const goods = [];
// for(let shop of map.keys()){
//     console.log(shop);
//     goods.push(Object.keys(shop)[0]);
// }

// console.log(goods);

// for( let price of map.values()){
//     console.log(price);
// }

// for (let [shop, price] of map.entries())
// {
//     console.log(shop, price);
// }

// map.forEach((value, key, map)=>{
//     console.log(key,value);
// });