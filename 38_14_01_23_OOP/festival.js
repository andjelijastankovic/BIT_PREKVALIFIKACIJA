'use strict';

(function () {
    /*
        Create constructor functions with properties representing the following:
        ● Genre - name
        ● Movie - title, genre (instance of Genre), length
        ● Program - date, list of movies (initially empty) 
        and total number of movies
        ● Festival - name, list of programs (initially empty), 
        and number of movies in all programs
    */

    function Genre(name) {
        this.name = name;
        /*
            Add method getData to Genre which returns formatted 
            string as first and last letter of genre name
            "Action" -> AN
            "Drama" -> DA
            "Comedy" -> CY
        */

        this.getData = function () {
            return `${this.name.charAt(0).toUpperCase()}${this.name.charAt(this.name.length - 1).toUpperCase()}`;
        }
    }

    // var genre = new Genre('horror');
    // console.log(genre.getData());

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = new Genre(genre);
        this.length = length;
        /*
            Add getData method to Movie. It should return 
            a formatted string consisting of the movie title,
            length and genre acronym.
            The Shawshank Redemption, 130min, AN
        */
        this.getData = function () {
            return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
        }
    }

    var movie1 = new Movie('blablabla', 'horror', 213);
    var movie2 = new Movie('fewfwwef', 'drama', 111);
    var movie3 = new Movie('ggwwllwwllww', 'action', 444);
    var movie4 = new Movie('sadasdasd', 'drama', 333);
    //console.log(movie1.getData());

    function Program(date, movies) {
        this.date = new Date(date);
        this.listMovies = new Array();
        this.totalMovies = movies.length;

        /*
            Add addMovie method to Program. It should receive 
            a Movie and add the movie to the movie
            list of a given program.
        */
        this.addMovie = function () {
            for (var i = 0; i < movies.length; i++) {
                this.listMovies.push(movies[i]);
            }
            return this.listMovies;
        }

        /*
            Add getData method to Program. It should return a formatted 
            string of all data related to the program. The string should 
            contain date, program length (calculated from length of all movies in a
            list) and data about movies in a list (see the example below). 
            To display movie data, use Movie’s getData method.
            
            Date, program length from all movies
                First movie title, length and genre
                Second movie title, length and genre
                Third movie title, length and genre
                Fourth movie name and length and genre
        */
        this.getData = function () {
            var lengthsOfMovies = 0;

            for (var i = 0; i < movies.length; i++) {
                lengthsOfMovies += movies[i].length;
            }

            var dataDate = `${this.date.getDate()}.${this.date.getMonth() + 1}.${this.date.getFullYear()}., ${lengthsOfMovies} minutes`;
            var str = '';
            //Movie.apply(this);

            for (var i = 0; i < movies.length; i++) {
                str += '\n\t\t' + movies[i].getData();
            }

            return `${dataDate}${str}`;
        }
    }

    var program1 = new Program('2023/01/10', [movie1, movie2]);
    var program2 = new Program('2023/01/11', [movie3, movie4]);
    var program3 = new Program('2023/01/14', [movie1, movie2, movie3, movie4]);
    //console.log(program1);
    //console.log(program2);
    //console.log(program3);
    //console.log(program1.addMovie());
    //console.log(program2.addMovie());
    //console.log(program3.getData());
    //console.log(program3.addMovie());

    /*
        Festival - name, list of programs (initially empty), 
        and number of movies in all programs
    */

    function Festival(name, programs) {
        this.name = name;
        this.listPrograms = new Array();

        /*
            Add addProgram method to Festival. It should 
            receive a Program and add the program to the
            list of the given festival’s programs.
        */
        this.addProgram = function () {
            for (var i = 0; i < programs.length; i++) {
                this.listPrograms.push(programs[i]);
            }
            return this.listPrograms;
        }

        /*
            Add method getData to Festival which return formatted string like festival name, number of
            movies in all programs and all programs listed. Use Programs getData method to list all
            programs. (example output is shown below)
            Weekend festival has 4 movie titles
                28.10.2017, program duration 368min
                    Spider-Man: Homecoming, 133min, AN
                    War for the Planet of the Apes, 140min, DA
                    The Dark Tower, 95min, WN
                29.10.2017, program duration 108min
                    Deadpool, 108min, CY
        */

        this.getData = function () {
            var str = '';
            var sumMovies = 0;

            for (var i = 0; i < programs.length; i++) {
                sumMovies += programs[i].totalMovies;
            }

            console.log(`${this.name} festival has ${sumMovies} movie titles`);

            for (var i = 0; i < programs.length; i++) {
                str += '\n\t' + programs[i].getData() + '\n\t';
            }

            return str;
        }
    }

    var sp = new Movie('Spider-Man: Homecoming', 'Animation', 133);
    var was = new Movie('War for the Planet of the Apes', 'Drama', 140);
    var dark = new Movie('The Dark Tower', 'Western', 95);
    var pr1 = new Program('2017/10/28', [sp, was, dark]);
    //console.log(pr1.addMovie());
    var dp = new Movie('Deadpool', 'Animation', 108);
    var pr2 = new Program('2017/10/29', [dp]);
    var fest = new Festival('festival', [pr1, pr2]);
    //console.log(fest.getData());

    /*
        Inside your immediately-invoking function, add createMovie 
        function that receives a movie title, movie length and genre 
        (as a string) as parameters and returns a created Movie.
    */
    function createMovie(nameMovie, genreMovie, lengthMovie) {
        return new Movie(nameMovie, genreMovie, lengthMovie);
    }
    //console.log(createMovie('Lord of the Rings', 'epic fantasy', 400));

    /*
        Inside your immediately-invoking function, add createProgram 
        function that receives a date and returns a created Program.
    */

    /*
        In your main program function, create an instance of the Festival object.
        Create two instances of Program using createProgram function.
        Create four instances of Movie object using createMovie function. Add all created movies to
        both programs using the addMovie method.
        Add the created program instances to the created festival instance using festival’s addProgram
        method.
        Display festival’s data using getData method.
    */
    var newMovie = createMovie('x-men', 'animation', 250);

    function createProgram(date, array) {
        return new Program(date, array);
    }
    
    var created_program = createProgram('2023/01/16', [sp, dp, newMovie]);
    //console.log(created_program.getData());
    var fest2 = new Festival('Animation', [created_program]);
    console.log(fest2.getData());
    
    //console.log(fest2.addProgram());
    //console.log(fest2.getData());
})()