const numberOfFilms = +prompt('How many movies did you watch?','')
const lastWatchedMovie_1 = prompt('What movie did you last watch?','')
const markMovie_1 = prompt('Please enter its mark','')
const lastWatchedMovie_2 = prompt('What movie did you last watch?','')
const markMovie_2 = prompt('Please enter its mark','')
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};
personalMovieDB.movies[lastWatchedMovie_1] = markMovie_1
personalMovieDB.movies[lastWatchedMovie_2] = markMovie_2

console.log(personalMovieDB)