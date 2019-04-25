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
    deps?: string[],
    //grid 默认配置
    grid?:{
        cols?:number,
        rows?:number
    },
    [index:string]:any
  }