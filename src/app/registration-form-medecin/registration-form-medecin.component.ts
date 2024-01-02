import { MedecinServiceService } from './../services/medecin-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Medecin } from 'src/models/medecin';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration-form-medecin',
  templateUrl: './registration-form-medecin.component.html',
  styleUrls: ['./registration-form-medecin.component.css']
})
export class RegistrationFormMedecinComponent implements OnInit {
  registrationFormMedecin!: FormGroup;
  constructor(private fb : FormBuilder, private PS: MedecinServiceService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registrationFormMedecin = this.fb.group({
      id: [null, Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(0)]],
      sexe: ['', Validators.required],
      adresse: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      codeINE: ['', Validators.required],
      specialite: ['', Validators.required],
      experience: [null, [Validators.required, Validators.min(0)]],
      prix: [null, [Validators.required, Validators.min(0)]],
      ville: ['', Validators.required],
      presentation: ['', Validators.required],
      mdp: ['', Validators.required],
      mdpCheck: ['', Validators.required]
    });
  }

  submit(){
    if(this.registrationFormMedecin.value.mdp === this.registrationFormMedecin.value.mdpCheck){
      const sexe:number = this.registrationFormMedecin.value.sexe==="homme" ? 0:1;
      const medecin: Medecin = new Medecin(
        this.registrationFormMedecin.value.nom,
        this.registrationFormMedecin.value.prenom,
        this.registrationFormMedecin.value.age,
        sexe,
        this.registrationFormMedecin.value.adresse,
        this.registrationFormMedecin.value.mail,
        this.registrationFormMedecin.value.mdp,
        this.registrationFormMedecin.value.codeINE,
        this.registrationFormMedecin.value.specialite,
        this.registrationFormMedecin.value.experience,
        this.registrationFormMedecin.value.prix,
        this.registrationFormMedecin.value.ville,
        this.registrationFormMedecin.value.presentation,
      );
      this.PS.addMedecin(medecin).subscribe(
        (result) => {
          console.log('RDV added successfully:', result);
          this.router.navigate(['']);
          this.snackBar.open('Compte créé avec succès', 'Fermer', {
            duration: 4000, // Durée en millisecondes pour afficher le message
          });
        },
        (error) => {
          console.error('Error creating Medecin:', error);
          this.snackBar.open('Mail ou code INE existant', 'Fermer', {
            duration: 4000, // Durée en millisecondes pour afficher le message
          });
        })
      console.log('Medecin:', medecin);
    }else{
      alert("mdp different");
    }
  }

}
