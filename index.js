"use strict"
let numberOfFilms,
    userStatus = '',
    genre,
    i = 1


function start(){
    numberOfFilms = +prompt('How many movies did you watch?','')

    while(numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms === undefined || numberOfFilms === 0){
        numberOfFilms = +prompt('How many movies did you watch?','')

    }

}
function personalRaiting(){
    if(personalMovieDB.count < 10){
        userStatus = 'переглянуто досить мало фільмів'

    }else if(personalMovieDB.count >10 && personalMovieDB.count <= 30){
        userStatus = 'Ви середній глядач'
    }else if(personalMovieDB.count > 30){
        userStatus = 'Ви кіноман'
    }else{
        console.log('error')
    }

}
function showMyDB(){
    if(!personalMovieDB.private){
        console.log(personalMovieDB)
    }
}
function writeYourGenres(){
    for(let i = 1; i <=3; i++){
        genre = prompt('Please enter your favourite genres', '')
        if(i < 1)
            i = 1;
        if(Number.isInteger(genre) || genre == null){
            i--;
        }else{
            personalMovieDB.genres.push(genre)

        }
    }
}
start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};


do{
    let lastWatchedMovie = prompt('What movie did you last watch?','')
    let markMovie = prompt('Please enter its mark', '');

    if(lastWatchedMovie != null && markMovie !== null && lastWatchedMovie !== '' && lastWatchedMovie.length <=  50 && markMovie !== ''){
        personalMovieDB.movies[lastWatchedMovie] = markMovie
        console.log('saved movie')
        i++
    }else{
        i--
        if(i < 1) i = 1
    }
}while (i <= 2)


personalRaiting()
showMyDB()
writeYourGenres()