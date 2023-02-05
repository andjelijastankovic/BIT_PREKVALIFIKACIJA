/* 
    In app.js file: 
    - Declare all necessary variables for managing passed 
    and failed exams as well as their statistics.
    - Write all code that connects a user behaviour with application logic.   
*/

$(document).ready(function(){
    $(document).ready(function () {
        $('button').click(function() {
            collectData();
            updateList();
            statistics();
        })
    });
    
    month();
});

class App{
    constructor(examList) {
        this.examList = [];
    }

    addExam(exam) {
        if(exam.hasPassed()) {
            this.examList.push(exam);
        }
    }

    getFail() {
        var count = 0;
        for(var i = 0; i < this.examList.length; i++) {
            if(!this.examList[i]) {
                count++;
            }
        }

        return count;
    }

    getPass() {
        var count = 0;
        for(var i = 0; i < this.examList.length; i++) {
            if(this.examList[i]) {
                count++;
            }
        }

        return count;
    }

    getSum() {
        return this.getPass() + this.getFail();
    }

    percentFail() {
        var sum = this.getSum();
        var fail = this.getFail();
        var pass = this.getPass();

        var percentage = ((fail / sum)*100).toFixed(2);

        if(fail == 0 || pass == 0) {
            return '';
        } else {
            return percentage+'%';
        }
    }
}

function month() {
    var today = new Date();
    var month = today.toLocaleString('en-GB', { month: 'long' });
    $('#month').text(month);
}
