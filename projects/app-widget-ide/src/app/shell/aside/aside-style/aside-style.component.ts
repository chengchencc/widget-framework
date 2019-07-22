import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { SettingService } from 'projects/widget-core/src/lib/settable/setting.sevice';
import { NUM_REGEXP, UNIT_REGEXP, ConfigEditorType, ConfigEditorProp, getRegExpInValue, camel2Joiner } from 'projects/widget-core/src/lib/config-editor/utils';
import { clamp, styleProps } from '../../../utils';


@Component({
  selector: 'design-aside-style',
  templateUrl: './aside-style.component.html',
  styleUrls: ['./aside-style.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideStyleComponent implements DoCheck {

  classes:string[]=[
    "body",
    "container",
    "container-fluid",
    "row",
    "col",
    "col-1",
    "col-2",
    "col-3",
    "col-4",
    "col-5",
    "col-6",
    "col-7",
    "col-8",
    "col-9",
    "col-10",
    "col-11",
    "col-12",
    "scroll-thin"
  ];
  StylePropType = ConfigEditorType
  styleProps = styleProps

  array = [1, 2, 3, 4, {}]

  // path: string[];
  // itemConfig: { [key: string]: any } = null
  // computedStyles: CSSStyleDeclaration = null

  constructor(public settingService: SettingService) {    

  }
  // getStyleProps () {
  //   let a = getStyleProps()
  //   console.log('a', a)
  //   return a
  // }

  bindedGetValueByPropName () {
    return this.getValueByPropName.bind(this)
  }
  /**
   * 根据属性名取已设置的值：
   * 如果用户已设置，取用户的；否则去 computed Styles 中取
   * */
  getValueByPropName(propName: string) {
    let configStyles = this.settingService.selectedSettable.config.style
    // 如果有 config style
    if (configStyles) {
      let v: string = configStyles[camel2Joiner(propName, '-')]
      // 且有当前 prop
      if(v!=undefined) return v
    }
    let v: string
    // 如果用户未设置
    switch (propName) {
      case 'width':
      case 'height':
        v = 'auto'
        break
      default:
        v = this.computedStyle()[propName]
    }
    return v
  }

  ngDoCheck(): void {
    // this.getStyle();
  }

  // selectSettableItem(item: WidgetSettableDirective) {
  //   if (item) {
  //     item.config.style = item.config.style || {}
  //     this.itemConfig = item.config
  //     this.computedStyles = getComputedStyle(item.elementRef.nativeElement)
  //     this.path = item.getPath()
  //   }
  // }
  computedStyle() {
    return getComputedStyle(this.settingService.selectedSettable.elementRef.nativeElement)
  }

  /**
   * 注意：Number 类型的 e.value 不带单位，单位在后面代码里取
   */
  handleChangeValue(e: { value: string|number, prop: ConfigEditorProp }) {
    //TODO: 文本验证，错误给出提示；
    let { value, prop } = e
    let { config, elementRef } = this.settingService.selectedSettable

    // let computedStyle = this.computedStyle()

    // 如果有 minMax 限制
    if(prop.min!=undefined || prop.max!=undefined) {
      value = String(value)
      // 还是个数字
      if(NUM_REGEXP.test(value)) {
        // 把数字限制在这个范围内
        value = clamp(parseInt(value), prop.min, prop.max)
      }
    }

    // 如果有单位：
    if(prop.type==ConfigEditorType.Number) {
      value = String(value) //转成字符串后面再比较 省的把 0 当空串
      // 先取出老值 老单位
      let oldV = getRegExpInValue(prop.name, NUM_REGEXP, this.getValueByPropName.bind(this))
      let oldU = getRegExpInValue(prop.name, UNIT_REGEXP, this.getValueByPropName.bind(this))
      // 如果改成了空值，那改的不是 unit 而是数字，就让结果为 auto
      if (value!='0' && value=='' || value==undefined) {
        value = 'auto'
      }
      // 如果改的是数字，注意单位
      else if(NUM_REGEXP.test(value)) {
        value += oldU=='auto' ? 'px' : oldU
      }
      // 如果改的是unit，注意数字
      else if(UNIT_REGEXP.test(value)) {
        if(oldU=='auto' && value!='auto') {
          value = 0 + value
        } else if (oldU!='auto' && value!='auto') {
          value = oldV + value
        } else if (value=='auto') {} // Do nothing
      }
    }

    if(!config.style) config.style = {}
    config.style[camel2Joiner(prop.name)] = <string>value
    /** 告知 setting.service -> settable.dir config 变了 */
    this.settingService.changeConfig(config)
  }

  handleChangeClass(e){
    let { config } = this.settingService.selectedSettable

    this.settingService.changeConfig(config);
  }

}
