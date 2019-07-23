import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WidgetListPageComponent } from './pages/widget-list-page/widget-list-page.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetCoreModule } from 'projects/widget-core/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    WidgetListPageComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    FormsModule,
    WidgetCoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
