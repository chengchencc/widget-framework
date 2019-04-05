import { Component, OnInit, Input, Optional, ViewChild, ElementRef, HostBinding } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { GridsterItem, GridsterConfig, GridsterComponent, GridsterComponentInterface, GridType, CompactType, DisplayGrid } from '../../../gridster';
import { LayoutConfig } from '../../layout.interface';
import { deepClone } from '../../../utils/object';
import { WidgetSettableDirective } from '../../../settable/widget-settable.directive';
import { DroppableService } from '../../../dnd/droppable.service';
import { WidgetDragEvent } from '../../../dnd/draggable-model';
import { WidgetLoaderManifest } from '../../../loader/widget-loader';
import { GridsterUtils } from '../../../gridster/gridsterUtils.service';

@Component({
  selector: 'gridster-container',
  templateUrl:'./gridster-container.component.html',
  styles: [``],
  // host:{'[attr.disabled]':'true'}
})
export class GridsterContainerComponent implements OnInit {

  initialItem: GridsterItem | null;
  emptyCellClick: Function | null;
  emptyCellClickTouch: Function | null;
  emptyCellContextMenu: Function | null;
  emptyCellDrop: Function | null;
  emptyCellDrag: Function | null;
  emptyCellDragTouch: Function | null;
  emptyCellMMove: Function;
  emptyCellMMoveTouch: Function;
  emptyCellUp: Function;
  emptyCellUpTouch: Function;
  emptyCellMove: Function | null;
  emptyCellExit: Function | null;

  @Input() config: LayoutConfig;


  public get options(): GridsterConfig {

    // return Object.assign({},gridDefaultSettings,this.config.settings);

    if(!this.config.settings){
      this.config.settings = deepClone(gridDefaultSettings);
    }

    return this.config.settings;
  }

  public get gridItems(): GridsterItem[] {
    return this.config.content
  }
  @HostBinding("class.selected") isSelected=false;

  @ViewChild(GridsterComponent)
  private gridster: GridsterComponentInterface;

  constructor(@Optional() private settable: WidgetSettableDirective,
    private dndService: DroppableService,
    private elementRef:ElementRef,
    private toast:ToastrService
  ) { }


  ngOnInit(): void {
    console.log(this.gridster);
  }

  //选择上级
  selectParent(event: MouseEvent) {
    if (this.settable && this.settable.parent) {
      //this._parent.select(event);
      console.log(this.settable);
      this.settable.parent.select(event);
    }
  }

  onDrop(event:WidgetDragEvent){
    console.log("onDrop::",event);
    
    if(event.data.type !== "widget"){
      // console.log();
      // this.elementRef.nativeElement.style.cursor="not-allowed";
      this.toast.info("cannot !");
      return;
    }

    const w = <WidgetLoaderManifest> event.data.data;

    let {cols,rows}={cols:1,rows:1};
    if(w.grid)
    {
      cols = w.grid.cols;
      rows = w.grid.rows;
    }

    const item = this.getValidItemFromEvent(event.event,null,cols,rows);
    if (!item) {
      return;
    }


    const widgetLayout:LayoutConfig = {
      id:"",
      layout:[],
      type:'widget',
      content:{
        name:w.name
      }
    }

    item["layout"] = widgetLayout;

    console.log(event);

    this.gridItems.push(item);

    this.gridster.cdRef.markForCheck();

    this.gridster.movingItem = null;
    this.gridster.previewStyle();
  }

  onDragOver(event:WidgetDragEvent){
    // console.log("on drag over::",event);
    // this.emptyCellDragOver(event.event);
    const e = event.event;
    const data = event.data;
    e.preventDefault();
    e.stopPropagation();
    if(event.data.type !== "widget"){
      // console.log();
      // this.elementRef.nativeElement.style.cursor="not-allowed";
      return;
    }
    const w = <WidgetLoaderManifest> event.data.data;

    let cols=1,rows=1;
    if(w.grid)
    {
      cols = w.grid.cols;
      rows = w.grid.rows;
    }

    const item = this.getValidItemFromEvent(e,null,cols,rows);

    if (item) {
      // e.dataTransfer.dropEffect = 'move';
      this.gridster.movingItem = item;
    } else {
      // e.dataTransfer.dropEffect = 'none';
      this.gridster.movingItem = null;
    }
    this.gridster.previewStyle();

  }

  onDragLeave(event:WidgetDragEvent){
    console.log("grid drag leave!!",event);
    this.gridster.previewStyle();
  }
  onSelected(event:boolean){
    this.isSelected = event;
  }

  destroy(): void {
    delete this.initialItem;
    delete this.gridster.movingItem;
    if (this.gridster.previewStyle) {
      this.gridster.previewStyle();
    }
    delete this.gridster;
    if (this.emptyCellExit) {
      this.emptyCellExit();
      this.emptyCellExit = null;
    }
  }

  // updateOptions(): void {
  //   console.log("updateOptions........................");
  //   if (this.gridster.$options.enableEmptyCellClick && !this.emptyCellClick && this.gridster.options.emptyCellClickCallback) {
  //     this.emptyCellClick = this.gridster.renderer.listen(this.gridster.el, 'click', this.emptyCellClickCb.bind(this));
  //     this.emptyCellClickTouch = this.gridster.renderer.listen(this.gridster.el, 'touchend', this.emptyCellClickCb.bind(this));
  //   } else if (!this.gridster.$options.enableEmptyCellClick && this.emptyCellClick && this.emptyCellClickTouch) {
  //     this.emptyCellClick();
  //     this.emptyCellClickTouch();
  //     this.emptyCellClick = null;
  //     this.emptyCellClickTouch = null;
  //   }
  //   if (this.gridster.$options.enableEmptyCellContextMenu && !this.emptyCellContextMenu &&
  //     this.gridster.options.emptyCellContextMenuCallback) {
  //     this.emptyCellContextMenu = this.gridster.renderer.listen(this.gridster.el, 'contextmenu', this.emptyCellContextMenuCb.bind(this));
  //   } else if (!this.gridster.$options.enableEmptyCellContextMenu && this.emptyCellContextMenu) {
  //     this.emptyCellContextMenu();
  //     this.emptyCellContextMenu = null;
  //   }
  //   if (this.gridster.$options.enableEmptyCellDrop && !this.emptyCellDrop && this.gridster.options.emptyCellDropCallback) {

  //     // console.log(this.dndService);
  //     // this.dndService.dragMove$.subscribe(wevent=>{
  //     //   console.log("moving",wevent);
  //     //   this.emptyCellDragOver.bind(this)(wevent.event);
  //     // })

  //     this.emptyCellDrop = this.gridster.renderer.listen(this.gridster.el, 'drop', this.emptyCellDragDrop.bind(this));
  //     this.gridster.zone.runOutsideAngular(() => {
  //       this.emptyCellMove = this.gridster.renderer.listen(this.gridster.el, 'dragover', this.emptyCellDragOver.bind(this));
  //     });
  //     this.emptyCellExit = this.gridster.renderer.listen('document', 'dragend', () => {
  //       this.gridster.movingItem = null;
  //       this.gridster.previewStyle();
  //     });
  //   } else if (!this.gridster.$options.enableEmptyCellDrop && this.emptyCellDrop && this.emptyCellMove && this.emptyCellExit) {
  //     this.emptyCellDrop();
  //     this.emptyCellMove();
  //     this.emptyCellExit();
  //     this.emptyCellMove = null;
  //     this.emptyCellDrop = null;
  //     this.emptyCellExit = null;
  //   }
  //   if (this.gridster.$options.enableEmptyCellDrag && !this.emptyCellDrag && this.gridster.options.emptyCellDragCallback) {
  //     this.emptyCellDrag = this.gridster.renderer.listen(this.gridster.el, 'mousedown', this.emptyCellMouseDown.bind(this));
  //     this.emptyCellDragTouch = this.gridster.renderer.listen(this.gridster.el, 'touchstart', this.emptyCellMouseDown.bind(this));
  //   } else if (!this.gridster.$options.enableEmptyCellDrag && this.emptyCellDrag && this.emptyCellDragTouch) {
  //     this.emptyCellDrag();
  //     this.emptyCellDragTouch();
  //     this.emptyCellDrag = null;
  //     this.emptyCellDragTouch = null;
  //   }
  // }

  emptyCellClickCb(e: any): void {
    if (this.gridster.movingItem || GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
      return;
    }
    const item = this.getValidItemFromEvent(e);
    if (!item) {
      return;
    }
    if (this.gridster.options.emptyCellClickCallback) {
      this.gridster.options.emptyCellClickCallback(e, item);
    }
    this.gridster.cdRef.markForCheck();
  }

  emptyCellContextMenuCb(e: any): void {
    if (this.gridster.movingItem || GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const item = this.getValidItemFromEvent(e);
    if (!item) {
      return;
    }
    if (this.gridster.options.emptyCellContextMenuCallback) {
      this.gridster.options.emptyCellContextMenuCallback(e, item);
    }
    this.gridster.cdRef.markForCheck();
  }

  emptyCellDragDrop(e: any): void {
    // const item = this.getValidItemFromEvent(e);
    // if (!item) {
    //   return;
    // }

    // // if (this.gridster.options.emptyCellDropCallback) {
    // //   this.gridster.options.emptyCellDropCallback(e, item);
    // // }

    // this.gridItems.push(item);

    // this.gridster.cdRef.markForCheck();
  }

  emptyCellDragOver(e: any): void {
    e.preventDefault();
    e.stopPropagation();
    const item = this.getValidItemFromEvent(e);
    if (item) {
      // e.dataTransfer.dropEffect = 'move';
      this.gridster.movingItem = item;
    } else {
      // e.dataTransfer.dropEffect = 'none';
      this.gridster.movingItem = null;
    }
    this.gridster.previewStyle();
  }

  emptyCellMouseDown(e: any): void {
    if (GridsterUtils.checkContentClassForEmptyCellClickEvent(this.gridster, e)) {
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    const item = this.getValidItemFromEvent(e);
    const leftMouseButtonCode = 1;
    if (!item || e.buttons !== leftMouseButtonCode) {
      return;
    }
    this.initialItem = item;
    this.gridster.movingItem = item;
    this.gridster.previewStyle();
    this.gridster.zone.runOutsideAngular(() => {
      this.emptyCellMMove = this.gridster.renderer.listen('window', 'mousemove', this.emptyCellMouseMove.bind(this));
      this.emptyCellMMoveTouch = this.gridster.renderer.listen('window', 'touchmove', this.emptyCellMouseMove.bind(this));
    });
    this.emptyCellUp = this.gridster.renderer.listen('window', 'mouseup', this.emptyCellMouseUp.bind(this));
    this.emptyCellUpTouch = this.gridster.renderer.listen('window', 'touchend', this.emptyCellMouseUp.bind(this));
  }

  emptyCellMouseMove(e: any): void {
    e.preventDefault();
    e.stopPropagation();
    const item = this.getValidItemFromEvent(e, this.initialItem);
    if (!item) {
      return;
    }

    this.gridster.movingItem = item;
    this.gridster.previewStyle();
  }

  emptyCellMouseUp(e: any): void {
    this.emptyCellMMove();
    this.emptyCellMMoveTouch();
    this.emptyCellUp();
    this.emptyCellUpTouch();
    const item = this.getValidItemFromEvent(e, this.initialItem);
    if (item) {
      this.gridster.movingItem = item;
    }
    if (this.gridster.options.emptyCellDragCallback && this.gridster.movingItem) {
      this.gridster.options.emptyCellDragCallback(e, this.gridster.movingItem);
    }
    setTimeout(() => {
      this.initialItem = null;
      if (this.gridster) {
        this.gridster.movingItem = null;
        this.gridster.previewStyle();
      }
    });
    this.gridster.cdRef.markForCheck();
  }

  getValidItemFromEvent(e: any, oldItem?: GridsterItem | null,cols?:number|null,rows?:number|null): GridsterItem | undefined {
    e.preventDefault();
    e.stopPropagation();
    GridsterUtils.checkTouchEvent(e);
    const rect = this.gridster.el.getBoundingClientRect();
    const x = e.clientX + this.gridster.el.scrollLeft - rect.left - this.gridster.$options.margin;
    const y = e.clientY + this.gridster.el.scrollTop - rect.top - this.gridster.$options.margin;
    const item: GridsterItem = {
      x: this.gridster.pixelsToPositionX(x, Math.floor, true),
      y: this.gridster.pixelsToPositionY(y, Math.floor, true),
      cols: cols ||this.gridster.$options.defaultItemCols,
      rows: rows || this.gridster.$options.defaultItemRows
    };
    if (oldItem) {
      item.cols = Math.min(Math.abs(oldItem.x - item.x) + 1, this.gridster.$options.emptyCellDragMaxCols);
      item.rows = Math.min(Math.abs(oldItem.y - item.y) + 1, this.gridster.$options.emptyCellDragMaxRows);
      if (oldItem.x < item.x) {
        item.x = oldItem.x;
      } else if (oldItem.x - item.x > this.gridster.$options.emptyCellDragMaxCols - 1) {
        item.x = this.gridster.movingItem ? this.gridster.movingItem.x : 0;
      }
      if (oldItem.y < item.y) {
        item.y = oldItem.y;
      } else if (oldItem.y - item.y > this.gridster.$options.emptyCellDragMaxRows - 1) {
        item.y = this.gridster.movingItem ? this.gridster.movingItem.y : 0;
      }
    }
    if (this.gridster.checkCollision(item)) {
      return;
    }
    return item;
  }

}

/* 
  class
*/

const emptyCellClick = function(event: MouseEvent, item: GridsterItem) {
  console.info('empty cell click', event, item);
  // this.widgets.push(item);
}

const gridDefaultSettings = {
  gridType: GridType.Fixed,
  compactType: CompactType.None,
  margin: 10,
  outerMargin: true,
  outerMarginTop: null,
  outerMarginRight: null,
  outerMarginBottom: null,
  outerMarginLeft: null,
  useTransformPositioning: true,
  mobileBreakpoint: 640,
  minCols: 1,
  maxCols: 100,
  minRows: 1,
  maxRows: 100,
  maxItemCols: 100,
  minItemCols: 1,
  maxItemRows: 100,
  minItemRows: 1,
  maxItemArea: 2500,
  minItemArea: 1,
  defaultItemCols: 1,
  defaultItemRows: 1,
  fixedColWidth: 130,
  fixedRowHeight: 130,
  keepFixedHeightInMobile: false,
  keepFixedWidthInMobile: false,
  scrollSensitivity: 10,
  scrollSpeed: 20,
  enableEmptyCellClick: false,
  enableEmptyCellContextMenu: false,
  enableEmptyCellDrop: false,
  enableEmptyCellDrag: false,
  emptyCellDragMaxCols: 50,
  emptyCellDragMaxRows: 50,
  emptyCellDropCallback: emptyCellClick.bind(this) ,
  emptyCellDragCallback: emptyCellClick.bind(this),
  ignoreMarginInRow: false,
  draggable: {
    enabled: true,
  },
  resizable: {
    enabled: true,
  },
  swap: false,
  pushItems: true,
  disablePushOnDrag: false,
  disablePushOnResize: false,
  pushDirections: {north: true, east: true, south: true, west: true},
  pushResizeItems: false,
  displayGrid: DisplayGrid.Always,
  disableWindowResize: false,
  disableWarnings: false,
  scrollToNewItems: false
};