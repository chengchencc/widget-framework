import { Directive, ElementRef, HostListener, Output, EventEmitter, Input, NgZone } from '@angular/core';
import { NUM_REGEXP } from '../utils';

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

  private _down = false
  private _downV = 0
  private _downModal: number

  constructor(private el: ElementRef, private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      this.el.nativeElement.addEventListener('pointerdown', this.onMouseDown)
      document.addEventListener('pointerup', this.endDrag)
      document.addEventListener('pointercancel', this.endDrag)
    })
  }

  // @HostListener('mousedown', [`$event`])
  onMouseDown = e => {
    // 取出其中的数字
    let match = String(this.modal).match(NUM_REGEXP)
    //记录位置，flag
    let v = e[this.axis]

    this._down = true
    this._downV = v
    this._downModal = match ? parseInt(match[0]) : 0 // 如果没有数字，当作 0 处理
    // this.zone.runOutsideAngular(() => {
      document.addEventListener('pointermove', this.onMouseMove)
    // })
  }

  onMouseMove = e => {
    if(!this._down) return
    let v = e[this.axis]
    let result = Math.round(this._downModal + (v-this._downV)*this.speed)
    this.changeValue.emit(result)
    console.log(result)
  }

  endDrag = () => {
    this._down = false
    document.removeEventListener('pointermove', this.onMouseMove)
  }
}
