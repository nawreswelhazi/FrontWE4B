import { Component, OnInit } from '@angular/core';
import { MedecinServiceService } from '../services/medecin-service.service';
import { Medecin } from 'src/models/medecin';

@Component({
  selector: 'app-prendre-rdv',
  templateUrl: './prendre-rdv.component.html',
  styleUrls: ['./prendre-rdv.component.css']
})
export class PrendreRDVComponent implements OnInit {
  dateOptions: string[] = [];
  heuresOptions: string[] = [];
  public CurrentMedecin !: Medecin; //Le medecin qu'il a choisit pour prendre un rdv
  getvalue:any;

  constructor(private MS: MedecinServiceService) { }

  ngOnInit(): void {
    this.generateDateOptions();
    this.onGetUsers();
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
    this.MS.getMedecin(1).subscribe(
      (data: Medecin) => {
        console.log(data)
        this.CurrentMedecin = data;
        this.CurrentMedecin.photo = '../../assets/images/'+this.CurrentMedecin.photo
      },
      (err: any) => {
        console.log("Le problème c'est", err);
      }
    );
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

}
