"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.routerTransition = animations_1.trigger('routerTransition', [
    animations_1.transition('* <=> *', [
        animations_1.query(':enter, :leave', animations_1.style({ position: 'fixed', width: '100%' }), { optional: true }),
        animations_1.query('.logotext', animations_1.style({ opacity: 0 }), { optional: true }),
        animations_1.group([
            animations_1.query(':enter', [
                animations_1.style({ transform: 'translateX(100%)' }),
                animations_1.animate('1s ease', animations_1.style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            animations_1.query(':leave', [
                animations_1.style({ transform: 'translateX(0%)' }),
                animations_1.animate('1s ease', animations_1.style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ]),
        animations_1.query(':enter .logotext', animations_1.stagger(1000, [
            animations_1.style({ transform: 'translateX(-10000px)' }),
            animations_1.animate('1s ease', animations_1.style({ transform: 'translateX(0px)', opacity: 1 })),
        ]), { optional: true }),
    ])
]);

//# sourceMappingURL=app.routeanimation.js.map
