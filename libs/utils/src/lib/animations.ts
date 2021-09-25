import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';

export const inOutAnimation = trigger(
    'inOutAnimation',
    [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.5s ease-out', 
                style({ opacity: 0.5 })
              )
        ]
      ),
      transition(':leave', [
        style({opacity: 0.5}),
        animate('0.5s ease-out', 
                style({ opacity: 0 })
            )
        ]
      )
    ]
  );

export const collapseAnimation = trigger(
    'collapse',
    [
        state('false', style({ width: '100%', height: '100%' })),
        state('true', style({ width: '60%', height: '70%' })),
        transition('false => true', animate('700ms ease-in')),
        transition('true => false', animate('700ms ease-out'))
    ]
  );
  export const slideInAnimation =
    trigger('routeAnimations', [
      transition('SelectorScreen <=> ModelScreen', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [
          style({ left: '-100%' })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ])
        ]),
        query(':enter', animateChild()),
      ])
  ]);