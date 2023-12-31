import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationFormMedecinComponent } from './registration-form-medecin/registration-form-medecin.component';
import { ProfilePatientComponent } from './profile-patient/profile-patient.component';
import { ProfileMedecinComponent } from './profile-medecin/profile-medecin.component';
import { ModifierPatientComponent } from './modifier-patient/modifier-patient.component';
import { ModifierMedecinComponent } from './modifier-medecin/modifier-medecin.component';
import { ListeMedecinsComponent } from './liste-medecins/liste-medecins.component';
import { PrendreRDVComponent } from './prendre-rdv/prendre-rdv.component';
import { MesRDVComponent } from './mes-rdv/mes-rdv.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginFormComponent},
  {path:'registration', component:RegistrationFormComponent},
  {path:'registration-medecin', component:RegistrationFormMedecinComponent},
  {path:'profile-patient', component:ProfilePatientComponent},
  {path:'profile-medecin', component:ProfileMedecinComponent},
  {path:'modifier-patient', component:ModifierPatientComponent},
  {path:'modifier-medecin', component:ModifierMedecinComponent},
  {path:'liste-medecins/:specialite/:ville', component:ListeMedecinsComponent},
  {path: 'prendreRDV/:id', component: PrendreRDVComponent},
  {path: 'MesRDV', component: MesRDVComponent},
  {path:'liste-medecins', component:ListeMedecinsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
