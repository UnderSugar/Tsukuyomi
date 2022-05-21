'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for(let i = 0; i < 2; i++){
    let films = prompt("Один из последних просмотренных фильмво" , ""),
        stars = +prompt("На сколько его оцените?", "");

    if(films != null && stars != null && films != '' && stars != '' && films.length < 50 ){
        personalMovieDB.movies[films] = stars;
        console.log('done');
    }else {
        console.log('error');
        i--;
    }
    
}

if(personalMovieDB.count < 10) {
    console.log("Посмотрено довольно мало фильмов");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
}else if(personalMovieDB.count >= 30 ){
    console.log("Вы киноман");
}


console.log(personalMovieDB);