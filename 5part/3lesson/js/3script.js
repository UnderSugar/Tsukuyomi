'use strict'; 
//Asynchronous JavaScript and XML AJAX

let inputUAH = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd');

inputUAH.addEventListener('input', ()=> {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', ()=> {
        if(request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUAH.value / data.current.usd).toFixed(2);
        }else {
            inputUsd.value = 'Что-то пошло не так';
        }
    });

    // status
    // statusText =
    // response =
    // readyState



});

inputUsd.addEventListener('input', ()=> {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', ()=> {
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUAH.value =  (data.current.usd * inputUsd.value).toFixed();
        }else {
            inputUAH.value = 'Что-то пошло не так';
        }
    });

    // status
    // statusText =
    // response =
    // readyState



});