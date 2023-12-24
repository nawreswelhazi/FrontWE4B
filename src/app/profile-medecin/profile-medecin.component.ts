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
    1,
    "nom",
    "prenom", 
    20, 
    1, 
    "adresse", 
    "mail", 
    "code INE", 
    "specialite", 
    10, 
    "presentation",
    5,
    "12H",
    "18H",
    "mdp"
  )
  sexe:string = this.medecin.sexe === 0 ? "Homme" : "Femme"
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  modifier(){
    this.router.navigate(['/','modifier-medecin']);
  }

}
