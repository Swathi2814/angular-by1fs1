import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone:true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  imports:[FormsModule],
})
export class ChildComponent  {
  @Input() item = '';
}
