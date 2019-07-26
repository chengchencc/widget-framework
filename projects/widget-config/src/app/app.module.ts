import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

import { WidgetCoreModule } from 'projects/widget-core/src/public-api';

import { AppComponent } from './app.component';
import { WidgetListPageComponent } from './pages/widget-list-page/widget-list-page.component';
import { CalcuFieldComponent } from './modals/calcu-field/calcu-field.component';
import { MonthFilterComponent } from './modals/month-filter/month-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    WidgetListPageComponent,
    CalcuFieldComponent,
    MonthFilterComponent
  ],
  entryComponents: [
    CalcuFieldComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    WidgetCoreModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
