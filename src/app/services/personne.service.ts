import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personne } from 'src/models/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  public hostPersonne = 'http://localhost:8080/personne';

  constructor(private http:HttpClient) { }

  getPersonne(mail:string, mdp:string):Observable<any>{
    return this.http.get<any>(`${this.hostPersonne + '/get'}/${mail}/${mdp}`);
  }
}
