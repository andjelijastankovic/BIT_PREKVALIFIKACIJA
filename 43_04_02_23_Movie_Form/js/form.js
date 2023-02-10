$(document).ready(function() {
    $('#createMovie').on('click', function(event) {
        createMovie();
        event.preventDefault(); 
    });

    $('#createProgram').on('click', function(event) {
        createProgram();
        event.preventDefault();
    });

    $('#addMovieToProgramButton').on('click', function(event) {
        addMovieToProgram();
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
    var createdUl = $('<ul></ul>');
    var selectMovie = $('#selectMovie');

    if(!movieTitle || !movieLength || !genreSelect) {
        errorMovies.text('All fields are required');
        return;
    }

    errorMovies.html('');

    var genre = new Genre(genreSelect);
    var movie = new Movie(movieTitle, genre, movieLength);

    movies.push(movie);
    var options = `<option value=''>-</option>`;
    $.each(movies, function (index, valueOfElement) { 
        createdUl.append(`<li>${movies[index].getMovieData()}</li>`);
        options += `<option value='${movies[index].movieTitle}'>${movies[index].movieTitle}</option>`;
    });
    
    listMovies.html(createdUl);
    selectMovie.html(options);
}


function createProgram() {
    var programDate = $('#dateProgram').val();
    var errorPrograms = $('.errorPrograms');
    var selectProgram = $('#selectProgram');
    var listPrograms = $('.listPrograms');
    var createdUlPrograms = $('<ul></ul>');
    // var selectedMovie = $('#selectMovie :selected').text();
    // console.log(selectedMovie);

    if(!programDate) {
        errorPrograms.text('You must choose a date for creating program.');
        return;
    }

    errorPrograms.html('');
    var program = new Program(programDate);
    fest.addProgram(program);

    var options = `<option value=''>-</option>`;
    $.each(fest.listOfPrograms, function (index, valueOfElement) {
        createdUlPrograms.append(`<li>${fest.listOfPrograms[index].getProgramData()}</li>`);
        options += `<option value='${fest.listOfPrograms[index].getProgramData()}'>${fest.listOfPrograms[index].getProgramData()}</option>`;
    });

    listPrograms.html(createdUlPrograms);
    selectProgram.html(options);
}

function addMovieToProgram() {
    var movieProgramError = $('.movieProgramError');
    var selectedMovie = $('#selectMovie :selected').val();
    var selectedProgram = $('#selectProgram :selected').val();
    
    // if(!selectedMovie || !selectedProgram) {
    //     movieProgramError.text('Choose movie and program');
    // }

    // movieProgramError.html('');


}