import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as _ from 'lodash';
import { WidgetDragEvent } from '../dnd/draggable-model';
import { Store } from '../store/store';
import { GridType, CompactType, DisplayGrid } from '../gridster/gridsterConfig.interface';
import { GridsterItem } from '../gridster/gridsterItem.interface';
import { LayoutConfig,LayoutTemplate } from './layout.interface';
import { WidgetLoaderManifest } from './widget.interface';
import { DefaultLayoutTemplates, DefaultLayout } from './layout-default';

@Injectable()
export class LayoutService {
  self: LayoutService = this;

  onLayoutChanged$: Observable<LayoutConfig>
  private onlayoutChangedSubject = new Subject<LayoutConfig>();

  //布局配置信息
  layoutConfig: LayoutConfig;
  //系统布局模板
  layoutTemplates: LayoutTemplate[] = DefaultLayoutTemplates;
  //自定义布局模板
  customLayoutTemplates: LayoutTemplate[] = [];
  //默认布局
  defaultLayout: LayoutConfig = DefaultLayout;

  constructor(private store: Store) {
    console.log("layoutService :: ctor.");
    this.onLayoutChanged$ = this.onlayoutChangedSubject.asObservable();

    // this.layoutConfig = this.load();
    // this.loadLayoutTemplates();
  }


  initial(layout:LayoutConfig){
    console.log("layoutService :: initial :: layoutConfig");
    this.layoutConfig = layout;
    this.onlayoutChangedSubject.next(this.layoutConfig);
  }

  /**
   * append layout
   * @param ref 父布局
   * @param layout 附加的布局
   */
  append(ref: LayoutConfig, layout: LayoutConfig) {
    this._recursiveGenerateLayoutPath(ref, layout);
    return layout;
  }

  /**
   * 删除布局
   * @param layout 
   */
  remove(layout: LayoutConfig) {
    if(layout.id =="0"){
      // this.toast.warning("body cannot be removed!");
      throw new Error("body cannot be removed!");
      
      return;
    }

    _.remove(layout.parent.layout, layout);
    // _.unset(this.layoutConfig,layout.path);//这种方式不支持，array中会保留hold
  }

  /**
   * 拖放布局
   * @param event 
   * @param parent 
   */
  move(event: WidgetDragEvent, parent: LayoutConfig) {
    console.log("layout service move ::", event);
    let droppedLayoutConfig: LayoutConfig;
    //拖动的是widget
    if (event.data.type === "widget") {
      const widgetManifest = <WidgetLoaderManifest>event.data.data;
      droppedLayoutConfig = {
        id: "",
        layout: [],
        type: 'widget',
        content: {
          name: widgetManifest.name
        }
      }
    } else {
      //拖动的是layout
      var d = <LayoutTemplate>event.data;
      droppedLayoutConfig = d.layoutConfig;
    }
    this.append(parent, _.cloneDeep(droppedLayoutConfig));
  }

  /**
   * 递归生成layout path、id、parent信息
   */
  _recursiveGenerateLayoutPath = (parent: LayoutConfig, template: LayoutConfig) => {
    const parentPath = parent.path;//|| "";
    const parentId = parent.id;
    const parentPathArray = _.toPath(parentPath);
    const currentPathArray = [...parentPathArray];
    currentPathArray.push("layout");
    currentPathArray.push(parent.layout.length.toString());

    const current: LayoutConfig = {
      id: `${parent.id}-${parent.layout.length}`,
      path: currentPathArray.join("."),
      classes: template.classes,
      style: template.style,
      settings: template.settings,
      layout: [],
      pathArray: template.pathArray,
      parent: parent,
      type: template.type,
      content: template.content
    }

    parent.layout.push(current);

    template.layout.forEach((child) => {
      this._recursiveGenerateLayoutPath(current, child);
    });
  }



  //模板相关
  addLayoutTemplate = (tpl: LayoutTemplate) => {
    this.customLayoutTemplates.push(tpl);
    this.saveLayoutTemplate();
  }

  saveLayoutTemplate() {
    //  this.store.saveCustomLayoutTemplate(this._serializeLayout(this.customLayoutTemplates));
  }

  loadLayoutTemplates = () => {
    let tpls = this.store.loadCustomLayoutTemplate();
    if (tpls) {
      this.customLayoutTemplates = JSON.parse(tpls);
    }
  }

  deleteLayoutTemplate = (tpl: LayoutTemplate) => {
    _.remove(this.customLayoutTemplates, tpl);
    this.saveLayoutTemplate();
  }

  //
  changeActivedLayoutSettings(newValue: any) {
    // this.activedLayout.config.settings = newValue;
    // this.activedLayoutSettingsChangeSubject.next(newValue);
  }

}
