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
import { SearchInputComponent } from './comps/search-input/search-input.component';
import { RouterModule } from '@angular/router';
import { ManageTmplPageComponent } from './pages/manage-tmpl-page/manage-tmpl-page.component';
import { SearchableListComponent } from './comps/searchable-list/searchable-list.component';

const appRoutes = [
  { path: 'widget-config', component: WidgetListPageComponent },
  { path: 'manage-tmpl', component: ManageTmplPageComponent },
  { path: 'add-tmpl', component: WidgetListPageComponent },
  { path: 'distribute-tmpl', component: WidgetListPageComponent },
  { path: '',
    redirectTo: '/widget-config',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WidgetListPageComponent,
    CalcuFieldComponent,
    MonthFilterComponent,
    SearchInputComponent,
    ManageTmplPageComponent,
    SearchableListComponent
  ],
  entryComponents: [
    CalcuFieldComponent,
    MonthFilterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
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
