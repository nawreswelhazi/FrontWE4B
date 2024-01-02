import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medecin } from 'src/models/medecin';
import {Patient} from "../../models/patient";

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
  getallMedecin():Observable<Medecin[]>{
    return this.http.get<Medecin[]>(`${this.hostMed + '/all'}`);
  }
  addMedecin(m: Medecin):Observable<Medecin>{
    return this.http.post<Medecin>(`${this.hostMed + '/new'}`, m);
  }
  updateMedecin(id:number, m:Medecin):Observable<Medecin>{
    return this.http.put<Medecin>(`${this.hostMed + '/update'}/${id}`,m);
  }

  loadHeures(id: number, date:string):Observable<string[]>{
    return this.http.get<string[]>(`${this.hostRDV + '/getRDVMedecinExist'}/${id}/${date}`);
  }
  getMedecinsBySpecialiteVille(specialite: string, ville:string):Observable<Medecin[]>{
    return this.http.get<Medecin[]>(`${this.hostMed + '/getMedecinsBySpecialiteVille'}/${specialite}/${ville}`);
  }
  getMedecinsBySpecialite(specialite: string):Observable<Medecin[]>{
    return this.http.get<Medecin[]>(`${this.hostMed + '/getMedecinsBySpecialite'}/${specialite}`);
  }
  getMedecinsByVille(ville: string):Observable<Medecin[]>{
    return this.http.get<Medecin[]>(`${this.hostMed + '/getMedecinsByVille'}/${ville}`);
  }
  registerMedecin(m: Medecin):Observable<Medecin>{
    return this.http.post<Medecin>(`{$this.hostMed + '/new'}`,m);
  }
}
