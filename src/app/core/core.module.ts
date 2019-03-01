import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//custom dnd
import { DraggableModule } from './dnd/draggable.module';
// custom components
import { LayoutComponent } from './layout/layout.component';
import { PreviewComponent } from './preview/preview.component';
// provider
import { Store } from './common/store/store';
import { StoreLocal } from './common/store/store-local';
import { StoreHttp } from './common/store/store-http';
import { WidgetContainerComponent } from './widget/widget-container.component';
import { DynamicLoaderService } from './common/dynamic-loader.service';
import { PageService } from './common/page.service';
import { LayoutService } from './common/layout.service';
import { RuntimeConfig } from './common/page.interface';
import { WidgetSettableDirective } from './common/widget-settable.directive';

const declareAndExports = [
  LayoutComponent,
  PreviewComponent,
  WidgetContainerComponent,
  WidgetSettableDirective
];

const providers = [
  Store,
  // DynamicLoaderService,
  // LayoutService,
  PageService];

  const defaultRuntimeConfig:RuntimeConfig={
    runtimeType:'design'
  };

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DraggableModule
  ],
  declarations: [
    ...declareAndExports
    
  ],
  providers:[
  DynamicLoaderService,
  LayoutService
  ],
  exports: [
    ...declareAndExports
  ]
})
export class CoreModule {
  static forRoot(config: RuntimeConfig=defaultRuntimeConfig,replacedProviders:Provider[]=[]): ModuleWithProviders {

    //合并默认provider与replaced providers
    const endpointProviders = [...providers,...replacedProviders];

    console.log(config);
    
    const result = {
      ngModule: CoreModule,
      providers: [
        ...endpointProviders,
        {provide: 'runtimeConfig', useValue: config}
      ]
    };
    return result;
  }

}
