"use strict";

if(4 == 9) {
    console.log('ok!');
} else {
    console.log('Error');
}



// if(num < 49){
//       console.log('Error');
// }else if (num > 100){
//     console.log('Много');
// }else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('ok!') : console.log('Error');

const num = 51;

switch(num){
    case 49: console.log('error!');
    break;
    case 50: console.log('ok!');
    break;
    case 100: console.log('error');
    break;
    default: console.log('not in this time');
    break;

}