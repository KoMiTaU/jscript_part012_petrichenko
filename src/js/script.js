"use strict";

const numberOfFilms = +prompt('How many movies you have seen?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


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


// Второй способ с приминением while
// let i = 0;
// while (i < 2) {
//     const a = prompt('Last seen movie', ''),
//           b = prompt('Your moovie score?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//     }
// }


// Третий способ с преминением do
// let i = 0;
// do {
//     const a = prompt('Last seen movie', ''),
//           b = prompt('Your moovie score?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//         }
//     }
// while (i < 2);


if (personalMovieDB.count < 10) {
    console.log('Watched less films than you need!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('You are classic user');
} else if (personalMovieDB.count >= 30) {
    console.log('You are moovie expert too much films');
} else {
    console.log('Error');
}



console.log(personalMovieDB); 