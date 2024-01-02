import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/models/patient';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {
  public patient !: Patient;
  public sexe!:string;
  private id !: number;
  constructor( private PS: PatientService, private router: Router, private SS : SessionService) {
  }

  ngOnInit(): void {
    if(this.SS.getUserRole() != "patient"){
      this.router.navigateByUrl('/')
    }
    this.id = Number(this.SS.getUserId())
    this.fetchPatient(this.id)
  }
  fetchPatient(id: number): void {
    this.PS.getPatient(id).subscribe(
      data => {
        this.patient = data;
        this.sexe = this.patient.sexe == 0 ? "Homme" : "Femme";
        console.log('Fetched patient:', this.patient);
      },
      error => {
        console.error('Error fetching Patient:', error);
      }
    );
  }
  modifier(){
    this.router.navigate(['/','modifier-patient']);
  }
}
