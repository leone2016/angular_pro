import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'w-1/4 border-r border-b border-indigo-400',
    'attribute': 'hola-leo',
    //'data-sizes': '33vw',
  }
})
export class CalculatorButtonComponent {
}