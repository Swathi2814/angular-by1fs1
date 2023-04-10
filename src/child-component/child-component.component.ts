import {Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone:true,
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent  {

  constructor() { }
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}