import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeDemoComponent } from './make-demo/make-demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { Widget1Component } from './widget1/widget1.component';
import { LoaderDemoComponent } from './loader-demo/loader-demo.component';

@NgModule({
  declarations: [MakeDemoComponent, Widget1Component, LoaderDemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
