import { InjectionToken } from '@angular/core';

export interface WidgetCoreConfig{
    evn:'design'|'runtime';
    widgetManifestUrl:string;
}

export const Widget_Core_Config_Token = new InjectionToken("Widget_Core_Config_Token");

export const DefaultWidgetCoreConfig:WidgetCoreConfig={
    evn:"runtime",
    widgetManifestUrl:""
}