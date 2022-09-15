"use strict";

const numberOfFilms = +prompt('How many movies you have seen?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Last seen movie', ''),
      b = prompt('Your moovie score?', ''),
      c = prompt('Last seen movie', ''),
      d = prompt('Your moovie score?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);