import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, OnInit, Output, SkipSelf, ViewChildren, QueryList, ContentChildren, ViewChild, ViewContainerRef, ComponentFactoryResolver, ContentChild, AfterContentInit, AfterViewInit, Input } from '@angular/core';
import { DroppableService } from './droppable.service';
import { DragEvent } from './draggable-model';

@Directive({
  selector: 'app-layout,[appDropzone]'
  // selector: '[appDropzone],[role-layout],app-layout'
})
export class DropzoneDirective implements OnInit,AfterContentInit,AfterViewInit {

  @HostBinding('class.dropzone-activated') activated = false;
  @HostBinding('class.dropzone-entered') entered = false;
  // @HostBinding('class.dropzone-entered') entered = false;

  @Input() dropView :ViewContainerRef;

  @Output() drop = new EventEmitter<DragEvent>();
  @Output() remove = new EventEmitter<DragEvent>();

  public clientRect: ClientRect;

  public childrenDropzone: Array<any>;

  constructor(
    private droppableService: DroppableService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private element: ElementRef
    ) { }

  ngOnInit(): void {

    this.droppableService.dropzoneDirectiveInstance.push(this);

    this.droppableService.dragStart$.subscribe(event => this.onDragStart(event));
    this.droppableService.dragEnd$.subscribe(event => this.onDragEnd(event));

    // this.droppableService.dragMove$.


    this.droppableService.dragMove$.subscribe(event => {
      if (this.isClosed(event)) {
        this.onPointerEnter();
      } else {
        this.onPointerLeave();
      }
    });

  }
  ngAfterContentInit(): void {
    // console.log("content",this.target);
  }
  ngAfterViewInit(){
    // console.log("content1",this.target1);

  }
  private onPointerEnter(): void {
    if (!this.activated) {
      return;
    }

    this.entered = true;
  }

  private onPointerLeave(): void {
    if (!this.activated) {
      return;
    }

    this.entered = false;
  }

  private onDragStart(event: DragEvent): void {
    this.clientRect = this.element.nativeElement.getBoundingClientRect();

    this.activated = true;

    // console.log(this.element, this.droppableService.dropzoneDirectiveInstance);
  }

  private onDragEnd(event: DragEvent): void {
    if (!this.activated) {
      return;
    }

    // console.log(this.clientRect);

    if (this.entered && this.isClosed(event)) {
      //  this.append(event);
      // event.data = this;
      // event.dropzone = this;
       this.drop.emit(event);
      // this.layoutService.append(this.layoutConfig,{
      //   layout:null,
      //   style:null,
      //   type:event.data,
      //   id:null
      // })
    }

    this.activated = false;
    this.entered = false;
    // console.log(this.children);
  }

  private isEventInside(event: DragEvent) {
    return event.event.clientX >= this.clientRect.left &&
    event.event.clientX <= this.clientRect.right &&
    event.event.clientY >= this.clientRect.top &&
    event.event.clientY <= this.clientRect.bottom;
  }

  private isClosed(event:DragEvent){
    return this.droppableService.closedDirective === this;

  }


  // append(event:DragEvent){
  //   const type = event.data;
  //   const componentDeclare = this.layoutComponents.find(s => {
  //     return s.key == type;
  //   });
  //   if (componentDeclare) {
  //     this.appendComponent(componentDeclare.type);
  //   }
  // }

  // private appendComponent(componentType) {

  //   let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
  
  //   const componentRef = this.target.createComponent(componentFactory);
  
  //   return componentRef;
  // }

}



