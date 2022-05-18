'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




let films = prompt("Один из последних просмотренных фильмво" , "");

let stars = +prompt("На сколько его оцените?", "");

personalMovieDB.movies[films] = stars;

console.log(personalMovieDB);