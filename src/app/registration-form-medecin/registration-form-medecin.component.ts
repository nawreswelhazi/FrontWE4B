import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Medecin } from 'src/models/medecin';
import { MedecinServiceService } from '../services/medecin-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-registration-form-medecin',
    templateUrl: './registration-form-medecin.component.html',
    styleUrls: ['./registration-form-medecin.component.css']
})
export class RegistrationFormMedecinComponent implements OnInit {
    registrationFormMedecin!: FormGroup;
    doctorCodes: string[] = [];

    constructor(
        private fb: FormBuilder,
        private medecinService: MedecinServiceService,
        private router: Router,
        private snackBar: MatSnackBar,
        private http: HttpClient
    ) {}

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
            ville:['', Validators.required],
            presentation: ['', Validators.required],
            experience: [null, [Validators.required, Validators.min(0)]],
            mdp: ['', Validators.required],
            mdpCheck: ['', Validators.required]
        });

        this.loadDoctorCodes();
    }

    loadDoctorCodes() {
        this.http.get<any>('/assets/doctor-codes.json').subscribe(
            (data) => {
                this.doctorCodes = data.codes;
            },
            (error) => {
                console.error('Error loading doctor codes:', error);
            }
        );
    }

    submit() {

        if (this.registrationFormMedecin.value.mdp === this.registrationFormMedecin.value.mdpCheck) {
            const sexe: number = this.registrationFormMedecin.value.sexe === 'homme' ? 0 : 1;
            const enteredCodeINE = this.registrationFormMedecin.value.codeINE;

            // Check if the entered codeINE is in the list of valid doctor codes
            const isValidCodeINE = this.doctorCodes.includes(enteredCodeINE);

            if (isValidCodeINE) {
                const medecin: Medecin = new Medecin(
                    this.registrationFormMedecin.value.nom,
                    this.registrationFormMedecin.value.prenom,
                    this.registrationFormMedecin.value.age,
                    sexe,
                    this.registrationFormMedecin.value.adresse,
                    this.registrationFormMedecin.value.mail,
                    this.registrationFormMedecin.value.mdp,
                    enteredCodeINE,
                    this.registrationFormMedecin.value.specialite,
                    this.registrationFormMedecin.value.experience,
                    this.registrationFormMedecin.value.prix,
                    this.registrationFormMedecin.value.ville,
                    this.registrationFormMedecin.value.presentation
                );
                console.log(medecin)
                this.medecinService.addMedecin(medecin).subscribe(
                    (result: any) => {
                        console.log('Medecin registered successfully:', result);
                        this.router.navigate(['/']);
                        this.snackBar.open('Compte créé avec succès', 'Fermer', { duration: 4000 });
                    },
                    (error: any) => {
                        console.error('Error registering Medecin:', error);

                        // Log the entire HTTP response
                        console.log('Full HTTP Response:', error);

                        if (error.status === 409) {
                            this.snackBar.open('Mail ou Code INE existant', 'Fermer', { duration: 4000 });
                        } else {
                            // Handle other error cases as needed
                        }
                    }
                );
            } else {
                // Show error message or handle invalid codeINE
                console.error('Invalid doctor codeINE');
                this.snackBar.open('Invalid doctor codeINE', 'Close', { duration: 4000 });
            }
        } else {
            alert('mdp different');
        }
    }
}
