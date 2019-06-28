import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NUM_REGEXP, UNIT_REGEXP, ConfigEditorProp, ConfigEditorPropsContainer, ConfigEditorType, camel2Joiner, getRegExpInValue } from '../../utils';
import { ConfigEditorData } from 'projects/widget-core/src/lib/common/layout.interface';

@Component({
  selector: 'config-editor',
  templateUrl: './config-editor.component.html',
  styleUrls: ['./config-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfigEditorComponent implements OnInit {
  // 全部属性信息列表
  @Input() propList: (ConfigEditorProp | ConfigEditorPropsContainer)[]
  // 实际被修改的数据，用于判断是否已被更改
  @Input() configEditorData: ConfigEditorData
  /**
   * 根据属性名，返回此属性显示的值
   * 注意传入函数时需要 .bind(this)
   * */
  @Input() getValue: (propName: string) => any
  // 外部通过它来修改值
  @Output() onChangeValue = new EventEmitter<{ value: string, prop: ConfigEditorProp }>()

  StylePropType = ConfigEditorType
  camel2Joiner = camel2Joiner

  constructor() { }

  /**
   * 表单项中显示的值：
   * 如果 getValue 没有拿到值，返回设置在 propList 中的默认值
   * */
  getDisplayValue (propName: string) {
    let displayValue = this.getValue(propName)
    if(!displayValue) displayValue = (<ConfigEditorProp>this.getPropByNameRecursively(this.propList, propName)).defaultValue
    return displayValue
  }

  ngOnInit() {
    console.count('init list')
  }

  handleChangeValue (value: string, prop: ConfigEditorProp) {
    this.onChangeValue.emit({ value, prop })
  }
  getValueNums (propNames: string[]) {
    return propNames.map(name => this.getValueNum(name))
  }
  // 取出 数字+单位 中的 数字
  getValueNum (propName: string) {
    return getRegExpInValue(propName, NUM_REGEXP, this.getValue)
  }
  // 取出 数字+单位 中的 单位
  getValueUnit (propName: string) {
    return getRegExpInValue(propName, UNIT_REGEXP, this.getValue)
  }
  /** 检查 prop 是否在 item.config.styles 中，即修改过了 */
  isPropInItemConfig (propName: string) {
    if (!this.configEditorData) return
    let propValue: string = this.configEditorData[camel2Joiner(propName, '-')]
    // 有些属性有从属关系，子属性改变，它本身 或 父属性 都算作修改过。如 box-input。
    if(propValue == undefined) {
      let prop = this.getPropByNameRecursively(this.propList, propName)
      if((<ConfigEditorProp>prop).type == ConfigEditorType.BoxInput) {
        for(let iPropName of (<ConfigEditorProp>prop).boxInputProps) {
          let propValue: string = this.configEditorData[camel2Joiner(iPropName, '-')]
          if(propValue!=undefined) return true
        }
      }
    } else {
      return true
    }
    return false
  }

  /** 递归查找 prop，被上面调用 */
  // TODO: 改成直接传入 propName 路径，就不用再递归找了
  getPropByNameRecursively (props: (ConfigEditorProp|ConfigEditorPropsContainer)[], propName: string): (ConfigEditorProp|ConfigEditorPropsContainer) {
    for (let prop of props) {
      // 如果是 container，那还需要递归查找子 props
      if (prop['ifShow']) {
        let resultProp = this.getPropByNameRecursively((<ConfigEditorPropsContainer>prop).styleProps, propName)
        if(resultProp) return resultProp
      } else {
        if (prop['name'] && prop['name'] == propName) return <ConfigEditorProp>prop
      }
    }
  }

  value (name) {
    return this.getValue(name)
  }

}



