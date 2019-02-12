import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeDemoComponent } from './make-demo/make-demo.component';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [MakeDemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
