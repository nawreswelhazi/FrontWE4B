import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from 'src/models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  public hostPatient = 'http://localhost:8080/patients';

  constructor(private http:HttpClient) { }

  getPatient(id:number):Observable<Patient>{
    return this.http.get<Patient>(`${this.hostPatient + '/get'}/${id}`);
  }

  addPatient(p: Patient):Observable<Patient>{
    return this.http.post<Patient>(`${this.hostPatient + '/new'}`, p);
  }
  updatePatient(id:number, p:Patient):Observable<Patient>{
    return this.http.put<Patient>(`${this.hostPatient + '/update'}/${id}`,p);
  }
}
