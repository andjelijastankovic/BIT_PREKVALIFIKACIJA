class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    //funkcije u klasi ne pocinju sa function!!!
    fullName() {
        return `${this.name} ${this.surname}`;
    }

    getInfo() {
        return this.fullName();
    }
}

class Programmer extends Person {
    constructor(name, surname, favoriteLanguage) {
        super(name, surname);
        this.favoriteLanguage = favoriteLanguage;
    }

    getInfo() {
        return super.getInfo() + ' ' + this.favoriteLanguage;
    }
}

var programmer = new Programmer('Pera', 'Peric', 'JavaScript');
console.log(programmer.getInfo());

class Tester extends Person {
    constructor(name, surname, favoriteTestingFrame) {
        super(name, surname);
        this.favoriteTestingFrame = favoriteTestingFrame;
    }

    getInfo() {
        return super.getInfo() + ' ' + this.favoriteTestingFrame;
    }
}

var tester = new Tester('Petar', 'Petrovic', 'Selenium');
console.log(tester.getInfo());

class Backend extends Programmer {
    constructor(name, surname, language, database) {
        super(name, surname, language);
        this.database = database;
    }
}

var back = new Backend('Nikola', 'Alic', 'C#', 'SQL server');
console.log(back.getInfo());