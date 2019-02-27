import { ComponentFactory, Injector, ComponentRef } from "@angular/core";

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

/**
 * 布局配置信息
 */
export interface LayoutConfig{
    id:string,
    path?:string,
    classes?:string[],
    style?:any,
    settings?:any,
    parent?:LayoutConfig,
    layout:LayoutConfig[],
    type:'body'|'div'|'grid'|'group'|'widget',
    pathArray?:string[],
    widgetInfo?:WidgetInfo
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

  }



export interface WidgetLoaderManifest {
    //名称
    name: string;
    //显示名称
    displayName: string;
    //预览图地址
    previewUrl?: string;
    //路径url
    path: string;
    src: string;
    //module name
    moduleName: string;
    //描述
    description?: string;
    //是否已注册
    registered?: boolean;
    //依赖的第三方插件
    deps?: string[]
}

export interface DynamicComponetMetaData {
    factory: ComponentFactory<any>;
    injector: Injector;
    componentRef: ComponentRef<any>;
}