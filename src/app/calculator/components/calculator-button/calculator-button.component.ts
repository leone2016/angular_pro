import {ChangeDetectionStrategy, Component, HostBinding, input, OnInit} from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calculator-button.component.css'],
  host: {
    'class': 'w-1/4 border-r border-b border-indigo-400',
    'attribute': 'hola-leo',
    //'data-sizes': '33vw',
  }
})
export class CalculatorButtonComponent implements OnInit {
  public isCommand = input(false, {
    transform: (value: boolean | string) => {
      return typeof value === 'string' ? value === '' : value;
    }
  });

  @HostBinding('class.is-command') get commandStyle() {
    return this.isCommand();
  }
  ngOnInit(): void {
    console.log(this.isCommand());
  }


}
