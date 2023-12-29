import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { PatientComponent } from './patient/patient.component';
import { MedecinComponent } from './medecin/medecin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RegistrationFormMedecinComponent } from './registration-form-medecin/registration-form-medecin.component';
import { ProfilePatientComponent } from './profile-patient/profile-patient.component';
import { ProfileMedecinComponent } from './profile-medecin/profile-medecin.component';
import { ModifierPatientComponent } from './modifier-patient/modifier-patient.component';
import { ModifierMedecinComponent } from './modifier-medecin/modifier-medecin.component';
import { IonicModule } from '@ionic/angular';
import { NavbarPagesComponent } from './navbar-pages/navbar-pages.component';
import { ListeMedecinsComponent } from './liste-medecins/liste-medecins.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    PatientComponent,
    MedecinComponent,
    FooterComponent,
    RegistrationFormMedecinComponent,
    ProfilePatientComponent,
    ProfileMedecinComponent,
    ModifierPatientComponent,
    ModifierMedecinComponent,
    NavbarPagesComponent,
    ListeMedecinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
