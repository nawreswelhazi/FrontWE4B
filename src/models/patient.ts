export class Patient{
    constructor(
        public id:number,
        public nom:string,
        public prenom:string,
        public age:number,
        public sexe:number,
        public adresse:string,
        public mail:string,
        public poids:number,
        public taille:number,
        public assurance:string,
        public mdp:string
    ){
        this.id=id
        this.nom=nom
        this.prenom=prenom
        this.age=age
        this.sexe=sexe
        this.adresse=adresse
        this.mail=mail
        this.poids=poids
        this.taille=taille
        this.assurance=assurance
        this.mdp=mdp
    }
}