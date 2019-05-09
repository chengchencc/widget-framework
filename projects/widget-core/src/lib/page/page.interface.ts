import { ComponentFactory, Injector, ComponentRef, InjectionToken } from "@angular/core";
import { GridsterItem } from '../gridster/gridsterItem.interface';
import { Layout } from '../common/layout';

/**
 * 一个页面的完整配置信息
 */
export interface PageConfig{
    id?:string;
    info:PageInfo;
    layout:Layout;
}
/**
 * 页面基本信息
 */
export interface PageInfo{
    name:string;
    desc:string;
    cssUrls?:string[];
}






