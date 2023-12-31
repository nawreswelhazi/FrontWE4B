import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medecin } from 'src/models/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinServiceService {

  public hostMed = 'http://localhost:8080/medecin';
  public hostRDV= 'http://localhost:8080/rdvs';
  medecin!: Medecin
  constructor(private http:HttpClient) { }

  getMedecin(id:number):Observable<Medecin>{
    return this.http.get<Medecin>(`${this.hostMed + '/get'}/${id}`);
  }

  loadHeures(id: number, date:string):Observable<string[]>{
    return this.http.get<string[]>(`${this.hostRDV + '/getRDVMedecinExist'}/${id}/${date}`);
  }
  getMedecinsBySpecialiteVille(specialite: string, ville:string):Observable<Medecin[]>{
    return this.http.get<Medecin[]>(`${this.hostMed + '/getMedecinsBySpecialiteVille'}/${specialite}/${ville}`);
  }

}
