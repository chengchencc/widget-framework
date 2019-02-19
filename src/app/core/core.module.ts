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

const declareAndExports = [
  LayoutComponent, 
  PreviewComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...declareAndExports
  ],
  providers:[
    // {provide:Story,useClass:StoryLocal}
  ],
  exports:[
    ...declareAndExports
  ]
})
export class CoreModule { }
