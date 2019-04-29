import { Directive, EventEmitter, HostBinding, HostListener, Output, ElementRef, Input, NgZone } from '@angular/core';
import { WidgetDragEvent } from './draggable-model';

@Directive({
  selector: '[appDraggable],[appDroppable]'
})
export class DraggableDirective {

  @Input() passData :any;
  @Output() dragStart = new EventEmitter<WidgetDragEvent>();
  @Output() dragMove = new EventEmitter<WidgetDragEvent>();
  @Output() dragEnd = new EventEmitter<WidgetDragEvent>();

  // to trigger pointer-events polyfill
  @HostBinding('attr.touch-action') touchAction = 'none';
  @HostBinding('class.dragging') dragging = false;
  @HostBinding('class.draggable') draggable = true;

  pointerId?: number;

  constructor(public element: ElementRef) {}

  @HostListener('pointerdown', ['$event'])
  onPointerDown (event: PointerEvent): void {
    // added after YouTube video: ignore right-click
    if (event.button !== 0) {
      return;
    }
    this.pointerId = event.pointerId;
    this.dragging = true;
    this.dragStart.emit({event:event,data:this.passData});
    // 注册 move 事件
    // this.zone.runOutsideAngular(() => {//TODO: 会导致 dropzone 那边的 drppableService 不发送 dragMove 事件
      document.addEventListener('pointermove', this.onPointerMove)
    // })
  }

  // added after YouTube video: pointercancel
  @HostListener('document:pointercancel', ['$event'])
  @HostListener('document:pointerup', ['$event'])
  onPointerUp (event: PointerEvent): void {
    if (!this.dragging || event.pointerId !== this.pointerId) {
      return;
    }
    this.dragging = false;
    this.dragEnd.emit({event:event,data:this.passData});
    document.removeEventListener('pointermove', this.onPointerMove)
  }

  onPointerMove = (event: PointerEvent) => {
    if (!this.dragging || event.pointerId !== this.pointerId) {
      return;
    }
    this.dragMove.emit({event:event,data:this.passData});
  }
}
