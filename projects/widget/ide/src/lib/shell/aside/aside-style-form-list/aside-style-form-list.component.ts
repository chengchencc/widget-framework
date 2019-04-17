import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StylePropType, StyleProp, stylePropsContainer, camel2Joiner, stylePropsCategory } from '../aside-style/aside-style.component';

@Component({
  selector: 'aside-style-form-list',
  templateUrl: './aside-style-form-list.component.html',
  styleUrls: ['./aside-style-form-list.component.css']
})
export class AsideStyleFormListComponent implements OnInit {

  @Input() propList: (StyleProp | stylePropsContainer)[]
  @Input() itemConfigStyles: CSSStyleDeclaration
  @Input() computedStyles: CSSStyleDeclaration

  @Output() onChangeValue = new EventEmitter<{ value: string, prop: StyleProp }>()

  StylePropType = StylePropType
  camel2Joiner = camel2Joiner

  constructor() { }

  ngOnInit() {
  }

  handleChangeValue (value: string, prop: StyleProp) {
    this.onChangeValue.emit({ value, prop })
  }
  getValue(propName: string) {
    let v: string = this.itemConfigStyles[propName]

    if (!v) {
      switch (propName) {
        case 'width':
        case 'height':
          v = 'auto'
          break
        default:
          v = this.computedStyles[propName]
      }
    }
    return v
  }

}
