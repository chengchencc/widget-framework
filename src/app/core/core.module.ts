import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//custom dnd
import { DraggableModule } from './dnd/draggable.module';
// custom components
import { LayoutComponent } from './layout/layout.component';
import { PreviewComponent } from './preview/preview.component';
// provider
import { Story } from './common/story/story';
import { StoryLocal } from './common/story/story-local';
import { StoryHttp } from './common/story/story-http';
import { WidgetContainerComponent } from './widget/widget.component';
import { DynamicLoaderService } from './common/dynamic-loader.service';
import { PageService } from './common/page.service';
import { LayoutService } from './common/layout.service';

const declareAndExports = [
  LayoutComponent, 
  PreviewComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DraggableModule
  ],
  declarations: [
    ...declareAndExports,
    WidgetContainerComponent
  ],
  providers:[
    Story,
    DynamicLoaderService,
    LayoutService,
    PageService
  ],
  exports:[
    ...declareAndExports
  ]
})
export class CoreModule { }
