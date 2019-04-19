import { Component, OnInit, DoCheck } from '@angular/core';
import { LayoutService } from '@widget/core';
import { LayoutComponent } from '@widget/core';
import { WidgetSettableDirective } from '@widget/core';

//TODO: 放这？
/** 默认单位为 px 的属性列表 */
// const unitPxProps = ['width', 'height', 'margin']

export interface StyleProp {
  name: string,
  type: StylePropType,
  helperContent?: string,
  EnumValues?: string[],
  maxMin?: number[],
  step?: number,
}
export interface stylePropsContainer {
  ifShow: (itemConfigStyles: CSSStyleDeclaration, computedStyles: CSSStyleDeclaration) => boolean,
  styleProps: StyleProp[]
}
export interface stylePropsCategory {
  name: string,
  styleProps: (StyleProp | stylePropsContainer)[],
}
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
    //TODO: 验证、自动增加单位，或改为单位选框
    // if(unitPxProps.includes(propName)) {
    // }
    let { value, prop } = e
    this.itemConfig.style[camel2Joiner(prop.name)] = value
  }


}
