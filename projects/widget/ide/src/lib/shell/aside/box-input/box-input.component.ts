import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StyleProp, StylePropType } from '../aside-style/aside-style.component';

@Component({
  selector: 'lib-box-input',
  templateUrl: './box-input.component.html',
  styleUrls: ['./box-input.component.scss']
})
export class BoxInputComponent implements OnInit {

  @Input() propNames: string[]
  @Input() values: string[]

  @Output() onChange = new EventEmitter<{ value: string, prop: StyleProp }>()

  constructor() { }

  ngOnInit() {
  }

  handleChangeValue (v, i) {
    this.onChange.emit({
      value: v + 'px',
      prop: {
        name: this.propNames[i],
        type: StylePropType.Text
      }
    })
  }



}
