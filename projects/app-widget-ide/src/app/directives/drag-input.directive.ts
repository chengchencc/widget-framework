import { Directive, ElementRef, HostListener, Output, EventEmitter, Input, NgZone } from '@angular/core';
import { NUM_REGEXP } from '../utils';
import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[libDragInput]'
})
export class DragInputDirective {
  @Output()
  changeValue = new EventEmitter<number>()
  /* 拖动方向 */
  @Input()
  axis: 'x' | 'y' = 'x'
  /** 控制速度 */
  @Input()
  speed = .4
  /** 值输入 */
  @Input()
  modal: string

  private _downV = 0
  private _downModal: number
  // 借用它来实现防抖
  private _mousemoveSubject = new Subject<any>()

  constructor(private el: ElementRef, private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      document.addEventListener('pointerup', this.endDrag)
      document.addEventListener('pointercancel', this.endDrag)
    })
  }

  ngOnInit () {
    this._mousemoveSubject.pipe(throttleTime(100)).subscribe(e => {
      this.onThrottledMouseMove(e)
    })
  }

  @HostListener('pointerdown', [`$event`])
  onMouseDown = e => {
    // 取出其中的数字
    let match = String(this.modal).match(NUM_REGEXP)
    //记录位置，flag
    let v = e[this.axis]

    this._downV = v
    this._downModal = match ? parseInt(match[0]) : 0 // 如果没有数字，当作 0 处理
    // this.zone.runOutsideAngular(() => {
      document.addEventListener('pointermove', this.onMouseMove)
    // })
  }
  onMouseMove = e => {
    this._mousemoveSubject.next(e)
  }
  onThrottledMouseMove = e => {
    let v = e[this.axis]
    let result = Math.round(this._downModal + (v-this._downV)*this.speed)
    this.changeValue.emit(result)
  }
  endDrag = () => {
    document.removeEventListener('pointermove', this.onMouseMove)
  }
}
