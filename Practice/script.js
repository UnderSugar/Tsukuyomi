'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    showMyDB: (hidden) => {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: () => {
        for(let i = 1; i < 2; i++){
        //     let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
        //     if(genre != '' && genre != null) {
        //         personalMovieDB.genres[i] = genre; 
        //     }else {
        //         alert("Не может быть пустого значения!");
        //        
        //     }
        // 

        let genres = prompt(`Введите ваши любимые жанры через запятую`, "").toLowerCase();
        if(genres === '' || genres === null) {
            console.log("Вы ввели некорректные данные");
            i--;
        }else {
            personalMovieDB.genres = genres.split(', ');
            personalMovieDB.genres.sort();
        }
        }   
        personalMovieDB.genres.forEach( (item, i) =>{
           console.log(`Любимый жанр # ${i + 1} - это ${item}`);
        });
       
    },
    rememberMyFilms:() => {
        for(let i = 0; i < 2; i++){
            let films = prompt("Один из последних просмотренных фильмов" , "").trim(), // trim() устраняет проблемы с пробелами 
                stars = +prompt("На сколько его оцените?", "");
        
            if(films != null && stars != null && films != '' && stars != '' && films.length < 50  ){
                personalMovieDB.movies[films] = stars;
                console.log('done');
            }else {
                console.log('error');
                i--;
            }
            
        }
    },
    detectPersonalLevel:() => {

        if(personalMovieDB.count < 10) {
            console.log("Посмотрено довольно мало фильмов");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        }else if(personalMovieDB.count >= 30 ){
            console.log("Вы киноман");
        }
        
    },
    toggleVisibleMyDB: () =>{
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    }

};


// personalMovieDB.start();
// personalMovieDB.writeYourGenres();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
