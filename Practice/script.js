'use strict';


let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}
function writeYourGenres(){
    for(let i = 0; i < 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
        personalMovieDB.genres[i] = genre; 
    }
   
}
showMyDB();
writeYourGenres();

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        let films = prompt("Один из последних просмотренных фильмов" , "").trim(),
            stars = +prompt("На сколько его оцените?", "");
    
        if(films != null && stars != null && films != '' && stars != '' && films.length < 50  ){
            personalMovieDB.movies[films] = stars;
            console.log('done');
        }else {
            console.log('error');
            i--;
        }
        
    }
}
// rememberMyFilms();



function detectPersonalLevel(){

    if(personalMovieDB.count < 10) {
        console.log("Посмотрено довольно мало фильмов");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count >= 30 ){
        console.log("Вы киноман");
    }
    
}
detectPersonalLevel();

console.log(personalMovieDB);