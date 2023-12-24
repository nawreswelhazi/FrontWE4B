import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/models/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {
  patient:Patient = new Patient(1,"nom", "prenom", 20, 1, "adresse", "mail", 50, 1.80, "assurance", "mdp")
  sexe:string = this.patient.sexe === 0 ? "Homme" : "Femme"
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  modifier(){
    this.router.navigate(['/','modifier-patient']);
  }

}
