import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Patient } from 'src/models/patient';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-modifier-patient',
  templateUrl: './modifier-patient.component.html',
  styleUrls: ['./modifier-patient.component.css']
})

export class ModifierPatientComponent implements OnInit {

  public patient ! : Patient
  patientProfileForm ! : FormGroup;
  private id ! : number;
  constructor(private fb: FormBuilder, private router : Router, private PS : PatientService, private snackBar: MatSnackBar, private SS : SessionService) { }

  ngOnInit(): void {

    if(this.SS.getUserRole() != "patient"){
      this.router.navigateByUrl('/')
    }
    this.patientProfileForm = this.fb.group({
      age: [null, [Validators.required, Validators.min(0)]],
      adresse: ['', Validators.required],
      poids: [null, [Validators.required, Validators.min(0)]],
      taille: [null, [Validators.required, Validators.min(0)]],
    });
    this.id = Number(this.SS.getUserId())
    this.fetchPatient(this.id)
  }

  fetchPatient(id: number): void {
    this.PS.getPatient(id).subscribe(
      data => {
        this.patient = data;
        console.log('Fetched patient:', this.patient);
      },
      error => {
        console.error('Error fetching Patient:', error);
      }
    );

  }

  submit(){
      const sexe:number = this.patientProfileForm.value.sexe==="homme" ? 0:1;
      const age = this.patientProfileForm.value.age ? this.patientProfileForm.value.age : this.patient.age
      const adresse = this.patientProfileForm.value.adresse ? this.patientProfileForm.value.adresse : this.patient.adresse
      const poids = this.patientProfileForm.value.poids ? this.patientProfileForm.value.poids : this.patient.poids
      const taille = this.patientProfileForm.value.taille ? this.patientProfileForm.value.taille : this.patient.taille
      const patient: Patient = new Patient(
        this.patient.nom,
        this.patient.prenom,
        age,
        this.patient.sexe,
        adresse,
        this.patient.mail,
        this.patient.mdp,
        this.patient.num_assurance,
        poids,
        taille
      );
      this.PS.updatePatient(this.id,patient).subscribe(
        (result) => {
          console.log('RDV added successfully:', result);
          this.router.navigate(['']);
          this.snackBar.open('Compte modifié avec succès', 'Fermer', {
            duration: 4000, // Durée en millisecondes pour afficher le message
          });
        },
        (error) => {
          console.error('Error creating Patient:', error);
          this.snackBar.open('Erreur', 'Fermer', {
            duration: 4000, // Durée en millisecondes pour afficher le message
          });
        })
      console.log('Patient:', patient);
  }
}
