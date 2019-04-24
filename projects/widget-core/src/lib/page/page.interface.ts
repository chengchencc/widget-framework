import { ComponentFactory, Injector, ComponentRef, InjectionToken } from "@angular/core";
import { GridsterItem } from '../gridster/gridsterItem.interface';
import { LayoutConfig } from '../common/layout.interface';

/**
 * 一个页面的完整配置信息
 */
export interface Page{
    info:PageInfo;
    layout:LayoutConfig;
}
/**
 * 页面基本信息
 */
export interface PageInfo{
    name:string;
    desc:string;
    cssUrls?:string[];
}






