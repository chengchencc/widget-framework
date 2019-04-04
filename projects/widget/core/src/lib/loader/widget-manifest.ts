export interface WidgetManifest{
    name:string,
    settingComponent?:any,
    deps?:any[]
}

export interface RegistedWidgetManifest extends WidgetManifest{
    ctor:any
} 
//方案1
export function Widget(info:WidgetManifest) {
    return (constructor) => {
        Widget.prototype.registry[info.name] = {
            name:info.name,
            ctor: constructor,
            settingComponent:info.settingComponent,
            deps: info.deps || []
        };
    };
}

Widget.prototype.registry = Widget.prototype.registry || {};

Widget.prototype.getProviders = function () {
    var registry = this.registry;
    return Object.keys(registry).map(function (key) {
        return {
            provide: key,
            useClass: registry[key].ctor,
            deps: registry[key].deps
        };
    });
};

Widget.prototype.getWidgetType = function (name) {
    return this.registry[name].ctor;
}

Widget.prototype.getWidgetRegistryInfo = function (name) {
    return this.registry[name];
}


// angular aot编译不支持以下方式，不支持static及lambda表达式，未找到解决方案，及采用方案1
// export class WidgetManager {
//     private static _registries:{[key:string]:RegistedWidgetManifest} = WidgetManager._registries || {};
    
//     //@dynamic
//     static registry = function(info:WidgetManifest){
//         return function (constructor:any) {
//             WidgetManager._registries[info.name] = {
//                 name:info.name,
//                 ctor:constructor,
//                 settingComponent:info.settingComponent,
//                 deps:info.deps || []
//             }
//         }
//     }
//     static getAllRegistries = function():{[key:string]:RegistedWidgetManifest}{
//         return WidgetManager._registries;
//     }
//     static getWidgetManifest = function(name:string):RegistedWidgetManifest{
//         return WidgetManager._registries[name];
//     }
     
// }

// export const Widget = WidgetManager.registry;
