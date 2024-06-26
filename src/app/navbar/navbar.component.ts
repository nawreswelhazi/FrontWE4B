import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userRole !: string | null;
  private location!: Location

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    this.userRole = this.sessionService.getUserRole();
  }

  logout(): void {
    this.sessionService.clearSession();
    this.router.navigate(['']);
  }

}
