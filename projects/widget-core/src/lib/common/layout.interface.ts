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
}

export interface CssStyleConfig { [propName: string]: string }

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


