

/** 属性数据类型 */
export enum ConfigEditorType {
    LongEnum, ShortEnum,
    //默认有单位，后者无单位
    Number, ScopedNumberWithoutUnit,
    Color,
    Text,
    BoxInput,
}

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



/** 从 数字+单位 中找出 数字 和 单位 的正则 */
export const NUM_REGEXP: RegExp = /^-?[\d.]+/
export const UNIT_REGEXP: RegExp = /[^\d.]+$/


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