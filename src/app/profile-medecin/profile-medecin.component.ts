import { SessionService } from './../services/session.service';
import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/models/medecin';
import { Router } from '@angular/router';
import { MedecinServiceService } from '../services/medecin-service.service';

@Component({
  selector: 'app-profile-medecin',
  templateUrl: './profile-medecin.component.html',
  styleUrls: ['./profile-medecin.component.css']
})
export class ProfileMedecinComponent implements OnInit {
  public medecin !: Medecin;
  private id ! : number;
  public sexe!:string;
  constructor(private router:Router, private MS : MedecinServiceService, private SS : SessionService) {

  }

  ngOnInit(): void {
    if(this.SS.getUserRole() != "medecin"){
      this.router.navigateByUrl('/')
    }
    this.id = Number(this.SS.getUserId())
    this.fetchMedecin(this.id)
  }

  fetchMedecin(id: number): void {
    this.MS.getMedecin(id).subscribe(
      data => {
        this.medecin = data;
        this.sexe = this.medecin.sexe == 0 ? "Homme" : "Femme";
        console.log('Fetched medecin:', this.medecin);
      },
      error => {
        console.error('Error fetching Medecin:', error);
      }
    );
  }

  modifier(){
    this.router.navigate(['/','modifier-medecin']);
  }
  // Source getCookie : https://gist.github.com/hunan-rostomyan/28e8702c1cecff41f7fe64345b76f2ca

}
