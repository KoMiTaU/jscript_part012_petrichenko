"use strict";


let num = 50;
let numberOfFilms;

function start() {
    numberOfFilms = prompt('How many movies you have seen?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('How many movies you have seen?', '');

    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Last seen movie', ''),
              b = prompt('Your moovie score?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Watched less films than you need!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are classic user');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are moovie expert too much films');
    } else {
        console.log('Error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Number of favorite movie genre ${i}`);
    }
}

writeYourGenres();