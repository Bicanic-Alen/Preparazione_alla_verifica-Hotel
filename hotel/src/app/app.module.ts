import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListaPrenComponent } from './lista-pren/lista-pren.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPrenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
