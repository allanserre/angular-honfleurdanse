import { Component, inject } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { simpleFadeAnimation, slideInAnimation } from './route-transition-animations';
import { Analytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation,
    simpleFadeAnimation
  ]
})
export class AppComponent {
  title = 'honfleurDanse';

  private analytics: Analytics = inject(Analytics);

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}


