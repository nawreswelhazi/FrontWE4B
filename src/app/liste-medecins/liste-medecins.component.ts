import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MedecinServiceService } from '../services/medecin-service.service';
import { Medecin } from 'src/models/medecin';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-liste-medecins',
  templateUrl: './liste-medecins.component.html',
  styleUrls: ['./liste-medecins.component.css']
})
export class ListeMedecinsComponent implements OnInit {
  specialite!:string;
  ville!:string;
  medecins!:any;
  searchText:any;
  public userRole !: string | null;

  constructor(private activatedroute : ActivatedRoute,private MS: MedecinServiceService,private router:Router, private sessionService : SessionService) {



  }

  ngOnInit(): void {
    this.userRole = this.sessionService.getUserRole();
    this.specialite = this.activatedroute.snapshot.params['specialite']||null;
  this.ville = this.activatedroute.snapshot.params['ville']||null;
  console.log(this.specialite);
  console.log(this.ville);

  if(this.specialite!=null && this.ville!=null ){
    this.getMedecinsBySpecialiteVille();
  }else if(this.specialite!=null){
    this.getMedecinsBySpecialite();
  }else if(this.ville!=null){
    this.getMedecinsByVille();
  }
  else{
    this.getallMedecins();


  }
  }

   getallMedecins() {
     this.MS.getallMedecin().subscribe(res=>{
        console.log(res);
        this.medecins= res;
        console.log(this.medecins.length)

      })



   }
  getMedecinsBySpecialiteVille(){
    this.MS.getMedecinsBySpecialiteVille(this.specialite,this.ville).subscribe(res=>{
      console.log(res);
      this.medecins= res;

    })

  }
  getMedecinsBySpecialite(){
    this.MS.getMedecinsBySpecialite(this.specialite).subscribe(res=>{
      console.log(res);
      this.medecins= res;

    })

  }
  getMedecinsByVille(){
    this.MS.getMedecinsByVille(this.ville).subscribe(res=>{
      console.log(res);
      this.medecins= res;

    })

  }

  prendreRendezVous(medecin: Medecin) {
    console.log('Médecin sélectionné:', medecin);
    const doctorId = medecin.id;
    console.log(medecin.id)
    this.router.navigate([`prendreRDV/${doctorId}`]);
  }


}
