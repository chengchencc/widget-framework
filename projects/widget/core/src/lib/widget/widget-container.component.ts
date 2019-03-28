import { Component, OnInit, Input, ViewChild, ViewContainerRef, HostListener, Optional, ComponentFactory, Injector } from '@angular/core';
import { WidgetInfo } from '../common/page.interface';
import { DynamicLoaderService } from '../common/dynamic-loader.service';
import { LayoutService } from '../common/layout.service';
import { WidgetSettableDirective } from '../common/widget-settable.directive';

@Component({
  selector: 'widget-container',
  templateUrl: './widget-container.component.html',
  styleUrls: ['./widget-container.component.scss']
})
export class WidgetContainerComponent implements OnInit {
  @Input() info: WidgetInfo;

  @ViewChild("wc", { read: ViewContainerRef })
  container: ViewContainerRef;

  widgetInstance: any;
  widgetFactory:ComponentFactory<any>;
  widgetInjector:Injector;

  isLoading: boolean = false;

  constructor(
    private widgetLoader: DynamicLoaderService,
    private layoutService: LayoutService,
    // @Optional() private settable: WidgetSettableDirective
  ) { }

  async ngOnInit() {

    this.toggleLoading();

    console.log(this.info);

    const componentInfo = await this.widgetLoader.loadAndInitComponent(this.info.name);
    this.widgetFactory = componentInfo.componentFactory;
    this.widgetInjector = componentInfo.componentInjector;

    this.widgetInstance = this.container.createComponent(componentInfo.componentFactory, 0, componentInfo.componentInjector);

    this.toggleLoading();
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  //选择上级
  selectParent(event: MouseEvent) {
    // if (this.settable && this.settable.parent) {
    //   console.log(this.settable);
    //   this.settable.parent.select(event);
    // }
  }
}
