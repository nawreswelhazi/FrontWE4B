import { personne } from "./personne"

export class Patient extends personne{
    constructor(
        id: number,
        nom: string,
        prenom: string,
        age: number,
        sexe: number,
        adresse: string,
        mail: string,
        mdp: string,
        public assurance:string,
        public poids?:number,
        public taille?:number,
        photo?: string,
    ){
        super(id,nom,prenom,age,sexe,adresse,mail,mdp, photo)
        this.poids=poids
        this.taille=taille
        this.assurance=assurance
    }
}