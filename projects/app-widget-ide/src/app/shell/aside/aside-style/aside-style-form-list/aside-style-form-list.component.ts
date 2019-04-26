import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NUM_REGEXP, UNIT_REGEXP, getStyleProp, StyleProp, stylePropsContainer, StylePropType, camel2Joiner, getRegExpInValue, getValue } from '../../../../utils';

@Component({
  selector: 'aside-style-form-list',
  templateUrl: './aside-style-form-list.component.html',
  styleUrls: ['./aside-style-form-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
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
    let propValue: string = this.itemConfigStyles[camel2Joiner(propName, '-')]
    // 有些属性有从属关系，子属性改变，它本身 或 父属性 都算作修改过。如 box-input。
    if(propValue == undefined) {
      let prop = getStyleProp(propName)
      if(prop.type == StylePropType.BoxInput) {
        for(let iPropName of prop.boxInputProps) {
          let propValue: string = this.itemConfigStyles[camel2Joiner(iPropName, '-')]
          if(propValue!=undefined) return true
        }
      }
    } else {
      return true
    }
    return false
  }

}
