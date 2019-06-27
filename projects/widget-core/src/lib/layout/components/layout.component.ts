/**
 * @author [chengchen]
 * @email [chengchen216@hotmail.com]
 * @create date 2019-05-09 15:20:41
 * @modify date 2019-05-09 15:20:41
 * @desc [description]
 */

import { Component, OnInit, Input, HostListener, SkipSelf, Optional, HostBinding, ElementRef } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { WidgetDragEvent } from '../../dnd/draggable-model';
import { WidgetSettableDirective } from '../../settable/widget-settable.directive';
import { Layout } from '../../common/layout';
import { WidgetLoaderManifest } from '../../common/widget.interface';
import { LayoutConfig, LayoutTemplate } from '../../common/layout.interface';

@Component({
  selector: 'widget-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input()
  config: Layout;

  selected: boolean = false;

  private _parent: LayoutComponent;

  // bsModalRef: BsModalRef;

  constructor(
    @SkipSelf() @Optional() parentLayout: LayoutComponent,
    public elementRef: ElementRef,
    private sanitizer: DomSanitizer,
    @Optional() private settable:WidgetSettableDirective
    // private modalService: BsModalService
  ) {
    this._parent = parentLayout;

  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
  }

  move(event: WidgetDragEvent, ref: Layout) {
    let layoutConfig:LayoutConfig;

    if (event.data.type === "widget") {
      //drop的是部件
      const widgetManifest = <WidgetLoaderManifest>event.data.data;
      layoutConfig = {
        id: "",
        layout: [],
        type: 'widget',
        content: {
          name: widgetManifest.name
        }
      }
    } else {
      //drop的是layout
      var tpl = <LayoutTemplate>event.data;
      layoutConfig = tpl.layoutConfig;
      //TODO:需要调整type为tpl.name
      // layoutConfig.type = 'group';
      layoutConfig.type = tpl.name
    }
    ref.appendNode(layoutConfig);
  }



}
