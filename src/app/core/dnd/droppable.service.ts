import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { WidgetDragEvent } from './draggable-model';
import { DropzoneDirective } from './dropzone.directive';

 interface Distance{
  directive:DropzoneDirective;
  distance:number;
}

@Injectable()
export class DroppableService {
  dragStart$: Observable<WidgetDragEvent>;
  dragMove$: Observable<WidgetDragEvent>;
  dragEnd$: Observable<WidgetDragEvent>;

  private dragStartSubject = new Subject<WidgetDragEvent>();
  private dragMoveSubject = new Subject<WidgetDragEvent>();
  private dragEndSubject = new Subject<WidgetDragEvent>();

  dropzoneDirectiveInstance = new Array<DropzoneDirective>();

  closedDirective: DropzoneDirective;

  constructor() {
    this.dragStart$ = this.dragStartSubject.asObservable();
    this.dragMove$ = this.dragMoveSubject.asObservable();
    this.dragEnd$ = this.dragEndSubject.asObservable();
    console.log("new droppable service.");
  }

  onDragStart(event: WidgetDragEvent): void {
    this.dragStartSubject.next(event);

    // if (this.parent) {
    //   this.parent.onDragStart(event);
    // }
  }

  onDragMove(event: WidgetDragEvent): void {

    this.closedDirective = this.getClosedDirective(event);

    this.dragMoveSubject.next(event);

    // if (this.parent) {
    //   this.parent.onDragMove(event);
    // }
  }

  onDragEnd(event: WidgetDragEvent): void {
    

    this.dragEndSubject.next(event);


    // if (this.parent) {
    //   this.parent.onDragEnd(event);
    // }
  }

  getClosedDirective(event: WidgetDragEvent) {
    const distances = this.dropzoneDirectiveInstance.map((current) => {
      let e = event.event;
      if (this.isInside(e, current.clientRect)) {
        return {
          directive: current,
          distance: this.calcDistance(e, current.clientRect)
        };
      }
      else
        return {
          directive:current,
          distance:99999
        };

    });

    let closed:Distance = null;
    distances.forEach(data=>{
      if (!closed) {
        closed = data;
      }else{
        if(data.distance < closed.distance){
          closed = data;
        }
      }

    });

    return closed.distance>10000?null:closed.directive;

    // return closed.directive;

  }

  calcDistance(event: PointerEvent, clientRect: ClientRect) {
    return (event.clientX - clientRect.left)
      + (clientRect.right - event.clientX)
      + (event.clientY - clientRect.top)
      + (clientRect.bottom - event.clientY);
  }


  private isInside(event: PointerEvent, clientRect: ClientRect) {
    return event.clientX >= clientRect.left &&
      event.clientX <= clientRect.right &&
      event.clientY >= clientRect.top &&
      event.clientY <= clientRect.bottom;
  }


}
