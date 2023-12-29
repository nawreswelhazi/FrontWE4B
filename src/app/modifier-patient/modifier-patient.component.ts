import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Patient } from 'src/models/patient';

interface status{
  [key : string]: boolean;
}

@Component({
  selector: 'app-modifier-patient',
  templateUrl: './modifier-patient.component.html',
  styleUrls: ['./modifier-patient.component.css']
})

export class ModifierPatientComponent implements OnInit {
  

  patient: Patient = new Patient(1, "nom", "prenom", 20, 1, "adresse", "mail", "mdp","assurance", 50, 1.80);
  sexe: string = this.patient.sexe === 0 ? "Homme" : "Femme";
  patientProfileForm!: FormGroup;
  isEditing!:status;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.patientProfileForm = this.fb.group({
      nom: [this.patient.nom, Validators.required],
      prenom: [this.patient.prenom, Validators.required],
      age: [this.patient.age, Validators.required],
      adresse: [this.patient.adresse, Validators.required],
      mail: [this.patient.mail, [Validators.required, Validators.email]],
      poids: [this.patient.poids, Validators.required],
      taille: [this.patient.taille, Validators.required],
      assurance: [this.patient.assurance, Validators.required],
      mdp: [this.patient.mdp, Validators.required]
    });
  }

  toggleEditMode(field: string): void {
    this.isEditing[field] = !this.isEditing[field];
  }

  saveField(field: string): void {
    const control = this.patientProfileForm.get(field);
    if (control) {
      (this.patient as any)[field] = control.value;
      this.toggleEditMode(field);
    } else {
      // Handle the case where the control is not found or is null
      console.error(`Control for field ${field} not found.`);
    }
  }
}
