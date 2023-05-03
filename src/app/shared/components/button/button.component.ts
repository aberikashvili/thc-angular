import { NgClass } from '@angular/common';
import { Component, EventEmitter,Input,Output } from '@angular/core';
export type ButtonType = 'oranges' | 'blues'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

 
  @Input() type:ButtonType='oranges'
  
  @Input() width?:string
 
  @Output() clicked= new EventEmitter();
 
   get customWidth():string | undefined {
      return this.width
   }

  get orange():boolean{
    return this.type==="oranges"
  }
  get blue():boolean{
    return this.type==="blues"
  }
  btnClicked(){
    this.clicked.emit()
  }


}
