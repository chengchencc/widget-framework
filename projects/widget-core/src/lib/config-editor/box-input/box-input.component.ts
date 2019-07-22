import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfigEditorProp, ConfigEditorType } from '../utils';

@Component({
  selector: 'lib-box-input',
  templateUrl: './box-input.component.html',
  styleUrls: ['./box-input.component.scss']
})
export class BoxInputComponent implements OnInit {

  @Input() propNames: string[]
  @Input() values: string[]

  @Output() onChange = new EventEmitter<{ value: string, prop: ConfigEditorProp }>()

  constructor() { }

  ngOnInit() {
  }

  handleChangeValue (v, i) {
    this.onChange.emit({
      value: v + 'px',
      prop: {
        name: this.propNames[i],
        type: ConfigEditorType.Text
      }
    })
  }
  handleDragChangeValue (v) {
    this.handleChangeValue(v, 0)
    this.handleChangeValue(v, 1)
    this.handleChangeValue(v, 2)
    this.handleChangeValue(v, 3)
  }

}
