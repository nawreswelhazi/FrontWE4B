import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Medecin } from 'src/models/medecin';
import { MedecinServiceService } from '../services/medecin-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-modifier-medecin',
  templateUrl: './modifier-medecin.component.html',
  styleUrls: ['./modifier-medecin.component.css']
})

export class ModifierMedecinComponent implements OnInit {

  public medecin ! : Medecin
  medecinProfileForm ! : FormGroup;
  private id ! : number;
  constructor(private fb: FormBuilder, private router : Router, private MS : MedecinServiceService, private snackBar: MatSnackBar, private SS : SessionService) { }

  ngOnInit(): void {

    if(this.SS.getUserRole() != "medecin"){
      this.router.navigateByUrl('/')
    }
    this.medecinProfileForm = this.fb.group({
      experience: [null, [Validators.required, Validators.min(0)]],
      prix: [null, [Validators.required, Validators.min(0)]],
      ville: ['', Validators.required],
      presentation: ['', Validators.required]
    });
    this.id = Number(this.SS.getUserId())
    this.fetchmedecin(this.id)
  }

  fetchmedecin(id: number): void {
    this.MS.getMedecin(id).subscribe(
      data => {
        this.medecin = data;
        console.log('Fetched medecin:', this.medecin);
      },
      error => {
        console.error('Error fetching medecin:', error);
      }
    );

  }

  submit(){
      const sexe:number = this.medecinProfileForm.value.sexe==="homme" ? 0:1;
      const experience = this.medecinProfileForm.value.experience ? this.medecinProfileForm.value.experience : this.medecin.experience
      const presentation = this.medecinProfileForm.value.presentation ? this.medecinProfileForm.value.presentation : this.medecin.presentation
      const prix = this.medecinProfileForm.value.prix ? this.medecinProfileForm.value.prix : this.medecin.prix
      const ville = this.medecinProfileForm.value.ville ? this.medecinProfileForm.value.ville : this.medecin.ville
      const medecin: Medecin = new Medecin(
        this.medecin.nom,
        this.medecin.prenom,
        this.medecin.age,
        this.medecin.sexe,
        this.medecin.adresse,
        this.medecin.mail,
        this.medecin.mdp,
        this.medecin.codeINE,
        this.medecin.specialite,
        experience,
        prix,
        ville,
        presentation
      );
      this.MS.updateMedecin(this.id,medecin).subscribe(
        (result) => {
          console.log('RDV added successfully:', result);
          this.router.navigate(['']);
          this.snackBar.open('Compte modifié avec succès', 'Fermer', {
            duration: 4000, // Durée en millisecondes pour afficher le message
          });
        },
        (error) => {
          console.error('Error creating medecin:', error);
          this.snackBar.open('Erreur', 'Fermer', {
            duration: 4000, // Durée en millisecondes pour afficher le message
          });
        })
      console.log('medecin:', medecin);
  }
}

