import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { simpleFadeAnimation } from "../route-transition-animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    simpleFadeAnimation
  ]
})
export class HeaderComponent implements OnInit {

  isOpen = false
  private inside = false;

  constructor(private router: Router) {

    this.router.events.subscribe((event: any) => {
        if (event instanceof NavigationStart) {
            this.isOpen = false
        }

        // if (event instanceof NavigationEnd) {
        //    this.isOpen = false
        // }

        // if (event instanceof NavigationError) {
        //     this.isOpen = false
        // }

        // if (event instanceof  NavigationCancel) {
        //     this.isOpen = false
        // }
        
    });

}

  @HostListener('click')
  clickInside() {
    this.inside = true;
  }

  @HostListener('document:click')
  clickout() {
    if ( !this.inside )
     this.isOpen = false

    this.inside = false
  }


  ngOnInit(): void {
  }

  displayMenu() {
    this.isOpen = !this.isOpen
  }

}
