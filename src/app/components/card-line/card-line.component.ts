import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-line',
  templateUrl: './card-line.component.html',
  styleUrl: './card-line.component.scss'
})
export class CardLineComponent {

  @Input('content') itemContent: string = '';
  @Input() itemValue: string = '';
  @Input() isa: boolean = true;

}
