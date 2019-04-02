import { InjectionToken } from '@angular/core';

export interface ICoreConfig{
    widgetManifestUrl:string;
}

export const Core_Config_Token = new InjectionToken<ICoreConfig>("core_config");

export const CoreConfig:ICoreConfig = {
    widgetManifestUrl:""
}