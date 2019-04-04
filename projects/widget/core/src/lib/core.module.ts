import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//custom dnd
import { DraggableModule } from './dnd/draggable.module';
// custom components
import { LayoutComponent } from './layout/components/layout.component';
import { PreviewComponent } from './preview/preview.component';
// provider

import { WidgetLoader } from './loader/widget-loader';
import { PageService } from './page/page.service';
import { LayoutService } from './layout/layout.service';
import { WidgetSettableDirective } from './settable/widget-settable.directive';
import { GridsterModule } from './gridster/gridster.module';

import { Widget_Core_Config_Token, DefaultWidgetCoreConfig } from './core.config';
import { Store } from './store/store';
import { WidgetContainerComponent } from './layout/components/widget-container/widget-container.component';
import { GridsterContainerComponent } from './layout/components/gridster-wrapper/gridster-container.component';
import { SettingsGridComponent } from './layout/components/gridster-wrapper/settings-grid/settings-grid.component';

const declareAndExports = [
  LayoutComponent,
  PreviewComponent,
  WidgetContainerComponent,
  WidgetSettableDirective,
  GridsterContainerComponent,
  SettingsGridComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DraggableModule,
    GridsterModule,
    FormsModule
  ],
  declarations: [
    ...declareAndExports,
  ],
  providers: [
    Store,
    WidgetLoader,
    LayoutService,
    PageService,
    {provide:Widget_Core_Config_Token,useValue:DefaultWidgetCoreConfig}
  ],
  exports: [
    ...declareAndExports,
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
