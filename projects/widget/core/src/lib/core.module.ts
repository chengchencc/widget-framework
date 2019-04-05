import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//custom dnd
import { DraggableModule } from './dnd/draggable.module';
// custom components
import { LayoutComponent } from './layout';
import { WidgetContainerComponent } from './layout';
import { GridsterContainerComponent } from './layout';
import { SettingsGridComponent } from './layout';
import { PreviewComponent } from './preview/preview.component';
// provider

import { WidgetLoader } from './loader/widget-loader';
import { PageService } from './page/page.service';
import { LayoutService } from './layout/layout.service';
import { WidgetSettableDirective } from './settable/widget-settable.directive';
import { GridsterModule } from './gridster/gridster.module';

import { Widget_Core_Config_Token, DefaultWidgetCoreConfig } from './core.config';
import { Store } from './store/store';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DraggableModule,
    GridsterModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    PreviewComponent,
    WidgetContainerComponent,
    WidgetSettableDirective,
    GridsterContainerComponent,
    SettingsGridComponent
  ],
  providers: [
    Store,
    WidgetLoader,
    LayoutService,
    PageService
    // {provide:Widget_Core_Config_Token,useValue:DefaultWidgetCoreConfig}
  ],
  exports: [
    LayoutComponent,
    PreviewComponent,
    WidgetContainerComponent,
    WidgetSettableDirective,
    GridsterContainerComponent,
    SettingsGridComponent,
    DraggableModule,
    GridsterModule
  ]
})
export class CoreModule {
  // static forRoot(config: RuntimeConfig=defaultRuntimeConfig,replacedProviders:Provider[]=[]): ModuleWithProviders {
  //   return {
  //     ngModule: CoreModule,
  //     providers: [
  //       ...providers,
  //       ...replacedProviders,
  //       {provide: 'runtimeConfig', useValue: config }
  //     ]
  //   };
  // }
}
