export interface WidgetManifest{
    name:string,
    settingComponent?:any,
    deps?:any[]
}

export interface RegistedWidgetManifest extends WidgetManifest{
    ctor:any
} 


export class WidgetManager {
    private static _registries:{[key:string]:RegistedWidgetManifest} = WidgetManager._registries || {};
    static registry = function(info:WidgetManifest){
        return function (constructor:any) {
            WidgetManager._registries[info.name] = {
                name:info.name,
                ctor:constructor,
                settingComponent:info.settingComponent,
                deps:info.deps || []
            }
        }
    }
    static getAllRegistries = function():{[key:string]:RegistedWidgetManifest}{
        return WidgetManager._registries;
    }
    static getWidgetManifest = function(name:string):RegistedWidgetManifest{
        return WidgetManager._registries[name];
    }
     
}

export const Widget = WidgetManager.registry;