import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { DragEvent } from './draggable-model';
import { DropzoneDirective } from './dropzone.directive';

 interface Distance{
  directive:DropzoneDirective;
  distance:number;
}

@Injectable()
export class DroppableService {
  dragStart$: Observable<DragEvent>;
  dragMove$: Observable<DragEvent>;
  dragEnd$: Observable<DragEvent>;

  private dragStartSubject = new Subject<DragEvent>();
  private dragMoveSubject = new Subject<DragEvent>();
  private dragEndSubject = new Subject<DragEvent>();

  dropzoneDirectiveInstance = new Array<DropzoneDirective>();

  closedDirective: DropzoneDirective;

  constructor() {
    this.dragStart$ = this.dragStartSubject.asObservable();
    this.dragMove$ = this.dragMoveSubject.asObservable();
    this.dragEnd$ = this.dragEndSubject.asObservable();
    console.log("new droppable service.");
  }

  onDragStart(event: DragEvent): void {
    this.dragStartSubject.next(event);

    // if (this.parent) {
    //   this.parent.onDragStart(event);
    // }
  }

  onDragMove(event: DragEvent): void {

    this.closedDirective = this.getClosedDirective(event);

    this.dragMoveSubject.next(event);

    // if (this.parent) {
    //   this.parent.onDragMove(event);
    // }
  }

  onDragEnd(event: DragEvent): void {
    

    this.dragEndSubject.next(event);


    // if (this.parent) {
    //   this.parent.onDragEnd(event);
    // }
  }

  getClosedDirective(event: DragEvent) {
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
