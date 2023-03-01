export class Show {
    constructor(id, name, image, summary) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.summary = summary;
    }
}

export class Season {
    constructor(premiere, end) {
        this.premiere = premiere;
        this.end = end;
    }
}

export class Cast {
    constructor(character, person) {
        this.character = character;
        this.person = person;
    }
}

export class Aka {
    constructor(showName, countryName) {
        this.showName = showName;
        this.countryName = countryName;
    }
}

export class Crew {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

export class Episode {
    constructor(sNum, eNum, eName, eRating) {
        this.sNum = sNum;
        this.eNum = eNum;
        this.eName = eName;
        this.eRating = eRating;
    }
}