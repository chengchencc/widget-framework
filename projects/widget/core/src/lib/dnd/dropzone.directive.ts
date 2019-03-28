import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, OnInit, Output, SkipSelf, ViewChildren, QueryList, ContentChildren, ViewChild, ViewContainerRef, ComponentFactoryResolver, ContentChild, AfterContentInit, AfterViewInit, Input } from '@angular/core';
import { DroppableService } from './droppable.service';
import { WidgetDragEvent } from './draggable-model';

@Directive({
  selector: '[appDropzone]'
  // selector: '[appDropzone],[role-layout],app-layout'
})
export class DropzoneDirective implements OnInit,AfterContentInit,AfterViewInit {

  @HostBinding('class.dropzone-activated') activated = false;
  @HostBinding('class.dropzone-entered') entered = false;

  @Input() dropView :ViewContainerRef;

  @Output() onDragDrop = new EventEmitter<WidgetDragEvent>();
  @Output() onDragEnd = new EventEmitter<WidgetDragEvent>();
  @Output() onDragOver = new EventEmitter<WidgetDragEvent>();
  @Output() onDragLeave = new EventEmitter<WidgetDragEvent>();

  public clientRect: ClientRect;

  public childrenDropzone: Array<any>;

  constructor(
    private droppableService: DroppableService,
    private element: ElementRef
    ) { }

  ngOnInit(): void {
    this.droppableService.dropzoneDirectiveInstance.push(this);

    this.droppableService.dragStart$.subscribe(event => this.dragStart(event));
    this.droppableService.dragEnd$.subscribe(event => this.dragEnd(event));

    this.droppableService.dragMove$.subscribe(event => {
      if (this.isClosed(event)) {
        this.dragOver(event);
      } else {
        this.dragLeave(event);
      }
    });

  }
  ngAfterContentInit(): void {
    // console.log("content",this.target);
  }
  ngAfterViewInit(){
    // console.log("content1",this.target1);
  }
  private dragOver(event:WidgetDragEvent): void {
    if (!this.activated) {
      return;
    }
    this.entered = true;
    this.onDragOver.emit(event);
  }

  private dragLeave(event:WidgetDragEvent): void {
    if (!this.activated) {
      return;
    }

    this.entered = false;
    this.onDragLeave.emit(event);
  }

  private dragStart(event: WidgetDragEvent): void {
    this.activated = true;
    //延迟绑定，防止clientRact计算不准的情况。
    setTimeout(() => {
      this.clientRect = this.element.nativeElement.getBoundingClientRect();
    }, 0);
  }

  private dragEnd(event: WidgetDragEvent): void {
    if (!this.activated) {
      return;
    }
    if (this.entered && this.isClosed(event)) {
      //  this.append(event);
      // event.data = this;
      // event.dropzone = this;
       this.onDragDrop.emit(event);
    }

    this.activated = false;
    this.entered = false;
  }

  private isEventInside(event: WidgetDragEvent) {
    return event.event.clientX >= this.clientRect.left &&
    event.event.clientX <= this.clientRect.right &&
    event.event.clientY >= this.clientRect.top &&
    event.event.clientY <= this.clientRect.bottom;
  }

  private isClosed(event:WidgetDragEvent){
    return this.droppableService.closedDirective === this;
  }

}




