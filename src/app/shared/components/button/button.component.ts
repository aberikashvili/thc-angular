import { NgClass } from '@angular/common';
import { Component, EventEmitter,Input,Output } from '@angular/core';
export type ButtonType = 'orange' | 'blue'

@Component({
  selector: 'app-button',
  template: 'todo button test',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

 
  @Input() type:ButtonType='orange'

  @Output() clicked= new EventEmitter();
 


  get orange():boolean{
    return this.type==="orange"
  }
  get blue():boolean{
    return this.type==="blue"
  }
  btnClicked(){
    this.clicked.emit()
  }


}
