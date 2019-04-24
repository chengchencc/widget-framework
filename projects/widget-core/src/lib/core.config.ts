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