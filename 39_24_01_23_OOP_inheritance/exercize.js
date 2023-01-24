/* 
    Create constructor functions with properties 
    representing the following:
    Person: name, surname
    Employee: inherits Person and has job and salary
    Developer: inherits from Employee and has specialization
    Manager: inherits from Employee and has department
*/

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

var person = new Person('Andjelija', 'Stankovic');
console.log(person.getFullName());

class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }

    /*
        All employees should inherit methods:
        - getData which returns the name, surname and salary 
        - getSalary which prints out the salary
        - increaseSalary which increases the salary by 10% 
    */
    getData() {
        return super.getFullName() + ' ' + this.salary;
    }

    getSalary() {
        return this.salary;
    }

    increaseSalary() {
        return this.salary * 1.1;
    }
}

var employee = new Employee('Pera', 'Peric', 'Web developer', 700);
console.log(employee.getData());
console.log(employee.increaseSalary());

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }

    getSpecialization() {
        return `${this.specialization}`;
    }
}

class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }

    /*
        All managers should inherit methods:
        getDepartment which prints out the name of the department
        changeDepartment which sets the department value to the given value
    */

    getDepartment() {
        return this.department;
    }

    changeDepartment(newValue) {
        this.department = newValue;
    }
}

var manager = new Manager('Janko', 'Jankovic', 'Manager', 1500, 'Management');
console.log(manager.getDepartment());
manager.changeDepartment('HR');
console.log(manager.getDepartment());


/* 
    Create constructor functions with properties representing the following:
    WebApp: name, url, technologies, licence, stars
    MobileApp: name, platforms, licence, stars

    Both web and mobile applications should inherit methods:
    - isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
    - like which increases the number of stars by one
    - showStars which prints out the number of stars 

*/
class WebApp {
    constructor(name, url, technologies, licence, stars) {
        this.name = name;
        this.url = url;
        this.technologies = technologies;
        this.licence = licence;
        this.stars = stars;
    }

    /*
        All web applications should inherit methods: 
        getData which prints out all the information
        reactBased which checks if one of the used technologies is React
    */
    getData() {
        return `${this.name}, ${this.url}, ${this.technologies}, ${this.licence}, ${this.stars}`;
    }

    reactBased() {
        if(this.technologies.includes('React')) {
            return true;
        } else {
            return false;
        }
    }

    isCCLicence() {
        if(this.licence.toUpperCase() == 'CC') {
            return true;
        } else {
            return false;
        }
    }

    like() {
        this.stars++;
    }

    showStars() {
        return this.stars;
    }
}
var webApp = new WebApp('facebook', 'http://www.facebook.com', ['php', 'BigPipe', 'React'], 'CC', 4);
console.log(webApp.getData());
console.log(webApp.reactBased());
webApp.like();
console.log(webApp.isCCLicence());
console.log(webApp.showStars());

class MobileApp {
    constructor(name, platforms, licence, stars) {
        this.name = name;
        this.platforms = platforms;
        this.licence = licence;
        this.stars = stars;
    }

    /* 
        All mobile applications should inherit methods:
        getData which prints out all the informations
        forAndroid which checks if one of the platforms the application is developed for is Android
    */

    getData() {
        return `${this.name}, ${this.platforms}, ${this.licence}, ${this.stars}`;
    }

    forAndroid() {
        if(this.platforms.includes('Android')) {
            return true;
        } else {
            return false;
        }
    }

    isCCLicence() {
        if(this.licence.toUpperCase() == 'CC') {
            return true;
        } else {
            return false;
        }
    }

    like() {
        this.stars++;
    }

    showStars() {
        return this.stars;
    }
}
var mobileApp = new MobileApp('Youtube', ['iOS', 'Android'], 'blabla', 4);
console.log(mobileApp.getData());
console.log(mobileApp.showStars());
console.log(mobileApp.forAndroid());