import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChildComponentComponent } from '../child-component.component';

@Component({
  selector: 'app-parent-component',
  standalone:true,
  imports:[ChildComponentComponent,CommonModule],
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}