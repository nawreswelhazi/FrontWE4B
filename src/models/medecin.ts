export class Medecin{
    constructor(
        public id:number,
        public nom:string,
        public prenom:string,
        public age:number,
        public sexe:number,
        public adresse:string,
        public mail:string,
        public codeINE:string,
        public specialite:string,
        public prix:number,
        public presentation:string,
        public experience:number,
        public heureOuverture:string, // jsp ce que c LocalTime
        public heureFermeture:string, // pareil
        public mdp:string
    ){
        this.id=id
        this.nom=nom
        this.prenom=prenom
        this.age=age
        this.sexe=sexe
        this.adresse=adresse
        this.mail=mail
        this.codeINE=codeINE
        this.specialite=specialite
        this.prix=prix
        this.presentation=presentation
        this.experience=experience
        this.heureOuverture=heureOuverture
        this.heureFermeture=heureFermeture
        this.mdp=mdp
    }
}