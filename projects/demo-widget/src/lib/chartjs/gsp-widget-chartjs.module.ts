import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GspWidgetChartjsComponent } from './gsp-widget-chartjs.component';
import { GspWidgetChartjsSettingsComponent } from './gsp-widget-chartjs-settings.component';



const c=[GspWidgetChartjsComponent,GspWidgetChartjsSettingsComponent];

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [...c],
  exports: [...c]
})
export class GspWidgetChartjsModule { }
