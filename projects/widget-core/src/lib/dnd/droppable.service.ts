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
  }

  /** droppable.directive 触发 */
  onDragStart(event: WidgetDragEvent): void {
    this.dragStartSubject.next(event);
  }
  onDragMove(event: WidgetDragEvent): void {

//TODO:需要考虑性能优化。网上找的方法，貌似不太管用，可能放的位置不对。移动完元素之后，延迟一段时间
// let move = document.onmousemove;
// document.onmousemove = null;
// setTimeout(function(){
//   document.onmousemove = move;
// },30);

    console.log("moving============");

    this.closedDirective = this.getClosedDirective(event);
    this.dragMoveSubject.next(event);
  }
  onDragEnd(event: WidgetDragEvent): void {
    this.dragEndSubject.next(event);
  }

  getClosedDirective(event: WidgetDragEvent) {
    let closedDirective:Distance = null;
    const distances = this.dropzoneDirectiveInstance.map((current) => {
      let e = event.event;
      if (this.isInside(e, current.clientRect)) {
        if(!closedDirective){
          closedDirective = {
            directive: current,
            distance: this.calcDistance(e, current.clientRect)
          }
        }else{
          const calcDistance = this.calcDistance(e,current.clientRect);
          if(closedDirective.distance > calcDistance){
            closedDirective = {
              directive:current,
              distance:calcDistance
            }
          }
        }
      }
    });

    console.log(closedDirective);

    return closedDirective ? closedDirective.directive : null;
  }

  calcDistance(event: PointerEvent, clientRect: ClientRect) {
    return (event.clientX - clientRect.left)
      + (clientRect.right - event.clientX)
      + (event.clientY - clientRect.top)
      + (clientRect.bottom - event.clientY);
  }


  private isInside(event: PointerEvent, clientRect: ClientRect) {

    console.log(clientRect);

    return event.clientX >= clientRect.left &&
      event.clientX <= clientRect.right &&
      event.clientY >= clientRect.top &&
      event.clientY <= clientRect.bottom;
  }


}
