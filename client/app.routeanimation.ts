import {trigger, stagger, animate, style, group, query, transition,state} from '@angular/animations';

/*export const footertransitions=  trigger('footertransitions', [ 
  transition('login <=>faqs',[
    query('sa-footer-con', style({ opacity: 0 })
    , { optional: true }),
    query('.sa-footer-con', stagger(1000, [
      style({ transform: 'translateX(-10000px)' }),
      animate('1s ease', style({ transform: 'translateX(0px)', opacity: 1 })),
    ]), { optional: true })
  ])
 
]);*/

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    query('.logotext', style({ opacity: 0 })
      , { optional: true }),
   
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('1s ease', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('1s ease', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ]),
    query(':enter .logotext', stagger(1000, [
      style({ transform: 'translateX(-10000px)' }),
      animate('1s ease', style({ transform: 'translateX(0px)', opacity: 1 })),
    ]), { optional: true })  

  ])
])