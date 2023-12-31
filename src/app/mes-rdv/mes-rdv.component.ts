import { Component, OnInit } from '@angular/core';
import { RdvService } from '../services/rdv.service';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { Rdv } from 'src/models/rdv';

@Component({
  selector: 'app-mes-rdv',
  templateUrl: './mes-rdv.component.html',
  styleUrls: ['./mes-rdv.component.css']
})
export class MesRDVComponent implements OnInit {
  public userId !: number | null;
  public userRole !: string | null;
  listeRDV: Rdv[] = [];
  listePersonne: any[] = [];

  constructor(private rdvService: RdvService, private router: Router, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.userId = this.sessionService.getUserId();
    this.userRole = this.sessionService.getUserRole();
    this.loadRDV()
  }

  loadRDV() {
    if (this.userRole === "medecin"){
      if (this.userId != null){
        this.rdvService.getRDVMedecin(this.userId).subscribe(
          (data: Rdv[]) => {
            this.listeRDV = data;
            console.log(this.listeRDV)
            for (let i = 0; i < this.listeRDV.length; i++) {
              console.log("bon ", this.listeRDV[i].id)
              this.listePersonne.push(this.listeRDV[i].patient);
            }
          },(error) => {
            console.error('Erreur lors du chargement des rendez-vous :', error);
          }
        );
      }
    } 
    else {
      if (this.userId != null){
        this.rdvService.getRDVPatient(this.userId).subscribe(
          (data: Rdv[]) => {
            this.listeRDV = data;
            console.log(data)
            for (let i = 0; i < this.listeRDV.length; i++) {
              console.log("bon ", this.listeRDV[i].id)
              this.listePersonne.push(this.listeRDV[i].medecin);
            }
          },(error) => {
            console.error('Erreur lors du chargement des rendez-vous :', error);
          }
        );
      }
    }  
  }

  deleteRDV(id : any){
    this.rdvService.deleteRDV(id).subscribe(
      (data: Rdv) => {
        console.log(data)
        console.log("Supprimé")
        window.location.reload();
      },(error) => {
        console.error('Erreur lors de la suppression:', error);
      });
  }

}
