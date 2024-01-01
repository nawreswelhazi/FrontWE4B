import { Component, OnInit } from '@angular/core';
import { MedecinServiceService } from '../services/medecin-service.service';
import { Medecin } from 'src/models/medecin';
import { RdvService } from '../services/rdv.service';
import { Rdv } from 'src/models/rdv';
import { Patient } from 'src/models/patient';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-prendre-rdv',
  templateUrl: './prendre-rdv.component.html',
  styleUrls: ['./prendre-rdv.component.css']
})
export class PrendreRDVComponent implements OnInit {
  dateOptions: string[] = [];
  heuresOptions: string[] = [];
  public CurrentMedecin !: Medecin; //Le medecin qu'il a choisit pour prendre un rdv
  getvalue:any=""; //date selectionnée
  
  getTime:any="";
  motif:any; //texte
  public CurrentUser !: Patient;
  public userId !: number | null;
  public cuurentDoctorPhoto !: string;

  constructor(private MS: MedecinServiceService, private rdvService: RdvService, private PS: PatientService, private router: Router, private sessionService: SessionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.generateDateOptions();
    this.onGetUsers();
    this.userId = this.sessionService.getUserId();
    this.onGetPatient();
    
  }

  generateDateOptions() {
    const today = new Date();
    for (let i = 0; i < 20; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i);
      const formattedDate = this.formatDate(nextDate);
      this.dateOptions.push(formattedDate);
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

  onGetUsers(){
    const doctorId = this.route.snapshot.paramMap.get('id');
    if (doctorId != null) {
      this.MS.getMedecin(parseInt(doctorId)).subscribe(
        (data: Medecin) => {
          console.log(data)
          this.CurrentMedecin = data;
          if (this.CurrentMedecin.photo !== null)
          {
            this.cuurentDoctorPhoto = '../../assets/images/'+this.CurrentMedecin.photo
          }
          else this.cuurentDoctorPhoto = '../../assets/images/defaultPDP.jpg'
          
        },
        (err: any) => {
          console.log("Le problème c'est", err);
        }
      );
    }
  }

  loadHeuresRDV(date: string) {
    this.MS.loadHeures(1, date).subscribe(
      (data: string[]) => {
        this.heuresOptions = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des heures :', error);
      }
    );
  }

  onChangeObj(newValue:String) {
    console.log(newValue)
    this.getvalue = newValue;
    this.loadHeuresRDV(this.getvalue);
  }

  onChangeTime(newValue:String) {
    console.log(newValue)
    this.getTime = newValue;
  }

  onChangeMotif(newValue:String) {
    console.log(newValue)
    this.motif = newValue;
  }

  onGetPatient(){
    if (this.userId !== null){
    this.PS.getPatient(this.userId).subscribe(
      (data: Patient) => {
        console.log("bonnnnn",data)
        this.CurrentUser = data;
      },
      (err: any) => {
        console.log("Le problème c'est", err);
      }
    );} else {
      console.log("this.userId is null. Cannot fetch patient data.");
      // Handle the null case if needed
    }
  }


  addRDV(): void {
    const rdv1: Rdv = new Rdv(this.CurrentMedecin, this.CurrentUser, this.motif,this.getTime ,this.getvalue);
    console.log("hedha motif", this.motif);
      
    this.rdvService.addRDV(rdv1).subscribe(
      (result) => {
        console.log('RDV added successfully:', result);
        this.router.navigate(['MesRDV']);
      },
      (error) => {
        console.error('Error adding RDV:', error);
      }
    );
  }

}
