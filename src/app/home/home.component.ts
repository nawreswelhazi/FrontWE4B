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
  getMedecins(){
    console.log(this.specialite);
    console.log(this.ville);
    this.router.navigate(['/', 'liste-medecins', this.specialite,this.ville])

  }
  rendezVous(){
    this.router.navigate(['/','login']);
  }
}
