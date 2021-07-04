
import { trigger, transition, style, query, animateChild, animate, group, state } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        })
      ]),
      query(':enter', [
        style({ transform: 'translateY(-100px)', opacity: 0})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
			animate('250ms ease', style({ opacity : 0 , transform: 'translateY(-100px)' }))
        ]),
        query(':enter', [
			animate('250ms 300ms ease', style({ opacity : 1 , transform : 'translateY(0px)' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);


export const simpleFadeAnimation =  trigger('simpleFadeAnimation', [

	// the "in" style determines the "resting" state of the element when it is visible.
	state('in', style({opacity: 1})),

	// fade in when created. this could also be written as transition('void => *')
	transition(':enter', [
	  style({opacity: 0 , transform: 'translateY(-100%)'}),
	  animate('1500ms ease' )
	]),

	// fade out when destroyed. this could also be written as transition('void => *')
	transition(':leave',
	  animate('500ms', style({opacity: 0 , transform: 'translateX(-100%)'})
	  ))
  ]);