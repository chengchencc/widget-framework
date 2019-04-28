import { ConfigStyle } from 'projects/widget-core/src/lib/common/layout.interface';

/** 一条 style 属性信息 */
export interface StyleProp {
    name: string,
    type: StylePropType,
    helperContent?: string,
    EnumValues?: string[],
    EnumIcons?: string[],
    EnumIconStyles?: { [k: string]: string }[],
    min?: number,
    max?: number,
    step?: number,
    boxInputProps?: string[]
  }
  /** 一堆可在指定条件下显示的属性集合，是否显示取决于 ifShow() */
  export interface stylePropsContainer {
    ifShow: (configStyle: ConfigStyle, computedStyles: CSSStyleDeclaration) => boolean,
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
    BoxInput,
  }
  
  export const styleProps: stylePropsCategory[] = [
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
          ifShow(configStyle: ConfigStyle, computedStyles: CSSStyleDeclaration) {
            if (!configStyle) return false
            if (configStyle.display) return configStyle.display == 'flex'
            return computedStyles.display == 'flex'
          },
          styleProps: [
            {
              name: 'flexDirection',
              type: StylePropType.ShortEnum,
              EnumValues: ['row', 'row-reverse', 'column', 'column-reverse'],
              EnumIcons: ['arrow_forward', 'arrow_backward', 'arrow_downward', 'arrow_upward'],
            }, {
              name: 'flexWrap',
              type: StylePropType.ShortEnum,
              EnumValues: ['nowrap', 'wrap', 'wrap-reverse'],
              EnumIcons: ['close', 'wrap_text', 'wrap_text'],
              EnumIconStyles: [null, null, { 'transform': 'scaleY(-1)' }]
            }, {
              name: 'justifyContent',
              type: StylePropType.LongEnum,
              EnumValues: [
                'normal',
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around']
            }, {
              name: 'alignItems',
              type: StylePropType.LongEnum,
              EnumValues: [
                'normal',
                'flex-start',
                'flex-end',
                'center',
                'baseline',
                'stretch']
            }, {
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
            }, {
              name: 'alignSelf',
              type: StylePropType.LongEnum,
              EnumValues: [
                'auto',
                'flex-start',
                'flex-end',
                'center',
                'baseline',
                'stretch']
            }, {
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
          ifShow(configStyle: ConfigStyle, computedStyles: CSSStyleDeclaration) {
            if (!configStyle) return false
            let a = [`relative`, `absolute`, `fixed`]
            let propName = 'position'
            if (configStyle[propName]) return a.includes(configStyle[propName])
            return a.includes(computedStyles[propName])
          },
          styleProps: [
            {
              name: 'offset',
              type: StylePropType.BoxInput,
              boxInputProps: ['top', 'right', 'bottom', 'left']
            }, {
              name: 'zIndex',
              type: StylePropType.ScopedNumberWithoutUnit
            }
          ]
        }, {
          name: 'float',
          type: StylePropType.ShortEnum,
          EnumValues: ['none', 'left', 'right'],
          EnumIcons: ['close', 'arrow_backward', 'arrow_forward']
        },
      ]
    }, {
      name: '尺寸',
      styleProps: [
        {
          name: 'width',
          type: StylePropType.Number,
          min: 0,
        }, {
          name: 'height',
          type: StylePropType.Number,
          min: 0,
        }, {
          name: 'margin',
          type: StylePropType.BoxInput,
          boxInputProps: ['margin-top', 'margin-right', 'margin-bottom', 'margin-left']
        }, {
          name: 'padding',
          type: StylePropType.BoxInput,
          boxInputProps: ['padding-top', 'padding-right', 'padding-bottom', 'padding-left']
        }, {
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
        }, {
          name: 'border',
          type: StylePropType.Text,
        }, {
          name: 'opacity',
          type: StylePropType.ScopedNumberWithoutUnit,
          min: 0, //TODO: 滑动条
          max: 1
        }
      ]
    }, {
      name: '文本',
      styleProps: [
        {
          name: 'fontSize',
          type: StylePropType.Number,
          min: 0,
        }, {
          name: 'color',
          type: StylePropType.Color,
        }, {
          name: 'fontWeight',
          type: StylePropType.ScopedNumberWithoutUnit,
        }, {
          name: 'direction',
          type: StylePropType.ShortEnum,
          EnumValues: ['ltr', 'rtl'],
          EnumIcons: ['arrow_forward', 'arrow_backward']
        }, {
          name: 'lineHeight',
          type: StylePropType.Number,
        }, {
          name: 'textAlign',
          type: StylePropType.ShortEnum,
          EnumValues: ['left', 'center', 'right', 'justify'],
          EnumIcons: ['format_align_left', 'format_align_center', 'format_align_right', 'format_align_justify'],
        }, {
          name: 'textDecoration',
          type: StylePropType.ShortEnum,
          EnumValues: ['none', 'underline', 'line-through'],
          EnumIcons: ['close', 'format_underlined', 'format_strikethrough']
        }, {
          name: 'textTransform',
          type: StylePropType.LongEnum,
          EnumValues: ['none', 'uppercase', 'capitalize', 'lowercase']
        }, {
          name: 'verticalAlign',
          type: StylePropType.LongEnum,
          EnumValues: ['baseline', 'sub', 'super', 'top', 'text-top', 'middle', 'bottom', 'text-bottom']
        }
      ]
    }, {
      name: '效果',
      styleProps: [
        {
          name: 'cursor',
          type: StylePropType.LongEnum,
          EnumValues: ['default', 'auto', 'crosshair', 'pointer', 'move', 'grab', 'grabbing', 'e-resize', 'ne-resize', 'nw-resize', 'n-resize', 'se-resize', 'sw-resize', 's-resize', 'w-resize', 'text', 'help',]
        }, {
          name: 'boxShadow',
          type: StylePropType.Text,
        }, {
          name: 'transform',
          type: StylePropType.Text,
        }, {
          name: 'transition',
          type: StylePropType.Text,
        }
      ]
    },
  ]
  export function getStyleProp (propName: string) {
    for (let category of styleProps) {
      let resultProp = getStylePropRecursively(category.styleProps, propName)
      if(resultProp) return resultProp
    }
  }
  /** 递归查找 prop，被上面调用 */
  function getStylePropRecursively (props: (StyleProp|stylePropsContainer)[], propName: string) {
    for (let prop of props) {
      // 如果是 container，那还需要递归查找子 props
      if (prop['ifShow']) {
        let resultProp = getStylePropRecursively((<stylePropsContainer>prop).styleProps, propName)
        if(resultProp) return resultProp
      } else {
        if (prop['name'] && prop['name'] == propName) return <StyleProp>prop
      }
    }
  }
  /** 从 数字+单位 中找出 数字 和 单位 的正则 */
  export const NUM_REGEXP: RegExp = /^-?[\d.]+/
  export const UNIT_REGEXP: RegExp = /[^\d.]+$/
  
  export function clamp (v: number, min = -Infinity, max = Infinity) {
    if(v < min) {
      return min
    } else if (v > max) {
      return max
    } else {
      return v
    }
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
  configStyles: ConfigStyle,
  computedStyles: CSSStyleDeclaration) {
  // 如果有 config style
  if(configStyles) {
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
      v = computedStyles[propName]
  }
  return v
}
// 取出 数字+单位 中的 某某（根据正则）
export function getRegExpInValue (propName: string,
  regExp: RegExp,
  configStyle: ConfigStyle,
  computedStyles: CSSStyleDeclaration) {
  let result = String(getValue(propName, configStyle, computedStyles)).match(regExp)
  // 以防未匹配到
  return result ? result[0] : ''
}