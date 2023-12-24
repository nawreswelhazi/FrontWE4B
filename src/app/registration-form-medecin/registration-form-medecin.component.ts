import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Medecin } from 'src/models/medecin';

@Component({
  selector: 'app-registration-form-medecin',
  templateUrl: './registration-form-medecin.component.html',
  styleUrls: ['./registration-form-medecin.component.css']
})
export class RegistrationFormMedecinComponent implements OnInit {
  registrationFormMedecin!: FormGroup;
  constructor(private fb : FormBuilder) { }

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
      prix: [null, [Validators.required, Validators.min(0)]],
      presentation: ['', Validators.required],
      experience: [null, [Validators.required, Validators.min(0)]],
      heureOuverture: ['', Validators.required],
      heureFermeture: ['', Validators.required],
      mdp: ['', Validators.required],
      mdpCheck: ['', Validators.required]
    });
  }

  submit(){
    if(this.registrationFormMedecin.value.mdp === this.registrationFormMedecin.value.mdpCheck){
      const sexe:number = this.registrationFormMedecin.value.sexe==="homme" ? 0:1;
      const medecin: Medecin = new Medecin(
        1, // changer pour id
        this.registrationFormMedecin.value.nom,
        this.registrationFormMedecin.value.prenom,
        this.registrationFormMedecin.value.age,
        sexe,
        this.registrationFormMedecin.value.adresse,
        this.registrationFormMedecin.value.mail,
        this.registrationFormMedecin.value.codeINE,
        this.registrationFormMedecin.value.specialite,
        this.registrationFormMedecin.value.prix,
        this.registrationFormMedecin.value.presentation,
        this.registrationFormMedecin.value.experience,
        this.registrationFormMedecin.value.heureOuverture,
        this.registrationFormMedecin.value.heureFermeture,
        this.registrationFormMedecin.value.mdp
      );
      console.log('Medecin:', medecin);
    }else{
      alert("mdp different");
    }
  }

}
