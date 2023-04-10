import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-example',
  standalone: true,
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.css']
})
export class AppComponent implements OnInit {
  myBlog:string="sss";
  constructor() { }
  
  ngOnInit() {
  }

}

// @Component({
//   selector: 'app-example',
//   standalone: true,
//   imports: [FormsModule],
//   template: `
//   <div>
//   <input [value]='myBlog'>      
//   </div>
//   <h1>Product</h1>
// <button (click)='additems()'>
//     Add Product
// </button>
// <div class="container">
// <input [(ngModel)]='name' />
// <br/>
// <h1>Hello {{name}}</h1>
// </div>

//   `
// })
// export class AppComponent {
//   myBlog: string = "My First Angular Blog";
//   name: string="zara";
//   additems() {
//     console.log('add items');
// }
// }
// @Component({
//   template: `
//       Data recieved: {{data}}
//       <child (deposit)="depositMoulah"></child>    
//   `
// })
// export class Parent {
//   data = null;
//   depositMoulah($event) {
//       this.data = $event.value
//       // ...
//   }
// }
