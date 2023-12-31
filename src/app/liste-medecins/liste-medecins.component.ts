import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedecinServiceService } from '../services/medecin-service.service';

@Component({
  selector: 'app-liste-medecins',
  templateUrl: './liste-medecins.component.html',
  styleUrls: ['./liste-medecins.component.css']
})
export class ListeMedecinsComponent implements OnInit {
  specialite!:string;
  ville!:string;
  medecins!:any;

  constructor(private activatedroute : ActivatedRoute,private MS: MedecinServiceService) { 
  


  }

  ngOnInit(): void {
    this.specialite = this.activatedroute.snapshot.params['specialite'];
  this.ville = this.activatedroute.snapshot.params['ville'];
    this.getMedecinsBySpecialiteVille();
  }
  getMedecinsBySpecialiteVille(){
    this.MS.getMedecinsBySpecialiteVille(this.specialite,this.ville).subscribe(res=>{
      console.log(res);
      this.medecins= res;

    })

  }


}
