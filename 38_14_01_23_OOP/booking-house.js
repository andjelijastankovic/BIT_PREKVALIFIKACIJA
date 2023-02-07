'use strict';

(function () {
    /*
        Create constructor functions with properties representing the following:
        done- ● Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
        done - Create continents as constants (objects that can not change). So, when passing 
        a continent as a parameter, you should pass Continent.ASIA.
        done - ● Person - name, surname, date of birth
        ● Player - person (instance of Person), bet amount, country (instance of Country)
        ● Address - country, city, postal code, street and number
        ● BettingPlace - address and list of players (initially empty)
        ● BettingHouse - competition, list of betting places (initially empty) and number of players
    */
    
    function Country(countryName, odds, continent) {
        this.countryName = countryName;
        this.odds = odds;
        this.continent = continent;
    }

    var continents = Object.freeze({
        EUROPE: "EU",
        ASIA: "AS",
        AFRICA: "AF",
        SOUTHAMERICA: "SA",
        NORTHAMERICA: "NA",
        AUSTRALIA: "AU",
    });

    function Person(personName, surname, dateOfBirth) {
        this.personName = personName;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
        /* 
            Add a method to Person that returns a formatted string containing 
            the name, surname and date of birth of the person 
            (date of birth in dd.mm.yy format).
        */
        this.getPersonData = function() {
            var date = `${this.dateOfBirth.getDate()}.${this.dateOfBirth.getMonth()+1}.${this.dateOfBirth.getFullYear()}.`;
            return `${this.personName}, ${this.surname}, ${date}`;
        }
    }

    function Player(personName, surname, dateOfBirth, betAmount, countryName, odds, continent) {
        this.person = new Person(personName, surname, dateOfBirth);
        this.betAmount = betAmount;
        this.country = new Country(countryName, odds, continent);

        /* 
            Add a method to Player that returns a formatted 
            string containing a country, expected win
            amount (odds * bet amount) and person data.
            SR, 1050.00 eur, Pera Peric, 29 years
        */
        this.getPlayerData = function() {
            return `${this.country.countryName.slice(0, 2).toUpperCase()}, ${this.country.odds * this.betAmount} eur, ${this.person.personName} ${this.person.surname}, ${new Date().getFullYear() - this.person.dateOfBirth.getFullYear()} years`;
        }
    }
    
    function Address(countryName, odds, continent, city, postalCode, streetAndNumber) {
        this.country = new Country(countryName, odds, continent);
        this.city = city;
        this.postalCode = postalCode;
        this.streetAndNumber = streetAndNumber;

        /* 
            Add a method to Address that returns a formatted string like the following one:
            Nemanjina 4, 11000 Beograd, SR
        */
        this.getAddressData = function() {
            return `${this.streetAndNumber}, ${this.postalCode} ${this.city}, ${this.country.countryName.substring(0, 2).toUpperCase()}`;
        }
    }

    function BettingPlace(countryName, odds, continent, city, postalCode, streetAndNumber) {
        this.address = new Address(countryName, odds, continent, city, postalCode, streetAndNumber);
        this.listPlayers = [];

        this.addPlayer = function(player) {
            this.listPlayers.push(player);
        }

        /* 
            Add a method to BettingPlace that returns a formatted string containing a street (without a
            number), postal code and city, and sum of all bet amounts of that place.
            Nemanjina, 11000 Belgrade, sum of all bets: 50000eur
        */
        this.getBettingPlaceData = function () {
            var addressData = this.address.getAddressData();
            var splitWholeAddress = addressData.split(', ');
            var splitAddress = splitWholeAddress[0].split(' ');
            var sum = 0;
            for(var i = 0; i < this.listPlayers.length; i++) {
                sum += this.listPlayers[i].betAmount;
            }

            return `${splitAddress[0]}, ${this.address.postalCode} ${this.address.city}, sum of all bets: ${sum}eur`;
            
        }

        this.getPlayers = function() {
            var str = '';
            for(var i = 0; i < this.listPlayers.length; i++) {
                str += `\t${this.listPlayers[i].getPlayerData()}\n`;
            }

            return str;
        }
    }

    //● BettingHouse - competition, list of betting places (initially empty) and number of players
    function BettingHouse(competition) {
        this.competition = competition;
        this.bettingPlaces = [];
        this.numberOfPlayers = function() {
            var sum = 0;
            for(var i = 0; i < this.bettingPlaces.length; i++) {
                sum += this.bettingPlaces[i].listPlayers.length;
            }

            return sum;
        }


        this.addBettingPlace = function(betPlace){
            this.bettingPlaces.push(betPlace);
        }

        /* 
            Display all betting house data in the following manner:

            Football World Cup Winner, 2 betting places, 4 bets
                Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
                    SR, 1050.00 eur, Pera Peric, 29 years
                    SR, 1050.00 eur, Pera Peric, 29 years
                Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
                    GR, 1050.00 eur, Pera Peric, 29 years
                    SR, 1050.00 eur, Pera Peric, 29 years
            There are 3 bets on Serbia
        */
        this.getBettingHouseData = function() {
            var str = '';
            var count = 0;
            str += `${this.competition}, ${this.bettingPlaces.length} betting places, ${this.numberOfPlayers()} bets \n`;
            for(var i = 0; i < this.bettingPlaces.length; i++) {
                str+= `\t${this.bettingPlaces[i].getBettingPlaceData()} \n ${this.bettingPlaces[i].getPlayers()}\n`;
            }

            return str;
        }
    }
    
    function createPlayer(personName, surname, dateOfBirth, betAmount, countryName, odds, continent) {
        return new Player(personName, surname, dateOfBirth, betAmount, countryName, odds, continent);
    }
    var crPl1 = createPlayer('Created1', 'Player Created1', '1999/09/29', 500, 'Serbia', 1, continents.EUROPE);
    var crPl2 = createPlayer('Created2', 'Player Created2', '1989/09/20', 1500, 'Serbia', 2, continents.EUROPE);
    var crPl3 = createPlayer('Created3', 'Player Created3', '1995/04/27', 2000, 'Serbia', 1, continents.EUROPE);
    var crPl4 = createPlayer('Created4', 'Player Created4', '1988/03/15', 3000, 'Egypt', 1, continents.AFRICA);

    function createBettingPlace(countryName, odds, continent, city, postalCode, streetAndNumber) {
        return new BettingPlace(countryName, odds, continent, city, postalCode, streetAndNumber);
    }
    var crBp1 = createBettingPlace('Japan', 5, continents.ASIA, 'Tokyo', 20304, 'Japan 4');
    var crBp2 = createBettingPlace('Serbia', 1000, continents.EUROPE, 'Belgrade', 11000, 'Nemanjina 4');

    var bh = new BettingHouse('Football World Cup Winner');
    crBp1.addPlayer(crPl1);
    crBp1.addPlayer(crPl2);
    crBp2.addPlayer(crPl3);
    crBp2.addPlayer(crPl4);
    bh.addBettingPlace(crBp1);
    bh.addBettingPlace(crBp2);
    console.log(bh.getBettingHouseData());
})()