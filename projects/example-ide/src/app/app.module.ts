import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdeModule } from 'projects/widget/ide';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IdeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
