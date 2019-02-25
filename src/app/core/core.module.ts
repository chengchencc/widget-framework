import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

const declareAndExports = [
  LayoutComponent, 
  PreviewComponent
];

@NgModule({
  imports: [
    CommonModule,
    DraggableModule
  ],
  declarations: [
    ...declareAndExports,
    WidgetContainerComponent
  ],
  providers:[
    // {provide:Story,useClass:StoryLocal}
  ],
  exports:[
    ...declareAndExports
  ]
})
export class CoreModule { }
