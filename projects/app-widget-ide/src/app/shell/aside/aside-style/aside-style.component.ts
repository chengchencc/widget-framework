import { Component, OnInit, DoCheck } from '@angular/core';
import { WidgetSettableDirective } from 'projects/widget-core/src/lib/settable/widget-settable.directive';
import { SettingService } from 'projects/widget-core/src/lib/settable/setting.sevice';
import { NUM_REGEXP, UNIT_REGEXP, styleProps, StylePropType, StyleProp, clamp, getRegExpInValue, camel2Joiner } from '../../../utils';

@Component({
  selector: 'design-aside-style',
  templateUrl: './aside-style.component.html',
  styleUrls: ['./aside-style.component.scss']
})
export class AsideStyleComponent implements OnInit,DoCheck  {

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
  StylePropType = StylePropType
  styleProps = styleProps

  config: any;
  path: string[];
  itemConfig: { [key: string]: any } = null
  computedStyles: CSSStyleDeclaration = null

  constructor(private settingService: SettingService) {    
    //TODO:取消注释
    this.settingService.onSelectSettableItem$.subscribe(s=>this.selectSettableItem(s));
  }

  ngOnInit() {
    // this.getStyle();
  }

  ngDoCheck(): void {
    // this.getStyle();
  }

  selectSettableItem(item: WidgetSettableDirective) {
    if (item) {
      item.config.style = item.config.style || {}
      this.itemConfig = item.config
      this.computedStyles = getComputedStyle(item.elementRef.nativeElement)
      this.path = item.getPath()
    }
  }

  /**
   * 注意：Number 类型的 e.value 不带单位，单位在后面代码里取
   */
  handleChangeValue(e: { value: string|number, prop: StyleProp }) {
    //TODO: 文本验证，错误给出提示；
    
    let { value, prop } = e

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
    if(prop.type==StylePropType.Number) {
      value = String(value) //转成字符串后面再比较 省的把 0 当空串
      // 先取出老值 老单位
      let oldV = getRegExpInValue(prop.name, NUM_REGEXP, this.itemConfig.style, this.computedStyles)
      let oldU = getRegExpInValue(prop.name, UNIT_REGEXP, this.itemConfig.style, this.computedStyles)
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

    this.itemConfig.style[camel2Joiner(prop.name)] = value
  }

}
