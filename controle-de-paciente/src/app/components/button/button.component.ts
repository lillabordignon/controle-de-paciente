import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{

  @Input() btnName: string;
  @Input() btnColor: string;
  @Input() btnIcon: string;
  @Input() btnHref: string;

  constructor() { }

}
