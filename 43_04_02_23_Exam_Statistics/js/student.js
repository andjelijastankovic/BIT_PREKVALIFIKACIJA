/* 
    In student.js file:
    done - write a constructor function with two arguments 
    that represent name and surname of a student 
    done - add to its prototype a method getStudentData 
    that returns the name and surname of the student
*/

export class Student{
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getStudentData() {
        return `${this.name} ${this.surname}`;
    }
}



