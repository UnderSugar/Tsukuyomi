'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'; // синтаксисом CSS

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
    //   text = document.createTextNode('Тут был я ');

div.classList.add('black');

document.body.append(div);
 
 wrapper.append('div'); //в конце
// wrapper.appendChild(div);
// wrapper.prepend(div); // в начале

//       1 блок который вставлется 2 перед каким элементом
// wrapper.insertBefore(div, hearts[1]);

// hearts[0].before(div); // пере элементом

// hearts[0].after(div); // после элемента

// circles[0].remove();
// wrapper.removeChild(hearts[1]);
// hearts[0].replaceWith(circles[0]);


// wrapper.replaceChild(circles[0], hearts[0]);

// div.style.height = "100px";
div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "<h1>Hello world</h1>";

div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');
div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');