import { Component, OnInit, Input, ViewChild, ViewContainerRef, HostListener, Optional } from '@angular/core';
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

  widgetRegisted: any[] = [];

  isLoading: boolean = false;

  @Input() info: WidgetInfo;

  @ViewChild("wc", { read: ViewContainerRef })
  widgetContainer: ViewContainerRef;

  constructor(private widgetLoader: DynamicLoaderService,
    private layoutService: LayoutService,
    @Optional() private settable: WidgetSettableDirective
  ) { }

  async ngOnInit() {

    this.toggleLoading();

    console.log(this.info);

    const componentInfo = await this.widgetLoader.loadAndInitComponent(this.info.name);

    var componentInstance = this.widgetContainer.createComponent(componentInfo.componentFactory, 0, componentInfo.componentInjector);

    this.widgetRegisted.push(componentInstance);

    this.toggleLoading();
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }

  //选择上级
  selectParent(event: MouseEvent) {
    if (this.settable && this.settable.parent) {
      //this._parent.select(event);
      console.log(this.settable);
      this.settable.parent.select(event);
    }
  }
}
