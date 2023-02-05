/* 
    In form.js file:
    done - write a function that collects all the data from the form
    done - write a function that validates all collected data
    - write a function that updates the given list 
    so it adds the new item at the end of the list
    - write a function that updates the part 
    of the page with the statistics
*/
import { App } from './app.js';
import { Subject } from './subject.js';
import { Student } from './student.js';
import { Exam } from './exam.js';
$(document).ready(function () {
    $('button').click(function () {
        collectData();
        updateList();
        statistics();
    })
})

var app = new App();
function collectData() {
    var subjectSelect = $('select :selected').text();
    var nameSurname = $('#nameSurname').val();
    var grade = $('#grade').val();

    var splitOnSpace = nameSurname.split(' ');
    var first = splitOnSpace[0];
    var last = splitOnSpace[1];

    if (!subjectSelect || !nameSurname || !grade) {
        alert('Fields are required and you must fill them.');
    }

    if (first.charAt(0).toUpperCase() != first.charAt(0) || last.charAt(0).toUpperCase() != last.charAt(0)) {
        alert('Both name and surname should be provided and both should start with capitals.');
    }

    if (grade < 1 || grade > 10) {
        alert('Grade must be between 1 and 10');
    }

    var subject = new Subject(subjectSelect);
    var student = new Student(first, last);
    var exam = new Exam(subject, student, grade);
    app.addExam(exam);
}

function updateList() {

    var subjectSelect = $('select :selected').text();
    var nameSurname = $('#nameSurname').val();
    var grade = $('#grade').val();

    if (grade > 5) {
        $('#listPass').prepend(`<li> ${subjectSelect} - ${nameSurname}  <span class='liSpan'> ${grade} </span> </li>`);
    } else {
        $('#listFall').prepend(`<li> ${subjectSelect} - ${nameSurname}  <span class='liSpan'> ${grade} </span> </li>`);
    }
}

function statistics() {
    $('#totalStudents').text(app.getSum());
    $('#numberPassed').text(app.getPass());
    $('#numberFailed').text(app.getFail());
    $('#percent').text(app.percentFail());
}