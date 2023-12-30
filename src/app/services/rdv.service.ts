import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Rdv } from 'src/models/rdv';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  public hostRDV= 'http://localhost:8080/rdvs';

  constructor(private http:HttpClient) { }

  addRDV(r: Rdv):Observable<Rdv>{
    return this.http.post<Rdv>(`${this.hostRDV + '/new'}`, r);
  }
}
