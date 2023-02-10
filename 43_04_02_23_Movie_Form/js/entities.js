class Genre {
    constructor(genreName) {
        this.genreName = genreName;
    }

    getGenreData() {
        var data = `${this.genreName[0]}${this.genreName[this.genreName.length - 1]}`;
        return data.toUpperCase();
    }
}

class Movie {
    constructor(movieTitle, movieGenreObj, movieLength) {
        this.movieTitle = movieTitle;
        this.movieGenreObj = movieGenreObj;
        this.movieLength = movieLength;
    }

    getMovieData() {
        var data = `${this.movieTitle}, ${this.movieLength}min, ${this.movieGenreObj.getGenreData()}`;
        return data;
    }
}

class Program {
    constructor(dateProgram) {
        this.dateProgram = new Date(dateProgram);
        this.listOfMovies = [];
    }

    addMovie(movie) {
        this.listOfMovies.push(movie);
    }

    getProgramDuration() {
        var duration = 0;
        for(var i = 0; i < this.listOfMovies.length; i++) {
            duration += this.listOfMovies[i].movieLength;
        }

        return duration;
    }
    
    getProgramData() {
        var str = '';
        var programDateString = `${this.dateProgram.getDate()}.${this.dateProgram.getMonth()+1}.${this.dateProgram.getFullYear()}.`;

        if(this.listOfMovies.length == 0) {
            str = `${programDateString}, duration: to be announced`;
        } else {
            var str = `${programDateString}, ${this.listOfMovies.length} movies, duration: ${this.getProgramDuration()} minutes \n`;
        }
        
        return str;
    }
}

class Festival {
    constructor(festivalName) {
        this.festivalName = festivalName;
        this.listOfPrograms = [];
    }

    addProgram(program) {
        this.listOfPrograms.push(program);
    }

    getNumberOfMovies() {
        var numberOfMovies = 0;
        for(var i = 0; i < this.listOfPrograms.length; i++) {
            numberOfMovies += this.listOfPrograms[i].listOfMovies.length;
        }

        return numberOfMovies;
    }

    getFestivalData() {
        var str = '';
        str = `${this.festivalName} has ${this.getNumberOfMovies()} movie titles \n`;

        return str;
    }
}

//testing classes and methods
// var m1 = new Movie('movie1', 'drama', 150);
// var m2 = new Movie('movie1', 'drama', 150);
// var m3 = new Movie('movie1', 'drama', 150);
// var p1 = new Program('2023/06/24');
// var p2 = new Program('2023/07/23');
// p1.addMovie(m1);
// p1.addMovie(m2);
// p1.addMovie(m3);
// p2.addMovie(m1);
// p2.addMovie(m2);
//console.log(p1.getProgramData());
// var fest = new Festival('Fest 1');
// fest.addProgram(p1);
// fest.addProgram(p2);
//console.log(fest.getFestivalData());