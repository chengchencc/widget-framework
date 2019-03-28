import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeDemoComponent } from './make-demo/make-demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { LoaderDemoComponent } from './loader-demo/loader-demo.component';
import { CoreModule } from '@widget/core';
import { BstoastComponent, BsToastService } from './bstoast/bstoast.component';

import { OverlayModule } from "@angular/cdk/overlay";
import { IframeComponent } from './iframe/iframe.component';
import { DraggableModule } from '@widget/core';
// import { StoreHttp } from '@widget/core';
import { Store } from '@widget/core';
import { CheckObjectChangeDemoComponent } from './check-object-change-demo/check-object-change-demo.component';
import { DemoComponent } from './demo.component';


@NgModule({
  declarations: [MakeDemoComponent, LoaderDemoComponent, BstoastComponent, IframeComponent, CheckObjectChangeDemoComponent, DemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    // CoreModule.forRoot({runtimeType:"runtime"},[{provide:Store,useClass:Store}]),
    CoreModule.forRoot(),
    OverlayModule,
    DraggableModule
  ],
  exports:[
    BstoastComponent
  ],
  entryComponents:[
    BstoastComponent
  ],
  providers:[
    BsToastService
  ]
})
export class DemoModule { }
