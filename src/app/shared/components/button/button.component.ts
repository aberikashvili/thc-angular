import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
export type ButtonType = 'oranges' | 'blues';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type: ButtonType = 'oranges';

  @Output() clicked = new EventEmitter();

  get orange(): boolean {
    return this.type === 'oranges';
  }

  get blue(): boolean {
    return this.type === 'blues';
  }

  btnClicked() {
    this.clicked.emit();
  }
}
