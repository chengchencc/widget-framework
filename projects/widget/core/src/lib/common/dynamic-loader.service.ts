import { Injectable, ViewContainerRef, ModuleWithComponentFactories, Injector, ComponentFactory, Compiler } from '@angular/core';
import { Store } from './store/store';
import {Widget} from '../metadata/widget-manifest';
import { WidgetManager } from "../metadata/widget-manager";
import { WidgetLoaderManifest } from './page.interface';
import { Observable, of } from 'rxjs';

import * as WidgetCore from "../metadata";

//import {System}  from "systemjs";

// import "node_modules/systemjs/dist/system.js";

import { System } from 'systemjs';
declare var SystemJS: System;

import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as AngularForms from '@angular/forms';
// import * as AngularClarity from '@clr/angular';
import * as BrowserAnimations from '@angular/platform-browser/animations';

/**
 * 动态加载流程
 * 1. 加载 widget loader manifest 配置信息
 * 2. 初始化SystemJS
 * 3. 配置SystemJS，支持第三方插件的加载
 * 4. 根据要加载的部件名称，获取 widget loader manifest中相应的描述信息
 * 5. 通过SystemJS 根据部件描述信息，异步加载对应 xxx.umd.js
 * 6. 调用Angular的编译器编译xxx.umd.js
 * 7. 通过描述信息，找到编译完成的angular module中对应的组件构造工厂动态加载angular组件
 */
@Injectable()
export class DynamicLoaderService {

  constructor(
    private store: Store,
    private compiler: Compiler,
    private injector: Injector
  ) {
    console.log(store.whoAmI());
  }


  private isSystemJSInitialed: boolean = false;
  private loadedModules: { key: string, compiledModule: ModuleWithComponentFactories<any> }[] = [];

  private widgetLoaderManifestCache:Promise<WidgetLoaderManifest[]>;

  /**
   * 获取已加载的部件
   */
  getRegistries() {
    console.log("all registries::", WidgetManager.prototype.getAllRegistries());
  }
  /**
   * 获取部件注册信息
   */
  async loadWidgetLoaderManifest(): Promise<WidgetLoaderManifest[]> {

    this.widgetLoaderManifestCache = this.widgetLoaderManifestCache || this.store.loadWidgetLoaderManifest().toPromise();

    return await this.widgetLoaderManifestCache;


    // if(this.widgetLoaderManifestCache) {
    //   const result = await this.store.loadWidgetLoaderManifest().toPromise();
    // }
    // console.log("widget loader manifest", result);

    // return result;
  }

  async initialSystemJS() {

    if (this.isSystemJSInitialed) return;


    //配置systemjs
    //TODO:需要改为动态加载，并且修改为gsp cloud对应的路径

    const config = await this.loadSystemJsConfig().toPromise();

    SystemJS.config(config);

    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
    SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
    SystemJS.set('@angular/platform-browser/animations', SystemJS.newModule(BrowserAnimations));
    SystemJS.set('@angular/forms', SystemJS.newModule(AngularForms));
    //方案1，使用本地gsp-widget-core依赖
    //import * as Core from 'gsp-widget-core';
    SystemJS.set('@widget/core', SystemJS.newModule(WidgetCore));

    this.isSystemJSInitialed = true;

    //方案2.1，通过临时import后给起别名，起别名有两种方式，直接import的第二个参数，或者重新set下
    //  const core = await SystemJS.import('/assets/gsp-widget-core.umd.js');
    //  SystemJS.set('gsp-widget-core', SystemJS.newModule(core));
    //方案2.2,这个方案不行，第二个参数不是起别名
    //const core = await SystemJS.import('/assets/gsp-widget-core.umd.js','gsp-widget-core');

    //方案3，通过修改systemjs的config文件，map gsp-widget-core 到 /assets/gsp-widget-core.umd.js，然后直接通过import（gsp-widget-core）即可
    // SystemJS.config({
    //   "map": {
    //     "gsp-widget-core": "/assets/gsp-widget-core.umd.js",
    //   }
    // });
    // const urlsystemJSConfig = '/assets/gsp-widgets.systemjs.config.json';
    // const systemJSConfig = await this.http.get(urlsystemJSConfig).toPromise();
    // SystemJS.config(systemJSConfig);
    // const core = await SystemJS.import('gsp-widget-core');

  }

  /**
   * 通过systemJS加载第三方插件，此方法用户加载systemJs配置信息
   */
  loadSystemJsConfig(): Observable<any> {
    return of({
      paths: {
        'npm:': '/node_modules/',
        'third:': '/assets/third/'
      },
      map: {
        //   '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        //   '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        //   '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        //   '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        //   '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        //   'core-js': 'npm:core-js',
        //   'zone.js': 'npm:zone.js',
        //   'rxjs': 'npm:rxjs',
        //   'tslib': 'npm:tslib/tslib.js',
        'chart.js': "third:Chart.bundle.min.js"
      },
      packages: {
        //   'rxjs': { 'main': 'index.js', 'defaultExtension': 'js' },
        //   'rxjs/operators': { 'main': 'index.js', 'defaultExtension': 'js' },
        //   'rxjs/internal-compatibility': { 'main': 'index.js', 'defaultExtension': 'js' },
        //   'rxjs/testing': { 'main': 'index.js', 'defaultExtension': 'js' },
        //   'rxjs/ajax': { 'main': 'index.js', 'defaultExtension': 'js' },
        //   'rxjs/webSocket': { 'main': 'index.js', 'defaultExtension': 'js' },
        //   'rxjs-compat': { 'main': 'index.js', 'defaultExtension': 'js' },
        //   'core-js': {},
        //   'zone.js': {}
      }
    });

    //return this.http.get("/assets/systemjs.config.json");
  }

  /**
   * 通过 SystemJS 动态加载模块
   * @param moduleInfo 模块信息
   */
  async loadModuleBySystemJS2(moduleInfo: WidgetLoaderManifest) {

    let loadedModule = this.loadedModules.find(s => s.key == moduleInfo.moduleName);

    if (loadedModule) {
      return loadedModule.compiledModule;
    }

    await this.initialSystemJS();

    let module = await SystemJS.import(moduleInfo.src);

    let compiledModule = await this.compiler.compileModuleAndAllComponentsAsync(module[`${moduleInfo.moduleName}`])

    if (!this.loadedModules.find(s => s.key == moduleInfo.moduleName)) {
      this.loadedModules.push({ key: moduleInfo.moduleName, compiledModule: compiledModule });
    }

    return compiledModule;

  }

  /**
   * 通过 SystemJS 动态加载模块
   * @param name module name
   * @param jsSrc umd.js url 地址
   */
  async loadModuleBySystemJS(name, jsSrc) {

    let loadedModule = this.loadedModules.find(s => s.key == name);

    if (loadedModule) {
      return loadedModule.compiledModule;
    }

    await this.initialSystemJS();

    let jsModule = await SystemJS.import(jsSrc);

    console.log(jsModule);
    let compiledModule = await this.compiler.compileModuleAndAllComponentsAsync(jsModule[name])

    if (!this.loadedModules.find(s => s.key == name)) {
      this.loadedModules.push({ key: name, compiledModule: compiledModule });
    }

    return compiledModule;

  }

  /**
   * 初始化组件
   * @param module 编译后的模块
   * @param componentName 动态加载的组件名称
   */
  initComponent(compiledModule: ModuleWithComponentFactories<any>, componentName: string): { componentFactory: ComponentFactory<any>, componentInjector: Injector } {
    const componentType = WidgetManager.prototype.getType(componentName);
    const componentFactory = compiledModule.componentFactories.find(s => s.componentType === componentType);
    const componentInjector = Injector.create([
      ...WidgetManager.prototype.getProviders()
    ], this.injector);
    return { componentFactory: componentFactory, componentInjector: componentInjector };
  }

  async loadAndInitComponent(name:string){
    const manifests = await this.loadWidgetLoaderManifest();
    const manifest =manifests.find(s=>s.name == name);
    if(!manifest) return null;
    const compiledModule = await this.loadModuleBySystemJS(manifest.moduleName,manifest.src);
    var componentInfo = this.initComponent(compiledModule,name);
    return componentInfo;
  }

  /**
   * 初始化部件配置组件
   * @param module compiled module
   * @param componentName 
   */
  initWidgetSettingComponent(compiledModule: ModuleWithComponentFactories<any>, componentName: string): { componentFactory: ComponentFactory<any>, componentInjector: Injector } {
    const settingComponentType = WidgetManager.prototype.getRegistryInfo(componentName).settingComponent;
    if (settingComponentType) {
      const componentFactory = compiledModule.componentFactories.find(s => s.componentType === settingComponentType);
      const componentInjector = Injector.create([
        ...WidgetManager.prototype.getProviders()
      ], this.injector);
      return { componentFactory: componentFactory, componentInjector: componentInjector };
    } else {
      return null;
    }
  }

  /**
   * 创建组件
   */
  createComponent(container: ViewContainerRef, module: ModuleWithComponentFactories<any>, componentName: string) {
    const componentType = WidgetManager.prototype.getType(componentName);
    const componentFactory = module.componentFactories.find(s => s.componentType === componentType);
    const componentInjector = Injector.create([
      ...WidgetManager.prototype.getProviders()
    ], this.injector);

    return container.createComponent(componentFactory, 0, componentInjector);
  }

  /*
  *总方法 
  */
  // async LoadComponent(configJsonUrl: string, moduleName: string, componentName: string, container: ViewContainerRef) {

  //   const urlWidgetsConfig = '/assets/gsp-widgets.config.json';

  //   const widgetsConfig = <Array<ModuleInfo>>await this.loadWidgetsConfig(urlWidgetsConfig).toPromise();
  //   const moduleInfo = widgetsConfig.find(s => s.moduleName == moduleName);
  //   let module = await this.loadModuleBySystemJS(moduleInfo);

  //   return this.createComponent(container, module, componentName);
  // }

}
