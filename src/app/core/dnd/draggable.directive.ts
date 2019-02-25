import { Directive, EventEmitter, HostBinding, HostListener, Output, ElementRef, Input } from '@angular/core';
import { WidgetDragEvent } from './draggable-model';


@Directive({
  selector: '[appDraggable],[appDroppable]'
})
export class DraggableDirective {
  @HostBinding('class.draggable') draggable = true;

  pointerId?: number;

  // to trigger pointer-events polyfill
  @HostBinding('attr.touch-action') touchAction = 'none';

  @Output() dragStart = new EventEmitter<WidgetDragEvent>();
  @Output() dragMove = new EventEmitter<WidgetDragEvent>();
  @Output() dragEnd = new EventEmitter<WidgetDragEvent>();

  @HostBinding('class.dragging') dragging = false;

  @Input() passData :any;

  constructor(public element: ElementRef) {}

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    // added after YouTube video: ignore right-click
    if (event.button !== 0) {
      return;
    }

    this.pointerId = event.pointerId;

    this.dragging = true;
    
    this.dragStart.emit({event:event,data:this.passData});
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.dragging || event.pointerId !== this.pointerId) {
      return;
    }

    this.dragMove.emit({event:event,data:this.passData});
  }

  // added after YouTube video: pointercancel
  @HostListener('document:pointercancel', ['$event'])
  @HostListener('document:pointerup', ['$event'])
  onPointerUp(event: PointerEvent): void {
    if (!this.dragging || event.pointerId !== this.pointerId) {
      return;
    }

    this.dragging = false;
    this.dragEnd.emit({event:event,data:this.passData});
  }
}
