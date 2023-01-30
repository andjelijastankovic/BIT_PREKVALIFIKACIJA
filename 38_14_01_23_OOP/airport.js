/*
    Create constructor functions with properties representing the following:
    ● Person - name, surname
*/
'use strict';

(function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        /* 
            Add getData method to Person. It should return a formatted string containing the name and
            surname of the person.
            'John', 'Snow' -> 'John Snow'
        */
        this.getData = function () {
            return `${this.name} ${this.surname}`;
        }
    }

    /* 
        ● Seat - number, category (can be "b" for business or "e" for economy)
        - If category is not provided for Seat, assume it’s economy ("e").
        - If seat number is not provided, assign a random number between 10 and 100.
    */

    function Seat(number, category) {
        if (!number) {
            this.number = Math.floor(Math.random() * (100 - 10 + 1) + 10);
        } else {
            this.number = number;
        }

        if (!category) {
            this.category = 'e'.toUpperCase();
        } else {
            this.category = category.toUpperCase();
        }

        /* 
            Add getData method to Seat. It should return a formatted string containing a seat number and
            category.
            12, 'B' -> '12, B'
        */
        this.getData = function () {
            return `${this.number}, ${this.category}`;
        }
    }

    //● Passenger - person (instance of Person), seat (instance of Seat)
    function Passenger(person, seat) {
        this.person = person.getData();
        this.seat = seat.getData();

        /*
            Add getData method to Passenger. It should return a formatted string containing a seat
            number, category letter (always in uppercase), a name and surname. To display seat data, use
            getData method of the Seat object. The same goes for the person data.
            personObj, seatObj -> 12, B, John Snow
        */
        this.getData = function () {
            return `${this.seat}, ${this.person}`;
        }
    }

    //● Flight - relation, date and list of passengers (initially empty)
    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listPassengers = [];

        /* 
            Add addPassenger method to Flight. It should receive Passenger and add the passenger to
            the passenger list of a given flight.
        */
        this.addPassenger = function (passenger) {
            this.listPassengers.push(passenger);
        }

        /* 
            Add getData method to Flight. It should return a formatted string containing a date, relation, all
            data related to the flight and list of passengers with their data.
            25.10.2017, Belgrade - Paris
                1, B, John Snow
                2, E, Cersei Lannister

            Modify Flight getData method to return a formatted string as date and relation (as the first and
            the last consonant of the starting location - the first and the last consonant of the destination
            location) of the current flight.
            'Belgrade - Paris', '25.09.2017' -> 25.09.2017 BD - PS
        */
        this.getData = function () {
            var str = this.relation;
            var strSep = str.split(' - ');
            var str = `${this.date}, ${strSep[0].charAt(0).toUpperCase()}${strSep[0].charAt(strSep[0].length - 1).toUpperCase()} - ${strSep[1].charAt(0).toUpperCase()}${strSep[1].charAt(strSep[1].length - 1).toUpperCase()} \n`;
            
            
            //var str = `${this.date}, ${this.relation} \n`;
            for (var i = 0; i < this.listPassengers.length; i++) {
                str += `\t ${this.listPassengers[i].seat}, ${this.listPassengers[i].person} \n`;
            }

            return str;
            
        }

    }

    //● Airport - name (should be a hard-coded value "Nikola Tesla"), list of flights
    function Airport() {
        this.name = 'Nikola Tesla';
        this.listFlights = [];

        //Add addFlight method to Airport. It should add the flight to the list of flights of the airport.
        this.addFlight = function (flight) {
            this.listFlights.push(flight);
        }

        /* 
            Call Airport’s getData method to display the airport data output in the following manner:
            Airport: Nikola Tesla, total passengers: 4
                25.10.2017, Belgrade - Paris
                    1, B, John Snow
                    2, E, Cersei Lannister
                11.11.2017, Barcelona - Belgrade
                    3, E, Daenerys Targaryen
                    4, E, Tyrion Lannister
        */
        this.getData = function() {
            var sumPass = 0;
            for(var i = 0; i < this.listFlights.length; i++) {
                sumPass += this.listFlights[i].listPassengers.length;
            }

            var str = `Airport: ${this.name}, total passengers: ${sumPass} \n`;
            
            for(var i = 0; i < this.listFlights.length; i++) {
                str += `${this.listFlights[i].getData()}`;
            }
            return str;
        }
    }

    /* 
        Inside your immediately-invoking function, add createFlight function that receives a relation
        (ex. Belgrade - New York) and date as parameters and returns a created Flight.
    */
    function createFlight(relation, date){
        return new Flight(relation, date);
    }

    var createdFlight = createFlight('Belgrade - New York', '17.02.2023');

    /* 
        Inside your immediately-invoking function, add createPassenger function that receives a first
        name, last name, seat number and category and returns a created Passenger.
    */
    
    function createPassenger(firstName, lastName, seatNumber, category){
        var person = new Person(firstName, lastName);
        var seat = new Seat(seatNumber, category);
        return new Passenger(person, seat);
    };

    //In you main program function, create an instance of the Airport object.
    var air = new Airport();

    /* 
        Create two instances of the Flight object using the createFlight function and the following
        data:
        relation: 'Belgrade - New York' date: 'Oct 25 2017'
        relation: 'Barcelona - Belgrade' date: 'Nov 11 2017'
    */

    var crFl2 = createFlight('Belgrade - New York', 'Oct 25 2017');
    var crFl3 = createFlight('Barcelona - Belgrade', 'Nov 11 2017');

    /* 
        Create four instances of the Passenger object using the createPassenger function with the
        following data:
        Name: 'John' surname: 'Snow' seat number: 1 category: 'b'
        Name: 'Cersei' surname: 'Lannister' seat number: 2 category: 'b'
        Name: 'Daenerys' surname: 'Targaryen' seat number: 14
        Name: 'Tyrion' surname: 'Lannister'
    */
    
    var pass1 = createPassenger('John', 'Snow', 1, 'b');
    var pass2 = createPassenger('Cercei', 'Lannister', 2, 'b');
    var pass3 = createPassenger('Daenerys', 'Targaryen', 14);
    var pass4 = createPassenger('Tyrion', 'Lannister');

    /* 
        Add the first two passengers to the first flight and 
        the second two to the second flight using the
        Flight’s addPassenger method.
    */

    crFl2.addPassenger(pass1);
    crFl2.addPassenger(pass2);
    crFl3.addPassenger(pass3);
    crFl3.addPassenger(pass4);

    air.addFlight(crFl2);
    air.addFlight(crFl3);
    
    console.log(air.getData());


    /* 
        Extra

        done - Modify Flight getData method to return a formatted string as date and relation (as the first and
        the last consonant of the starting location - the first and the last consonant of the destination
        location) of the current flight.
        'Belgrade - Paris', '25.09.2017' -> 25.09.2017 BD - PS

        While adding passenger with addPassenger method, make sure that:
        ● Two passengers can not have the same seat number;
        ● The flight can not have more than 100 passengers;
        ● If a passenger with the same full name exists in a flight list, you should replace the existing
        passenger’s data with new data (e.g. it can happen when a passenger changes seats).
        Modify Passenger’s getData method to return full category name “business” for “b” and
        “economy” for “e”.
        Add the total number of passengers in business category for each flight and the total number of
        business category passengers for the airport to final output.
    */

})()




