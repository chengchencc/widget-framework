import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StylePropType, StyleProp, stylePropsContainer, camel2Joiner, stylePropsCategory, getRegExpInValue, getValue } from '../aside-style/aside-style.component';
import { NUM_REGEXP, UNIT_REGEXP } from '../../../utils/util';

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
  getValueNums (propNames: string[]) {
    return propNames.map(name => this.getValueNum(name))
  }
  getValue (propName: string) {
    return getValue(propName, this.itemConfigStyles, this.computedStyles)
  }
  // 取出 数字+单位 中的 数字
  getValueNum (propName: string) {
    return getRegExpInValue(propName, NUM_REGEXP, this.itemConfigStyles, this.computedStyles)
  }
  // 取出 数字+单位 中的 单位
  getValueUnit (propName: string) {
    return getRegExpInValue(propName, UNIT_REGEXP, this.itemConfigStyles, this.computedStyles)
  }
  /** 检查 prop 是否在 item.config.styles 中，即修改过了 */
  isPropInItemConfig (propName: string) {
    let v: string = this.itemConfigStyles[camel2Joiner(propName, '-')]
    return v != undefined
  }

}
