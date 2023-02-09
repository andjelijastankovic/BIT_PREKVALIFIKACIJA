$(document).ready(function() {
    $('#createMovie').on('click', function(event) {
        createMovie();
        event.preventDefault();
    });
});

var movies = [];
var fest = new Festival();
function createMovie() {
    var movieTitle = $('#movieTitle').val();
    var movieLength = $('#movieLength').val();
    var genreSelect = $('select :selected').val();
    var errorMovies = $('.errorMovies');
    var listMovies = $('.listMovies');

    if(!movieTitle || !movieLength || !genreSelect) {
        errorMovies.text('All fields are required');
        return;
    }

    errorMovies.val('');

    var genre = new Genre(genreSelect);
    var movie = new Movie(movieTitle, genre, movieLength);

    movies.push(movie);
    var createdUl = $('<ul></ul>');
    $.each(movies, function (indexInArray, valueOfElement) { 
        createdUl.append(`<li>${movies[indexInArray].getMovieData()}</li>`);
    });
    
    listMovies.append(createdUl);
    movies.length = 0;
    // movieTitle = '';
    // movieLength = '';
    // genreSelect = '';
}

