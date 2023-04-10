import { Component } from '@angular/core';
import { ChildComponent } from '../child.component';
//import {ChildComponent} from './child/child.component';
@Component({
  selector: 'app-parent',
  standalone:true,
  templateUrl: './parent.component.html',
  imports:[ChildComponent],
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
  currentItem = 'Television';
  constructor() { }
}
