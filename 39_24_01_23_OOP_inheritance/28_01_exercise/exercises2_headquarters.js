/* 
    1.
    done - Headquarters have asked that you store the following information about each book: 
    - title, 
    - author,
    - copyright date, 
    - ISBN, 
    - number of pages, 
    - number of times the book has been checked out, 
    - whether the book has been discarded.
*/

class Book {
    constructor(title, author, copyDate, isbn, numberPages, numberChecked, discOrNot) {
        this.title = title;
        this.author = author;
        this.copyDate = copyDate;
        this.isbn = isbn;
        this.numberPages = numberPages;
        this.numberChecked = numberChecked;
        this.discOrNot = discOrNot;
    }

    checkOut(seen) {
        this.numberChecked += seen;
    }
}

class Manual extends Book{
    constructor(title, author, copyDate, isbn, numberPages, numberChecked, discOrNot){
        super(title, author, copyDate, isbn, numberPages, numberChecked, discOrNot);
    };

    /*
        done - For a manual, the book must be thrown 
        out if it is over 5 years old.
    */
    thrown() {
        var nowYear = new Date().getFullYear();
        if(nowYear - this.copyDate > 5) {
            this.discOrNot = 'Book is discarded';
        }
    }
}

class Novel extends Book{
    constructor(title, author, copyDate, isbn, numberPages, numberChecked, discOrNot){
        super(title, author, copyDate, isbn, numberPages, numberChecked, discOrNot);
    };

    /*
        done - For a novel, the book should be thrown 
        out if it has been checked out over 100 times.
    */
    thrown() {
        if(this.numberChecked > 100) {
            this.discOrNot = 'Book is discarded';
        }
    }
}
/*
    Headquarters also needs you to track certain actions 
    that you must perform when books get out of date.

    done - Construct three classes that hold the information 
    needed by headquarters as properties.
    done - One class should be a Book class and two child classes
    of the Book class called Manual and Novel.
    
    done - Each class will contain two methods. One will be a constructor.
    
    done - The other one will either be in charge of disposal of the book 
    or updating the property related to the number of times a book has been checked out.
    (Hint: This means you need to read through the requirements 
    for the problem and decide what should belong to Book and what 
    should belong to the Novel and Manual classes.)
    
    done - Declare an object of the Novel class for the following tome from the library. 
    done - Declare an object of the Manual class for the following tome from the library.
    done - One of the above books needs to be discarded. Call the appropriate method 
    for that book to update the property. 
    That way the crew can throw it into empty space to become debris.
    done - The other book has been checked out 5 times since you first created the object. 
    done - Call the appropriate method to update the number of times the book has been checked out.
*/
var nov1 = new Novel('456', 'rgtrtg', 2022, '4444444444444444', 555, 67, 'no');
var man1 = new Manual('123', 'wefwef', 2010, '2132131213213213', 111, 11, 'no');
man1.thrown();
console.log(man1);
nov1.checkOut(5);
console.log(nov1);
