export class personne{
    constructor(
        public nom:string,
        public prenom:string,
        public age:number,
        public sexe:number,
        public adresse:string,
        public mail:string,
        public mdp:string,
        public photo?:string,
        public id?:number,
    ){
        this.id=id
        this.nom=nom
        this.prenom=prenom
        this.age=age
        this.sexe=sexe
        this.adresse=adresse
        this.mail=mail
        this.mdp=mdp
        this.photo = photo
    }
}