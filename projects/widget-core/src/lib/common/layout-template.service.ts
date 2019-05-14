import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '../store/store';
import { LayoutTemplate } from './layout.interface';
import { DefaultLayoutTemplates } from './layout-default';

@Injectable()
export class LayoutTemplateService {

  //系统布局模板
  layoutTemplates: LayoutTemplate[] = DefaultLayoutTemplates;
  //自定义布局模板
  customLayoutTemplates: LayoutTemplate[] = [];

  constructor(private store: Store) {

  }

  /**
   * append layout
   * @param ref 父布局
   * @param layout 附加的布局
   */
  // append(ref: Layout, layout: Layout) {
  //   this._recursiveGenerateLayoutPath(ref, layout);
  //   return layout;
  // }

  /**
   * 拖放布局
   * @param event 
   * @param parent 
   */
  // move(event: WidgetDragEvent, parent: Layout) {
  //   console.log("layout service move ::", event);
  //   let droppedLayoutConfig: Layout;
  //   //拖动的是widget
  //   if (event.data.type === "widget") {
  //     const widgetManifest = <WidgetLoaderManifest>event.data.data;
  //     droppedLayoutConfig = {
  //       id: "",
  //       layout: [],
  //       type: 'widget',
  //       content: {
  //         name: widgetManifest.name
  //       }
  //     }
  //   } else {
  //     //拖动的是layout
  //     var d = <LayoutTemplate>event.data;
  //     droppedLayoutConfig = d.layoutConfig;
  //   }
  //   this.append(parent, _.cloneDeep(droppedLayoutConfig));
  // }

  /**
   * 递归生成layout path、id、parent信息
   */
  // _recursiveGenerateLayoutPath = (parent: Layout, template: Layout) => {
  //   const parentPath = parent.path;//|| "";
  //   const parentId = parent.id;
  //   const parentPathArray = _.toPath(parentPath);
  //   const currentPathArray = [...parentPathArray];
  //   currentPathArray.push("layout");
  //   currentPathArray.push(parent.layout.length.toString());

  //   const current: LayoutConfig = {
  //     id: `${parent.id}-${parent.layout.length}`,
  //     path: currentPathArray.join("."),
  //     classes: template.classes,
  //     style: template.style,
  //     settings: template.settings,
  //     layout: [],
  //     parent: parent,
  //     type: template.type,
  //     content: template.content
  //   }

  //   parent.layout.push(current);

  //   template.layout.forEach((child) => {
  //     this._recursiveGenerateLayoutPath(current, child);
  //   });
  // }



  //模板相关
  // addLayoutTemplate = (tpl: LayoutTemplate) => {
  //   this.customLayoutTemplates.push(tpl);
  //   this.saveLayoutTemplate();
  // }

  // saveLayoutTemplate() {
  //   //  this.store.saveCustomLayoutTemplate(this._serializeLayout(this.customLayoutTemplates));
  // }

  // loadLayoutTemplates = () => {
  //   let tpls = this.store.loadCustomLayoutTemplate();
  //   if (tpls) {
  //     this.customLayoutTemplates = JSON.parse(tpls);
  //   }
  // }

  // deleteLayoutTemplate = (tpl: LayoutTemplate) => {
  //   _.remove(this.customLayoutTemplates, tpl);
  //   this.saveLayoutTemplate();
  // }



}
