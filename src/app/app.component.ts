import { Component, HostListener, OnInit, Renderer2, ChangeDetectorRef, NgZone,ElementRef } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef, private zone: NgZone) {}

  
  ngOnInit() {
    
    this.setupEventListeners();
    this.zone.runOutsideAngular(() => {
      window.addEventListener("scroll", () => {
        this.handleScroll();
        this.cdr.detectChanges();
      });
    });
    window.addEventListener("load", () => {
      this.handlePreloader();
      this.revealElementOnScroll();
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
  // toggleNav() {
  //   const navbar = this.renderer.selectRootElement("[data-navbar]");
  //   const overlay = this.renderer.selectRootElement("[data-overlay]");

  //   if (navbar && overlay) {
  //     this.renderer.removeClass(navbar, 'active');
  //     this.renderer.removeClass(overlay, 'active');
  //     this.renderer.removeClass(document.body, 'nav-active');
  //   }
  // }
  // activeElementOnScroll() {
  //   const header = this.renderer.selectRootElement("[data-header]");
  //   const backTopBtn = this.renderer.selectRootElement("[data-back-top-btn]");

  //   if (header && backTopBtn) {
  //     if (window.scrollY > 100) {
  //       this.renderer.addClass(header, 'active');
  //       this.renderer.addClass(backTopBtn, 'active');
  //     } else {
  //       this.renderer.removeClass(header, 'active');
  //       this.renderer.removeClass(backTopBtn, 'active');
  //     }
  //   }
  // }
  revealElementOnScroll() {
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    for (let i = 0, len = revealElements.length; i < len; i++) {
      if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
        this.renderer.addClass(revealElements[i], 'revealed');
      } else {
        this.renderer.removeClass(revealElements[i], 'revealed');
      }
    }
  }

  @HostListener('window:scroll', [])
  handleScroll() {
    console.log("Handling scroll");
    // this.activeElementOnScroll();
    this.revealElementOnScroll();
  }
  addEventOnElements(elements: NodeListOf<Element>, eventType: string, callback: EventListener) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  }


  setupEventListeners() {
    // this.addEventOnElements(document.querySelectorAll("[data-nav-toggler]"), "click", this.toggleNav.bind(this));
    window.addEventListener("scroll", this.handleScroll.bind(this));
    window.addEventListener("load", this.revealElementOnScroll.bind(this));
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


