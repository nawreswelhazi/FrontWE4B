import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/models/patient';
import { Router } from '@angular/router';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonneService } from '../services/personne.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { personne } from 'src/models/personne';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!:FormGroup;
  public CurrentUser !: any;
  constructor(private router:Router,private fb:FormBuilder, private PS: PersonneService, private snackBar: MatSnackBar, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      mail: [null, Validators.required],
      mdp: ['', Validators.required]
    });
  }
  submit(){
    const compte:string[] = [
      this.loginForm.value.mail,
      this.loginForm.value.mdp
    ];
    this.PS.getPersonne(compte[0], compte[1]).subscribe(
      (result) => {
        console.log('Credentials trouvés:', result);
        //this.router.navigate(['']);
        this.snackBar.open('Vous vous êtes connecté avec succès', 'Fermer', {
          duration: 4000, // Durée en millisecondes pour afficher le message
        });
        this.CurrentUser = result
        this.sessionService.setUserId(this.CurrentUser.id);
        if (('num_assurance' in this.CurrentUser)) {
          this.sessionService.setUserRole("patient");
        }
        else {this.sessionService.setUserRole("medecin");}
        console.log(this.sessionService.getUserId())
        console.log(this.sessionService.getUserRole())
        if (this.sessionService.getUserRole() === "medecin")
        {
          this.router.navigate(['/MesRDV']);
        }
        else {
          this.router.navigate(['']);
        }
      },
      (error) => {
        console.error('Credentials not found', error);
        this.snackBar.open('Mail ou mot de passe incorrect', 'Fermer', {
          duration: 4000, // Durée en millisecondes pour afficher le message
        });
      })
  }
}
