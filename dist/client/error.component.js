"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ErrorComponent = class ErrorComponent {
};
ErrorComponent = __decorate([
    core_1.Component({
        template: `
    <div class="row sa-center" >
       <div class="col 12">
         <p style="font-size:2em;color:white;">
          Oops!!! something went wrong.
         </p>
         <div>
    </div>
    `,
        styles: [
            `
      .sa-center{
            position: absolute;
    left: 0;
    right: 0;
    top: 35%;
    width: 40%;
    text-align: center;
    background-color:darkgray;
  border-radius:3%;
     }      
      `
        ]
    })
], ErrorComponent);
exports.ErrorComponent = ErrorComponent;

//# sourceMappingURL=error.component.js.map
