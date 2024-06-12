import { Component, Input } from '@angular/core';


type color = 'orange' | 'cyan';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input('color') colorBackground: color = 'orange';
  @Input('value') headerValue: string = '';
  @Input('titleInput') titleInput:string = '';
  @Input('imgPath') imagePath: string = '';

}
