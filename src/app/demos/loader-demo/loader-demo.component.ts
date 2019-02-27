import { Component, OnInit, inject, Inject, ViewChild, ViewContainerRef, Injector, ViewRef } from '@angular/core';
import { WidgetManager, RegistedWidgetManifest } from 'widget-core'; //'projects/widget-core/src/dynamic/widget-manifest';
import { Story, StoryInterface } from '../../core/common/story/story';
import { DynamicLoaderService } from './../../core/common/dynamic-loader.service';

@Component({
  selector: 'demo-loader-demo',
  templateUrl: './loader-demo.component.html',
  styleUrls: ['./loader-demo.component.scss']
})
export class LoaderDemoComponent implements OnInit {

  widgetRegisted:any[]=[];
  @ViewChild("widgetContainer", { read: ViewContainerRef }) widgetContainer:ViewContainerRef;

  constructor(@Inject(Story) story:StoryInterface,private widgetLoader:DynamicLoaderService,private injector: Injector,
  private viewContainer:ViewContainerRef) { 
    console.log(story.whoAmI());
    console.log(injector);

    console.log("viewcontainer",viewContainer);
    // console.log("viewref",viewRef);

  }

  ngOnInit() {

    // console.log(this.widgetLoader.getRegistries());

    // console.log(this.widgetLoader.loadWidgetLoaderManifest());

    // this.widgetRegisted = WidgetManager.prototype.getAllRegistries();
    // console.log(this.widgetRegisted);
  }

  async loadWidget(){

    const componentInfo = await this.widgetLoader.loadAndInitComponent("demo-widget");

    var componentInstance = this.widgetContainer.createComponent(componentInfo.componentFactory,0,componentInfo.componentInjector);

    this.widgetRegisted.push(componentInstance);
    // console.log(this.viewContainer);
    // this.viewContainer.createComponent(componentInfo.componentFactory,0,componentInfo.componentInjector);
    // this.widgetContainer.insert(componentInstance.hostView);
    componentInstance.hostView.destroy();
    console.log(componentInstance.hostView);
    console.log(this.widgetRegisted);
    console.log(WidgetManager.prototype.getAllRegistries());
  }

}
