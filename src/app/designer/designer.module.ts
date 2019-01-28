import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignerComponent } from './designer.component';
import { DesignerRoutingModule } from './designer-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DesignerRoutingModule
  ],
  declarations: [DesignerComponent]
})
export class DesignerModule { }
