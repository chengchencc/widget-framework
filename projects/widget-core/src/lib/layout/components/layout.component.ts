import { Component, OnInit, Input, HostListener, SkipSelf, Optional, HostBinding, ElementRef } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { LayoutService } from '../../common/layout.service';
import { WidgetDragEvent } from '../../dnd/draggable-model';
import { WidgetSettableDirective } from '../../settable/widget-settable.directive';
import { LayoutConfig, LayoutTemplate } from '../../common/layout.interface';

@Component({
  selector: 'widget-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input()
  config: LayoutConfig;
  templates: LayoutTemplate[];

  selected: boolean = false;

  private _parent: LayoutComponent;

  // bsModalRef: BsModalRef;

  constructor(
    @SkipSelf() @Optional() parentLayout: LayoutComponent,
    private layoutService: LayoutService,
    public elementRef: ElementRef,
    private sanitizer: DomSanitizer,
    @Optional() private settable:WidgetSettableDirective
    // private modalService: BsModalService
  ) {
    this._parent = parentLayout;
    this.templates = layoutService.layoutTemplates;

  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
  }

  move(event: WidgetDragEvent, ref: LayoutConfig) {
    this.layoutService.move(event, ref);
  }



}
