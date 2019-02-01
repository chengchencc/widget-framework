import { Directive, HostListener } from '@angular/core';
import { DroppableService } from './droppable.service';
import { DragEvent } from './draggable-model';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {

  constructor(private droppableService: DroppableService) { }

  @HostListener('dragStart', ['$event'])
  onDragStart(event: DragEvent): void {
    this.droppableService.onDragStart(event);
    console.log("dropable---dragstart");
  }

  @HostListener('dragMove', ['$event'])
  onDragMove(event: DragEvent): void {
    // console.log("dropable---move");
    this.droppableService.onDragMove(event);
  }

  @HostListener('dragEnd', ['$event'])
  onDragEnd(event: DragEvent): void {
    console.log("dropable---end");
    this.droppableService.onDragEnd(event);
  }


}
