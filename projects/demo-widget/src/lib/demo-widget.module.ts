import { NgModule } from '@angular/core';
import { DemoWidgetComponent } from './demo-widget.component';
import { DemoWidgetNavComponent } from './demo-widget-nav/demo-widget-nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { CardComponent } from './card/card.component';

import { GspWidgetChartjsComponent } from './chartjs/gsp-widget-chartjs.component';
import { GspWidgetChartjsSettingsComponent } from './chartjs/gsp-widget-chartjs-settings.component';

import { FormsModule } from '@angular/forms';


const c=[GspWidgetChartjsComponent,GspWidgetChartjsSettingsComponent];

@NgModule({
  declarations: [
    DemoWidgetComponent,
    DemoWidgetNavComponent, 
    JumbotronComponent, 
    FormLoginComponent, 
    CardComponent,
    ...c
  ],
  imports: [
    FormsModule
  ],
  exports: [DemoWidgetComponent]
})
export class DemoWidgetModule { }
