import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from 'src/models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  public hostMed = 'http://localhost:8080/patients';

  constructor(private http:HttpClient) { }

  getPatient(id:number):Observable<Patient>{
    return this.http.get<Patient>(`${this.hostMed + '/get'}/${id}`);
  }
}
