import { ISettable } from './settable.interface';
import { GridsterItem } from '../gridster/gridsterItem.interface';

/**
 * 布局配置信息
 */
export interface LayoutConfig extends ISettable {
    path?:string,
    parent?:LayoutConfig,
    layout:LayoutConfig[],
    type:'body'|'div'|'grid'|'group'|'widget',
    pathArray?:string[],
    content?:WidgetInfo|GridsterItem|any
}

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


