/**
 * @author [chengchen]
 * @email [chengchen216@hotmail.com]
 * @create date 2019-05-09 15:19:21
 * @modify date 2019-05-09 15:19:21
 * @desc [description]
 */

 import { InjectionToken } from '@angular/core';

export const Widget_Core_Config_Token = new InjectionToken("Widget_Core_Config_Token");

export interface WidgetCoreConfig{
    evn:'design'|'runtime';
    widgetManifestUrl:string;
}

export const DefaultWidgetCoreConfig:WidgetCoreConfig={
    evn:"runtime",
    widgetManifestUrl:""
}