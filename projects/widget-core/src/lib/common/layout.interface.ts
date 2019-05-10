import { GridsterItem } from '../gridster/gridsterItem.interface';

export interface ISettable{
  id:string,
  classes?:string[],
  style?:any,
  settings?:any,
  path?:string

}

/**
 * 布局配置信息
 */
export interface LayoutConfig extends ISettable {
    path?:string,
    layout:LayoutConfig[],
    type:'body'|'div'|'grid'|'group'|'widget',
    content?:WidgetInfo|GridsterItem|any
    style?: ConfigEditorData
}
/**
 * 可在 editor panel 生成对应表单的配置信息格式，形如:
 * height: '168cm'
 */
export interface ConfigEditorData { [propName: string]: string }

/**
 * 页面布局模板存储结构
 */
export interface LayoutTemplate{
    name:string,
    id:string,
    layoutConfig:LayoutConfig
  }

  export interface WidgetInfo{
    name:string;
  }


