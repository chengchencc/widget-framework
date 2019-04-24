import { Component,Input, ViewChild, ViewContainerRef, HostListener, Optional, ComponentFactory, Injector, OnInit } from '@angular/core';
import { WidgetInfo } from '../../../common/layout.interface';
import { LayoutService } from '../../../common/layout.service';
import { WidgetLoader } from '../../../loader/widget-loader';

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
    private widgetLoader: WidgetLoader,
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
