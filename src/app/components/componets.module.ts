import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderTitleComponent } from './header-title/header-title.component';
import { CardLineComponent } from './card-line/card-line.component';

import { BalanceCardComponent } from './balance-card/balance-card.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ClientCardComponent } from './client-card/client-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { BgcolorDirective } from '../directives/bgColor.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderTitleComponent,
    CardLineComponent,
    BalanceCardComponent,
    CreditCardComponent,
    ClientCardComponent,
    DebitCardComponent,
    BgcolorDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
   NgOptimizedImage
  ],
  exports: [
    HeaderComponent,
    HeaderTitleComponent,
    CardLineComponent,
    BalanceCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    ClientCardComponent,
    BgcolorDirective
  ],
  providers: [],

})
export class ComponetsModule { }
