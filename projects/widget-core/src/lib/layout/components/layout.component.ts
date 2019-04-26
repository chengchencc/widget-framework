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

  // _classes: string[] = [];

  // @HostBinding("class.is-empty")
  // public get isEmpty(): boolean {
  //   return this.config.layout && this.config.layout.length == 0;
  // }

  // addOrRemove(express: boolean, className: string) {
  //   if (express) {
  //     if (!this._classes.includes(className)) {
  //       this._classes.push(className);
  //     }
  //   } else {
  //     if (this._classes.includes(className)) {
  //       this._classes.splice(this._classes.indexOf(className), 1);
  //     }
  //   }
  // }

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
