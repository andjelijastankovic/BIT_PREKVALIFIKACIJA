function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

console.log(Person.prototype);
Person.prototype.fullName = function() {
    return `${this.name} ${this.surname}`;
}
console.log(Person.prototype);

var person = new Person('Pera', 'Peric');
//console.log(person.fullName());

Person.prototype.printInfo = function() {
    console.log(this.fullName());
}
person.printInfo();


function Programmer(name, surname, favoriteLanguage) {
    Person.call(this, name, surname);
    this.favoriteLanguage = favoriteLanguage;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

console.log(Programmer.prototype);

Programmer.prototype.printInfo = function() {
    var fullName = this.fullName();
    console.log(`${this.fullName()} ${this.favoriteLanguage}`);
}

var programmerPetar = new Programmer('Petar', 'Petrovic', 'JS');
programmerPetar.printInfo();


