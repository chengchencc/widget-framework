import { Component, OnInit, inject, Inject, ViewChild, ViewContainerRef, Injector, ViewRef } from '@angular/core';
import { WidgetManager, RegistedWidgetManifest } from 'widget-core'; //'projects/widget-core/src/dynamic/widget-manifest';
import { Store, StoreInterface } from '../../core/common/store/store';
import { DynamicLoaderService } from '../../core/common/dynamic-loader.service';

@Component({
  selector: 'demo-loader-demo',
  templateUrl: './loader-demo.component.html',
  styleUrls: ['./loader-demo.component.scss']
})
export class LoaderDemoComponent implements OnInit {

  widgetRegisted:any[]=[];
  @ViewChild("widgetContainer", { read: ViewContainerRef }) widgetContainer:ViewContainerRef;

  constructor(@Inject(Store) story:StoreInterface,private widgetLoader:DynamicLoaderService,private injector: Injector,
  private viewContainer:ViewContainerRef) { 
    console.log(story.whoAmI());
    console.log(injector);

    console.log("viewcontainer",viewContainer);
    // console.log("viewref",viewRef);

  }

  ngOnInit() {

  }

  async loadWidget(){

    const componentInfo = await this.widgetLoader.loadAndInitComponent("demo-widget");

    var componentInstance = this.widgetContainer.createComponent(componentInfo.componentFactory,0,componentInfo.componentInjector);

    this.widgetRegisted.push(componentInstance);
    // console.log(this.viewContainer);
    // this.viewContainer.createComponent(componentInfo.componentFactory,0,componentInfo.componentInjector);
    // this.widgetContainer.insert(componentInstance.hostView);
    // componentInstance.hostView.destroy();
    console.log(componentInstance.hostView);
    console.log(this.widgetRegisted);
    console.log(WidgetManager.prototype.getAllRegistries());
  }

}
