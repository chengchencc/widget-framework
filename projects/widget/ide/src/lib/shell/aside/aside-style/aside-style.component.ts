import { Component, OnInit, DoCheck } from '@angular/core';
import { LayoutService } from '@widget/core';
import { LayoutComponent } from '@widget/core';
import { WidgetSettableDirective } from '@widget/core';

//TODO: 放这？

/** 一条 style 属性信息 */
export interface StyleProp {
  name: string,
  type: StylePropType,
  helperContent?: string,
  EnumValues?: string[],
  maxMin?: number[],
  step?: number,
}
/** 一堆可在指定条件下显示的属性集合，是否显示取决于 ifShow() */
export interface stylePropsContainer {
  ifShow: (itemConfigStyles: CSSStyleDeclaration, computedStyles: CSSStyleDeclaration) => boolean,
  styleProps: StyleProp[]
}
/** 一个样式属性分类 */
export interface stylePropsCategory {
  name: string,
  styleProps: (StyleProp | stylePropsContainer)[],
}
/** 属性数据类型 */
export enum StylePropType {
  LongEnum, ShortEnum,
  //默认有单位，后者无单位
  Number, ScopedNumberWithoutUnit,
  Color,
  Text,
}
/** 驼峰 -> 小写 + 连接符 */
export function camel2Joiner (src: string, joiner = '-') {
	let result = src.replace(/[A-Z]/g, match => joiner + match.toLowerCase())
  if(result.slice(0, 1) === joiner){ //如果首字母是大写，执行replace时会多一个_，这里需要去掉
    result = result.slice(1);
  }
	return result
}
/**
 * 根据属性名取已设置的值：
 * 如果用户已设置，取用户的；否则去 computed Styles 中取
 * */
export function getValue(propName: string,
  itemConfigStyles: CSSStyleDeclaration,
  computedStyles: CSSStyleDeclaration) {
  let v: string = itemConfigStyles[camel2Joiner(propName, '-')]
  // 如果用户未设置
  if (v==undefined) { //!v 会把空串算作假
    switch (propName) {
      case 'width':
      case 'height':
        v = 'auto'
        break
      default:
        v = computedStyles[propName]
    }
  }
  return v
}
// 取出 数字+单位 中的 某某（根据正则）
export function getRegExpInValue (propName: string,
  regExp: RegExp,
  itemConfigStyles: CSSStyleDeclaration,
  computedStyles: CSSStyleDeclaration) {
  let result = String(getValue(propName, itemConfigStyles, computedStyles)).match(regExp)
  // 以防未匹配到
  return result ? result[0] : ''
}
/** 从 数字+单位 中找出 数字 和 单位 的正则 */
export const NUM_REGEXP: RegExp = /^[\d.]+/
export const UNIT_REGEXP: RegExp = /[^\d.]+$/

@Component({
  selector: 'design-aside-style',
  templateUrl: './aside-style.component.html',
  styleUrls: ['./aside-style.component.scss']
})
export class AsideStyleComponent implements OnInit, DoCheck {

  classes: string[] = [
    'body',
    'container',
    'container-fluid',
    'row',
    'col',
    'col-1',
    'col-2',
    'col-3',
    'col-4',
    'col-5',
    'col-6',
    'col-7',
    'col-8',
    'col-9',
    'col-10',
    'col-11',
    'col-12',
    'scroll-thin'
  ];

  flexSelectors = {
    position: [
      'relative',
      'absolute',
      'fixed',
      'static',
      'sticky',
      'inherit',
      'unset'
    ],
    display: [
      'block',
      'flex'
    ],
    direction: [
      'row',
      'row-reverse',
      'column',
      'column-reverse'
    ],
    wrap: [
      'nowrap',
      'wrap',
      'wrap-reverse'
    ],
    justifyContent: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around'
    ],
    alignItems: [
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch'
    ],
    alignContent: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'stretch'
    ],
    alignSelf: [
      'auto',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch'
    ],

  }

  StylePropType = StylePropType
  /** 固定 style 属性信息列表 */
  styleProps: stylePropsCategory[] =[
    {
      name: '布局',
      styleProps: [
        {
          name: 'display',
          type: StylePropType.ShortEnum,
          EnumValues: ['block', 'flex']
        },
        /** flex */
        {
          ifShow (itemConfigStyles: CSSStyleDeclaration , computedStyles: CSSStyleDeclaration) {
            if(itemConfigStyles.display) return itemConfigStyles.display == 'flex'
            return computedStyles.display == 'flex'
          },
          styleProps: [
            {
              name: 'flexDirection',
              type: StylePropType.LongEnum,
              EnumValues: [
                'row',
                'row-reverse',
                'column',
                'column-reverse']
            },
            {
              name: 'flexWrap',
              type: StylePropType.LongEnum,
              EnumValues: [
                'nowrap',
                'wrap',
                'wrap-reverse']
            },
            {
              name: 'justifyContent',
              type: StylePropType.LongEnum,
              EnumValues: [
                'normal',
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around']
            },
            {
              name: 'alignItems',
              type: StylePropType.LongEnum,
              EnumValues: [
                'normal',
                'flex-start',
                'flex-end',
                'center',
                'baseline',
                'stretch']
            },
            {
              name: 'alignContent',
              type: StylePropType.LongEnum,
              EnumValues: [
                'normal',
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around',
                'stretch']
            },
            {
              name: 'alignSelf',
              type: StylePropType.LongEnum,
              EnumValues: [
                'auto',
                'flex-start',
                'flex-end',
                'center',
                'baseline',
                'stretch']
            },
            {
              name: 'justifyContent',
              type: StylePropType.LongEnum,
              EnumValues: [
                'normal',
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around']
            },
          ]
        },
        {
          name: 'position',
          type: StylePropType.LongEnum,
          EnumValues: ['static', 'relative', 'absolute', 'fixed', 'sticky', 'inherit', 'unset']
        },
        /** relative, absolute, fixed */
        {
          ifShow (itemConfigStyles: CSSStyleDeclaration , computedStyles: CSSStyleDeclaration) {
            let a = [`relative`, `absolute`, `fixed`]
            let propName = 'position'
            if(itemConfigStyles[propName]) return a.includes(itemConfigStyles[propName])
            return a.includes(computedStyles[propName])
          },
          styleProps: [
            {
              name: 'top',
              type: StylePropType.Number
            },
            {
              name: 'right',
              type: StylePropType.Number
            },
            {
              name: 'bottom',
              type: StylePropType.Number
            },
            {
              name: 'left',
              type: StylePropType.Number
            }
          ]
        },
      ]
    }, {
      name: '尺寸',
      styleProps: [
        {
          name: 'width',
          type: StylePropType.Number,
        },
        {
          name: 'height',
          type: StylePropType.Number,
        },
        {
          name: 'margin',
          type: StylePropType.Text,
        },
        {
          name: 'padding',
          type: StylePropType.Text,
        },
        {
          name: 'overflow',
          type: StylePropType.LongEnum,
          EnumValues: ['visible', 'auto', 'hidden', 'scroll', 'scroll-x', 'scroll-y']
        },
      ]
    }, {
      name: '外观',
      styleProps: [
        {
          name: 'backgroundColor',
          type: StylePropType.Color,
        },
        {
          name: 'boxShadow',
          type: StylePropType.Text,
        },
        {
          name: 'fontSize',
          type: StylePropType.Number,
        },
        {
          name: 'color',
          type: StylePropType.Color,
        }
      ]
    }, {
      name: '效果',
      styleProps: [
        {
          name: 'cursor',
          type: StylePropType.LongEnum,
          EnumValues: ['default', 'auto', 'crosshair', 'pointer', 'move', 'grab', 'grabbing', 'e-resize', 'ne-resize', 'nw-resize', 'n-resize', 'se-resize', 'sw-resize', 's-resize', 'w-resize', 'text', 'help', ]
        },
        {
          name: 'boxShadow',
          type: StylePropType.Text,
        },
        {
          name: 'transform',
          type: StylePropType.Text,
        },
        {
          name: 'transition',
          type: StylePropType.Text,
        }
      ]
    },
  ]

  config: any;

  path: string[];

  itemConfig: { [key: string]: any } = null
  computedStyles: CSSStyleDeclaration = null

  constructor(private layoutService: LayoutService) {
    this.layoutService.onSelectSettableItem$.subscribe(s => this.selectSettableItem(s));
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
      this.computedStyles = getComputedStyle(item.elementRef.nativeElement);
      this.path = item.getPath();
    }
  }

  handleChangeValue(e: { value: string, prop: StyleProp }) {
    //TODO: 文本验证
    let { value, prop } = e
    // 如果有单位：
    if(prop.type==StylePropType.Number) {
      // 先取出老值 老单位
      let oldV = getRegExpInValue(prop.name, NUM_REGEXP, this.itemConfig.style, this.computedStyles)
      let oldU = getRegExpInValue(prop.name, UNIT_REGEXP, this.itemConfig.style, this.computedStyles)
      // 如果改的是数字，注意单位
      if(NUM_REGEXP.test(value)) {
        value += oldU=='auto' ? 'px' : oldU
      }
      // 如果改的是unit，注意数字
      else {
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
