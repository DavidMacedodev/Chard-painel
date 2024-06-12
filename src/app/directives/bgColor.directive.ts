import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class BgcolorDirective {


  @HostBinding('style.backgroundColor') bgColor: string = 'white';
}
