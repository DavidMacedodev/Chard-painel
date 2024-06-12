import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { compileComponentClassMetadata } from '@angular/compiler';
import { ComponetsModule } from './components/componets.module';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
