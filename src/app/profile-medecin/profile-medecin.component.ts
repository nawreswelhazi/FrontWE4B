import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/models/medecin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-medecin',
  templateUrl: './profile-medecin.component.html',
  styleUrls: ['./profile-medecin.component.css']
})
export class ProfileMedecinComponent implements OnInit {
  medecin:Medecin = new Medecin(
    "nom",
    "prenom", 
    20, 
    1, 
    "adresse", 
    "mail",
    "mdp", 
    "code INE", 
    "specialite",
    5,
    10, 
    "presentation"
  )
  sexe:string = this.medecin.sexe === 0 ? "Homme" : "Femme"
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  modifier(){
    this.router.navigate(['/','modifier-medecin']);
  }

}
