import { personne } from "./personne"

export class Patient extends personne{
    constructor(
        nom: string,
        prenom: string,
        age: number,
        sexe: number,
        adresse: string,
        mail: string,
        mdp: string,
        public num_assurance:string,
        public poids?:number,
        public taille?:number,
        photo?: string,
        id?: number,
    ){
        super(nom,prenom,age,sexe,adresse,mail,mdp, photo, id)
        this.poids=poids
        this.taille=taille
        this.num_assurance=num_assurance
    }
}