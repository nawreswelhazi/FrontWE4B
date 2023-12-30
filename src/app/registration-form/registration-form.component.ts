  import { Component, OnInit } from '@angular/core';
  import { Patient } from 'src/models/patient';
  import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../services/patient.service';

  @Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.css']
  })
  export class RegistrationFormComponent implements OnInit {
    registrationForm!: FormGroup;
    constructor(private fb : FormBuilder, private PS: PatientService) { }

    ngOnInit(): void {
      this.registrationForm = this.fb.group({
        id: [null, Validators.required],
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        age: [null, [Validators.required, Validators.min(0)]],
        sexe: ['', Validators.required],
        adresse: ['', Validators.required],
        mail: ['', [Validators.required, Validators.email]],
        poids: [null, [Validators.required, Validators.min(0)]],
        taille: [null, [Validators.required, Validators.min(0)]],
        assurance: ['', Validators.required],
        mdp: ['', Validators.required],
        mdpCheck: ['', Validators.required]
      });
    }

    submit(){
      if(this.registrationForm.value.mdp === this.registrationForm.value.mdpCheck){
        const sexe:number = this.registrationForm.value.sexe==="homme" ? 0:1;
        const patient: Patient = new Patient(
          this.registrationForm.value.nom,
          this.registrationForm.value.prenom,
          this.registrationForm.value.age,
          sexe,
          this.registrationForm.value.adresse,
          this.registrationForm.value.mail,
          this.registrationForm.value.mdp,
          this.registrationForm.value.assurance,
          this.registrationForm.value.poids,
          this.registrationForm.value.taille
        );
        this.PS.addPatient(patient).subscribe(
          (result) => {
            console.log('RDV added successfully:', result);
          },
          (error) => {
            console.error('Error creating Patient:', error);
          })
        console.log('Patient:', patient);
      }else{
        alert("mdp different");
      }
    }
  }
