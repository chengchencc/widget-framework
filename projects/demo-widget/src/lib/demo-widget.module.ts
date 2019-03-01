import { NgModule } from '@angular/core';
import { DemoWidgetComponent } from './demo-widget.component';
import { DemoWidgetNavComponent } from './demo-widget-nav/demo-widget-nav.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [DemoWidgetComponent, DemoWidgetNavComponent, JumbotronComponent, FormLoginComponent, CardComponent],
  imports: [
  ],
  exports: [DemoWidgetComponent]
})
export class DemoWidgetModule { }
