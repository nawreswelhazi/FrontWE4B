import { personne } from "./personne"

export class Medecin extends personne{
    constructor(
        nom:string,
        prenom:string,
        age:number,
        sexe:number,
        adresse:string,
        mail:string,
        mdp:string,
        public codeINE:string,
        public specialite:string,
        public experience:number,
        public prix:number,
        public ville:string,
        public presentation?:string,
        photo?:string,
        id?:number


    ){
        super(nom,prenom,age,sexe,adresse,mail,mdp, photo, id)
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
        this.ville=ville
        this.presentation=presentation
        this.experience=experience
    }
}
