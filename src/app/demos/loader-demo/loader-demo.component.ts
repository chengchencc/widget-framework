import { Component, OnInit, inject, Inject } from '@angular/core';
import { WidgetManager, RegistedWidgetManifest } from 'widget-core'; //'projects/widget-core/src/dynamic/widget-manifest';
import { Story, StoryInterface } from '../../core/common/story/story';

@Component({
  selector: 'demo-loader-demo',
  templateUrl: './loader-demo.component.html',
  styleUrls: ['./loader-demo.component.scss']
})
export class LoaderDemoComponent implements OnInit {

  widgetRegisted:any;

  constructor(@Inject(Story) story:StoryInterface) { 
    console.log(story.whoAmI());

  }

  ngOnInit() {
    this.widgetRegisted = WidgetManager.getAllRegistries();
    console.log(this.widgetRegisted);
  }

}
