import { Component, HostListener, OnInit, Renderer2, ChangeDetectorRef, NgZone,ElementRef } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef, private zone: NgZone) {}

  
  ngOnInit() {
    window.addEventListener("load", () => {
      this.handlePreloader();
    });
}
  
  
  
  handlePreloader() {
        const preloader = this.renderer.selectRootElement("[data-preloader]");
    
        if (preloader) {
          this.renderer.addClass(preloader, 'loaded');
          this.renderer.addClass(document.body, 'loaded');
          console.log('loadedddddddd');
        }
      }

  
  

 
  
  
}
//  import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Projet';
  
// }


