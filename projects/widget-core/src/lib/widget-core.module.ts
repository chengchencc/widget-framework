/**
 * @author [chengchen]
 * @email [chengchen216@hotmail.com]
 * @create date 2019-05-09 15:19:10
 * @modify date 2019-05-09 15:19:10
 * @desc [description]
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PreviewComponent } from './preview/preview.component';
import { WidgetSettableDirective } from './settable/widget-settable.directive';
import { Store } from './store/store';
import { WidgetLoader } from './loader/widget-loader';
import { PageService } from './common/page.service';
import { Widget_Core_Config_Token, DefaultWidgetCoreConfig } from './core.config';
import { LayoutComponent } from './layout/components/layout.component';
import { WidgetContainerComponent } from './layout/components/widget-container/widget-container.component';
import { LayoutTemplateService } from './common/layout-template.service';
import { DraggableModule } from './dnd/draggable.module';
import { GridsterModule } from './gridster/gridster.module';
import { GridsterContainerComponent } from './layout/components/gridster-wrapper/gridster-container.component';
import { GridsterSettingsComponent } from './layout/components/gridster-settings/gridster-settings.component';
import { SettingService } from './settable/setting.sevice';
import { History } from './common/history';

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
    LayoutTemplateService,
    PageService,
    SettingService,
    History,
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
