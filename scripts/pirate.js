var caract = require('./caracteristique.js');

class Person {
    constructor(id, firstName, lastName, birthDate, bckgrd, gender, origin){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.bckgrd = bckgrd;
        this.gender = gender;
        this.origin = origin;
        this.caracteristiques = new Array();
    }
}

class Pirate extends Person {
    constructor(id, firstName, lastName, birthDate, bckgrd, gender, origin, pirateRole){
        super(id, firstName, lastName, birthDate, bckgrd, gender, origin);
        this.pirateRole = pirateRole;
    }

    log() {
        console.log(`${this.firstName} ${this.lastName} ${this.birthDate}`);
        for (let i = 0; i < this.caracteristiques.length; i++){
            this.caracteristiques[i].log();    
        }
    }
}

class Commercant extends Pirate{
    constructor(id, firstName, lastName, birthDate, bckgrd, gender, origin){
        super(id, firstName, lastName, birthDate, bckgrd, gender, origin);

        this.caracteristiques.push(new caract.Caracteristique(1, Caracteristiques.Charisme, 5));
        this.caracteristiques.push(new caract.Caracteristique(2, Caracteristiques.Constitution, 1));
        this.caracteristiques.push(new caract.Caracteristique(3, Caracteristiques.Dexterite, 2));
        this.caracteristiques.push(new caract.Caracteristique(4, Caracteristiques.Intelligence, 4));
        this.caracteristiques.push(new caract.Caracteristique(5, Caracteristiques.Perception, 3));
    }
}

class Navigateur extends Pirate{
    constructor(id, firstName, lastName, birthDate, bckgrd, gender, origin){
        super(id, firstName, lastName, birthDate, bckgrd, gender, origin);
    
        this.caracteristiques.push(new caract.Caracteristique(1, caract.Caracteristiques.Charisme, 1));
        this.caracteristiques.push(new caract.Caracteristique(2, caract.Caracteristiques.Constitution, 3));
        this.caracteristiques.push(new caract.Caracteristique(3, caract.Caracteristiques.Dexterite, 4));
        this.caracteristiques.push(new caract.Caracteristique(4, caract.Caracteristiques.Intelligence, 2));
        this.caracteristiques.push(new caract.Caracteristique(5, caract.Caracteristiques.Perception, 5));
    }
}

class Combattant extends Pirate{
    constructor(id, firstName, lastName, birthDate, bckgrd, gender, origin){
        super(id, firstName, lastName, birthDate, bckgrd, gender, origin);

        this.caracteristiques.push(new caract.Caracteristique(1, caract.Caracteristiques.Charisme, 2));
        this.caracteristiques.push(new caract.Caracteristique(2, caract.Caracteristiques.Constitution, 5));
        this.caracteristiques.push(new caract.Caracteristique(3, caract.Caracteristiques.Dexterite, 4));
        this.caracteristiques.push(new caract.Caracteristique(4, caract.Caracteristiques.Intelligence, 1));
        this.caracteristiques.push(new caract.Caracteristique(5, caract.Caracteristiques.Perception, 3));
    }
}

class TreasureHunter extends Pirate{
    constructor(id, firstName, lastName, birthDate, bckgrd, gender, origin){
        super(id, firstName, lastName, birthDate, bckgrd, gender, origin);

        this.caracteristiques.push(new caract.Caracteristique(1, caract.Caracteristiques.Charisme, 2));
        this.caracteristiques.push(new caract.Caracteristique(2, caract.Caracteristiques.Constitution, 1));
        this.caracteristiques.push(new caract.Caracteristique(3, caract.Caracteristiques.Dexterite, 3));
        this.caracteristiques.push(new caract.Caracteristique(4, caract.Caracteristiques.Intelligence, 5));
        this.caracteristiques.push(new caract.Caracteristique(5, caract.Caracteristiques.Perception, 4));
    }
}

class Diplomate extends Pirate{
    constructor(id, firstName, lastName, birthDate, bckgrd, gender, origin){
        super(id, firstName, lastName, birthDate, bckgrd, gender, origin);
        
        this.caracteristiques.push(new caract.Caracteristique(1, caract.Caracteristiques.Charisme, 2));
        this.caracteristiques.push(new caract.Caracteristique(2, caract.Caracteristiques.Constitution, 1));
        this.caracteristiques.push(new caract.Caracteristique(3, caract.Caracteristiques.Dexterite, 3));
        this.caracteristiques.push(new caract.Caracteristique(4, caract.Caracteristiques.Intelligence, 5));
        this.caracteristiques.push(new caract.Caracteristique(5, caract.Caracteristiques.Perception, 4));
    }
}


let diplomate = new Diplomate(1, 'John', 'Moran', '1966', '', '', '');
diplomate.log();
