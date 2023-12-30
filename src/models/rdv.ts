import { Medecin } from "./medecin";
import { Patient } from "./patient";

export class Rdv{
    constructor(
    public medecin: Medecin,
    public patient: Patient,
    public motif: string,
    public horaire: string,
    public date: string,
    public id?: number,){
        this.medecin = medecin;
        this.patient = patient
        this.motif = motif
        this.horaire = horaire
        this.date = date
        this.id = id
    }
}