import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app-component/app-component.component';
import {ParentComponent} from './child/parent/parent.component';
import { ParentComponentComponent } from './child-component/parent-component/parent-component.component';
// @Component({
//   selector: 'app-example',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <h1>Hello from {{name}}!</h1>
//     <a target="_blank" href="https://angular.io/start">
//       Learn more about Angular 
//     </a>
//   `,
// })
// export class App {
//   name = 'Angular';
// }

bootstrapApplication(ParentComponentComponent);
