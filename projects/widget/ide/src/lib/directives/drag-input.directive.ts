import { Directive, ElementRef, HostListener, Output, EventEmitter, Input } from '@angular/core';
import { NUM_REGEXP } from '../utils/util';

let moveCbs = []
let upCbs = []
let x = 0
let y = 0
document.onmousemove = e => {
  moveCbs.forEach(cb => cb(e))
}
document.onmouseup = () => {
  upCbs.forEach(cb => cb())
}

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

  constructor(private el: ElementRef) {
    moveCbs.push(this.onMouseMove)
    upCbs.push(this.endDrag)
  }

  @HostListener('mousedown', [`$event`])
  onMouseDown (e) {
    // 取出其中的数字
    let match = String(this.modal).match(NUM_REGEXP)
    // 如果没有，当作 0 处理
    if(!match) this._downModal = 0
    //记录位置，flag
    let v = e[this.axis]
    this._down = true
    this._downV = v
    this._downModal = parseInt(match[0])
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
  }
}
