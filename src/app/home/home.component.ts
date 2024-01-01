import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 specialite!:string
 ville!:string
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  specialiteChoisit(data:string){
    this.specialite=data;
    // this.getMedecins();
    console.log(data);

  }
  getMedecins(){
    // console.log(this.specialite);
    // console.log(this.ville);
    if(this.specialite==undefined){
      this.specialite="";
    }
    if(this.ville==undefined){
      this.ville="";
    }
    console.log(this.specialite);
    console.log(this.ville);
    this.router.navigate(['/', 'liste-medecins', this.specialite,this.ville]);

  }
  rendezVous(){
    this.router.navigate(['/','login']);
  }
}
