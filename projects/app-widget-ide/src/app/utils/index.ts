import { ConfigEditorData } from 'projects/widget-core/src/lib/common/layout.interface';

/** 一条 style 属性信息 */
export interface ConfigEditorProp {
    name: string,
    type: ConfigEditorType,
    helperContent?: string,
    EnumValues?: string[],
    EnumIcons?: string[],
    EnumIconStyles?: { [k: string]: string }[],
    min?: number,
    max?: number,
    step?: number,
    boxInputProps?: string[],
    defaultValue?: string
}
export interface GetValueFn {
  (propName: string): string
}
/** 一堆可在指定条件下显示的属性集合，是否显示取决于 ifShow() */
export interface ConfigEditorPropsContainer {
  ifShow: (getValue: GetValueFn) => boolean,
  styleProps: ConfigEditorProp[]
}
/** 一个样式属性分类 */
export interface ConfigEditorPropsCategory {
  name: string,
  styleProps: (ConfigEditorProp | ConfigEditorPropsContainer)[],
}
/** 属性数据类型 */
export enum ConfigEditorType {
  LongEnum, ShortEnum,
  //默认有单位，后者无单位
  Number, ScopedNumberWithoutUnit,
  Color,
  Text,
  BoxInput,
}

export const styleProps = [{
    name: '布局',
    styleProps: [
      {
        name: 'display',
        type: ConfigEditorType.ShortEnum,
        EnumValues: ['block', 'flex']
      },
      /** flex */
      {
        ifShow(getValue: GetValueFn) {
          return getValue('display') == 'flex'
        },
        styleProps: [
          {
            name: 'flexDirection',
            type: ConfigEditorType.ShortEnum,
            EnumValues: ['row', 'row-reverse', 'column', 'column-reverse'],
            EnumIcons: ['arrow_forward', 'arrow_backward', 'arrow_downward', 'arrow_upward'],
          }, {
            name: 'flexWrap',
            type: ConfigEditorType.ShortEnum,
            EnumValues: ['nowrap', 'wrap', 'wrap-reverse'],
            EnumIcons: ['close', 'wrap_text', 'wrap_text'],
            EnumIconStyles: [null, null, { 'transform': 'scaleY(-1)' }]
          }, {
            name: 'justifyContent',
            type: ConfigEditorType.LongEnum,
            EnumValues: [
              'normal',
              'flex-start',
              'flex-end',
              'center',
              'space-between',
              'space-around']
          }, {
            name: 'alignItems',
            type: ConfigEditorType.LongEnum,
            EnumValues: [
              'normal',
              'flex-start',
              'flex-end',
              'center',
              'baseline',
              'stretch']
          }, {
            name: 'alignContent',
            type: ConfigEditorType.LongEnum,
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
            type: ConfigEditorType.LongEnum,
            EnumValues: [
              'auto',
              'flex-start',
              'flex-end',
              'center',
              'baseline',
              'stretch']
          }
        ]
      },
      {
        name: 'position',
        type: ConfigEditorType.LongEnum,
        EnumValues: ['static', 'relative', 'absolute', 'fixed', 'sticky', 'inherit', 'unset']
      },
      /** relative, absolute, fixed */
      {
        ifShow(getValue: GetValueFn) {
          return [`relative`, `absolute`, `fixed`].includes(getValue('position'))
        },
        styleProps: [
          {
            name: 'offset',
            type: ConfigEditorType.BoxInput,
            boxInputProps: ['top', 'right', 'bottom', 'left']
          }, {
            name: 'zIndex',
            type: ConfigEditorType.ScopedNumberWithoutUnit
          }
        ]
      }, {
        name: 'float',
        type: ConfigEditorType.ShortEnum,
        EnumValues: ['none', 'left', 'right'],
        EnumIcons: ['close', 'arrow_backward', 'arrow_forward']
      }, {
        name: 'order',
        type: ConfigEditorType.ScopedNumberWithoutUnit,
      }, {
        name: 'flexGrow',
        type: ConfigEditorType.ScopedNumberWithoutUnit,
        min: 0,
      }, {
        name: 'flexShrink',
        type: ConfigEditorType.ScopedNumberWithoutUnit,
        min: 0,
      }, {
        name: 'flexBasis',
        type: ConfigEditorType.Number,
        min: 0,
      }, {
        name: 'flex',
        type: ConfigEditorType.Text,
      }, {
        name: 'alignSelf',
        type: ConfigEditorType.LongEnum,
        EnumValues: [
          'auto',
          'flex-start',
          'flex-end',
          'center',
          'baseline',
          'stretch']
      }
    ]
  }, {
    name: '尺寸',
    styleProps: [
      {
        name: 'width',
        type: ConfigEditorType.Number,
        min: 0,
      }, {
        name: 'height',
        type: ConfigEditorType.Number,
        min: 0,
      }, {
        name: 'margin',
        type: ConfigEditorType.BoxInput,
        boxInputProps: ['margin-top', 'margin-right', 'margin-bottom', 'margin-left']
      }, {
        name: 'padding',
        type: ConfigEditorType.BoxInput,
        boxInputProps: ['padding-top', 'padding-right', 'padding-bottom', 'padding-left']
      }, {
        name: 'overflow',
        type: ConfigEditorType.LongEnum,
        EnumValues: ['visible', 'auto', 'hidden', 'scroll', 'scroll-x', 'scroll-y']
      },
    ]
  }, {
    name: '外观',
    styleProps: [
      {
        name: 'backgroundColor',
        type: ConfigEditorType.Color,
      }, {
        name: 'border',
        type: ConfigEditorType.Text,
      }, {
        name: 'opacity',
        type: ConfigEditorType.ScopedNumberWithoutUnit,
        min: 0, //TODO: 滑动条
        max: 1
      }
    ]
  }, {
    name: '文本',
    styleProps: [
      {
        name: 'fontSize',
        type: ConfigEditorType.Number,
        min: 0,
      }, {
        name: 'color',
        type: ConfigEditorType.Color,
      }, {
        name: 'fontWeight',
        type: ConfigEditorType.ScopedNumberWithoutUnit,
      }, {
        name: 'direction',
        type: ConfigEditorType.ShortEnum,
        EnumValues: ['ltr', 'rtl'],
        EnumIcons: ['arrow_forward', 'arrow_backward']
      }, {
        name: 'lineHeight',
        type: ConfigEditorType.Number,
      }, {
        name: 'textAlign',
        type: ConfigEditorType.ShortEnum,
        EnumValues: ['left', 'center', 'right', 'justify'],
        EnumIcons: ['format_align_left', 'format_align_center', 'format_align_right', 'format_align_justify'],
      }, {
        name: 'textDecoration',
        type: ConfigEditorType.ShortEnum,
        EnumValues: ['none', 'underline', 'line-through'],
        EnumIcons: ['close', 'format_underlined', 'format_strikethrough']
      }, {
        name: 'textTransform',
        type: ConfigEditorType.LongEnum,
        EnumValues: ['none', 'uppercase', 'capitalize', 'lowercase']
      }, {
        name: 'verticalAlign',
        type: ConfigEditorType.LongEnum,
        EnumValues: ['baseline', 'sub', 'super', 'top', 'text-top', 'middle', 'bottom', 'text-bottom']
      }
    ]
  }, {
    name: '效果',
    styleProps: [
      {
        name: 'cursor',
        type: ConfigEditorType.LongEnum,
        EnumValues: ['default', 'auto', 'crosshair', 'pointer', 'move', 'grab', 'grabbing', 'e-resize', 'ne-resize', 'nw-resize', 'n-resize', 'se-resize', 'sw-resize', 's-resize', 'w-resize', 'text', 'help',]
      }, {
        name: 'boxShadow',
        type: ConfigEditorType.Text,
      }, {
        name: 'transform',
        type: ConfigEditorType.Text,
      }, {
        name: 'transition',
        type: ConfigEditorType.Text,
      }
    ]
  }]


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
// 取出 数字+单位 中的 某某（根据正则）
export function getRegExpInValue (propName: string,
  regExp: RegExp,
  getValue: (propName: string) => any,
  // configStyle: ConfigEditorData,
  // computedStyles: CSSStyleDeclaration
  ) {
  let result = String(getValue(propName)).match(regExp)
  // 以防未匹配到
  return result ? result[0] : ''
}