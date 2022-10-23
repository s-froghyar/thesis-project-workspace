import { animate, style, transition, trigger } from '@angular/animations';

export const bringUpNextPanel = trigger('bringUpPanel', [
  transition(':enter', [
    style({ bottom: '-20%' }),
    animate('0.5s ease-out', style({ bottom: 0 })),
  ]),
]);
