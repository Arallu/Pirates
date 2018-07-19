Object.defineProperty(exports, "__esModule", { value : true });

var Caracteristiques = exports.Caracteristiques = Object.freeze({
    Perception : Symbol('perception'),
    Charisme : Symbol('charisme'),
    Constitution : Symbol('constitution'),
    Intelligence : Symbol('intelligence'),
    Dexterite : Symbol('dexterite')
});

// console.log(Caracteristiques.Charisme);

var Caracteristique = exports.Caracteristique = class Caracteristique{
    constructor(id, caracteristique, value){
        this.id = id;
        this.caracteristique = caracteristique;
        this.value = value;
    }

    log() {
        console.log(`${this.caracteristique.toString()} ${this.value}`);
    }
}