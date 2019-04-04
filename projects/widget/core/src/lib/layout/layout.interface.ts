import { ISettable } from '../settable/settable.interface';
import { GridsterItem } from '../gridster';

/**
 * 布局配置信息
 */
export interface LayoutConfig extends ISettable {
    id:string,
    path?:string,
    parent?:LayoutConfig,
    layout:(LayoutConfig)[],
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
