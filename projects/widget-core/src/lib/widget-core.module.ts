import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PreviewComponent } from './preview/preview.component';
import { WidgetSettableDirective } from './settable/widget-settable.directive';
import { Store } from './store/store';
import { WidgetLoader } from './loader/widget-loader';
import { PageService } from './page/page.service';
import { Widget_Core_Config_Token, DefaultWidgetCoreConfig } from './core.config';
import { LayoutComponent } from './layout/components/layout.component';
import { WidgetContainerComponent } from './layout/components/widget-container/widget-container.component';
import { LayoutService } from './common/layout.service';
import { DraggableModule } from './dnd/draggable.module';
import { GridsterModule } from './gridster/gridster.module';
import { GridsterContainerComponent } from './layout/components/gridster-wrapper/gridster-container.component';
import { GridsterSettingsComponent } from './layout/components/gridster-settings/gridster-settings.component';
import { SettingService } from './settable/setting.sevice';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DraggableModule,
    GridsterModule,
  ],
  declarations: [
    LayoutComponent,
    PreviewComponent,
    WidgetContainerComponent,
    WidgetSettableDirective,
    GridsterContainerComponent,
    GridsterSettingsComponent
  ],
  providers:[
    Store,
    WidgetLoader,
    LayoutService,
    PageService,
    SettingService,
    {provide:Widget_Core_Config_Token,useValue:DefaultWidgetCoreConfig}
  ],
  exports: [    
    LayoutComponent,
    PreviewComponent,
    WidgetContainerComponent,
    WidgetSettableDirective,
    GridsterContainerComponent,
    GridsterSettingsComponent,
    DraggableModule,
    GridsterModule
  ]
})
export class WidgetCoreModule { 
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