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
    let v: string = this.itemConfigStyles[camel2Joiner(propName, '-')]
    // 如果用户未设置，就去 computed Styles 中取
    if (v==undefined) {
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
  // 取出 数字+单位 中的 数字
  getNumOfValue (propName: string) {
    let result = String(this.getValue(propName)).match(/^[\d.]+/)
    // 以防未匹配到
    return result ? result[0] : ''
  }
  // 取出 数字+单位 中的 单位
  getUnitOfValue (propName: string) {
    let result = String(this.getValue(propName)).match(/[^\d.]+$/)
    // 以防未匹配到
    return result ? result[0] : ''
  }
  /** 检查 prop 是否在 item.config.styles 中，即修改过了 */
  isPropInItemConfig (propName: string) {
    let v: string = this.itemConfigStyles[camel2Joiner(propName, '-')]
    return v != undefined
  }

}
