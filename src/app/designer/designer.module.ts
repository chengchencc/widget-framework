import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignerRoutingModule } from './designer-routing.module';
import { IdeModule } from '@widget/ide';

@NgModule({
    declarations: [],
    imports: [ CommonModule,IdeModule,DesignerRoutingModule ],
    exports: [],
    providers: [],
})
export class DesignerModule {}