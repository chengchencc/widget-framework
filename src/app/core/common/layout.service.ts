import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutConfig, LayoutTemplate } from './page.interface';
import * as _ from 'lodash';
import { DragEvent } from '../dnd/draggable-model';
import { Story } from './story/story';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  //布局选中事件
  onLayoutActived$: Observable<LayoutComponent>;
  private layoutSelectedSubject = new Subject<LayoutComponent>();

  //当前选中的布局配置信息改变事件
  onActivedLayoutSettingsChanged$:Observable<any>;
  private activedLayoutSettingsChangeSubject = new Subject<any>();

  //widget选中事件
  // onWidgetActived$: Observable<ModuleInfo>;
  // private widgetActivedSubject = new Subject<ModuleInfo>();

  //布局配置信息
  layoutConfig: LayoutConfig;
  //当前激活选中的布局
  activedLayout: LayoutComponent;
  //系统布局模板
  layoutTemplates: LayoutTemplate[] = [
    {
      id: "div",
      name: "div",
      layoutConfig: {
        id: null,
        classes: ["div"],
        style: null,
        layout: [],
        type: "div"
      }
    },
    {
      id: "container",
      name: "container",
      layoutConfig: {
        id: null,
        classes: ["container"],
        style: null,
        layout: [],
        type: "div"
      }
    },
    {
      id: "grid",
      name: "grid",
      layoutConfig: {
        id: null,
        classes: ["grid"],
        style: null,
        layout: [],
        type: "grid"
      }
    },
    {
      id: "row-66",
      name: "row-66",
      layoutConfig: {
        id: null,
        classes: ["row"],
        style: null,
        type: "group",
        layout: [
          {
            id: null,
            classes: ["col-6"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-6"],
            style: null,
            type: "div",
            layout: []
          }
        ]
      }
    },
    {
      id: "row-4-8",
      name: "row-4-8",
      layoutConfig: {
        id: null,
        classes: ["row"],
        style: null,
        type: "group",
        layout: [
          {
            id: null,
            classes: ["col-4"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-8"],
            style: null,
            type: "div",
            layout: []
          }
        ]
      }
    },
  ];
  //自定义布局模板
  customLayoutTemplates: LayoutTemplate[] = [];
  //默认布局
  defaultLayout: LayoutConfig = {
    id: '0',
    path: null,
    classes: ['body'],
    type: "body",
    layout: [],
    parent: null
  };

  constructor(private story:Story) {
    this.layoutConfig = this.load();
    console.log("first loaded layout config...", this.layoutConfig);
    this.loadLayoutTemplates();
    this.onLayoutActived$ = this.layoutSelectedSubject.asObservable();

    this.onActivedLayoutSettingsChanged$ = this.activedLayoutSettingsChangeSubject.asObservable();

    // this.onWidgetActived$ = this.widgetActivedSubject.asObservable();
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
    _.remove(layout.parent.layout, layout);
    // _.unset(this.layoutConfig,layout.path);//这种方式不支持，array中会保留hold
  }

  /**
   * 拖放布局
   * @param event 
   * @param ref 
   */
  move(event: DragEvent, ref: LayoutConfig) {
    var d = <LayoutTemplate>event.data;
    this.append(ref, _.cloneDeep(d.layoutConfig));
    return;
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
    }


    parent.layout.push(current);

    // current.id = `${parent.id}-${parent.layout.length}`
    // current.parent = parent;
    // current.path = currentPathArray.join(".");

    template.layout.forEach((child) => {
      this._recursiveGenerateLayoutPath(current, child);
    });
  }

  /**
   * 递归生成parent引用
   */
  _recursiveGenerateParent = (obj: LayoutConfig) => {
    const parent = obj;
    obj.layout.forEach((v, i) => {
      if (!v) return null;
      v.parent = parent;
      this._recursiveGenerateParent(v);
    })
  }

  /**
   * 将LayoutConfig序列化为json，忽略掉parent
   * @param obj LayoutConfig
   */
  _serializeLayout(obj: LayoutConfig | LayoutTemplate[]): string {
    return JSON.stringify(obj, (key, value) => {
      if (key === "parent") {
        return undefined;
      }
      return value;
    });
  }

  /**
   * 反序列化为LayoutConfig
   * @param layoutString string
   */
  _deserializeLayout(layoutString: string): LayoutConfig {
    return JSON.parse(layoutString);
  }

  flattenKeys = (obj, path = []) =>
    !_.isObject(obj)
      ? { [path.join('.')]: obj }
      : _.reduce(obj, (cum, next, key) => _.merge(cum, this.flattenKeys(next, [...path, key])), {});

  /**
   * 当布局被选中后，激活的事件
   * @param component 
   */
  activeLayout(component: LayoutComponent) {
    this.activedLayout = component;
    this.layoutSelectedSubject.next(component);
  }

  /**
   * 保存页面配置信息
   */
  save() {
    console.log("saving...", this.layoutConfig);
    var result = this._serializeLayout(this.layoutConfig);
    console.log(result);
    this.story.savePageLayoutConfig("pagename",result);
  }
  /**
   * 第一次加载页面布局
   */
  load(): LayoutConfig {
    const s = this.story.loadPageLayoutConfig("pagename");
    if (s) {
      var layout = this._deserializeLayout(s);
      this._recursiveGenerateParent(layout);
      return layout;
    }
    else {
      return this.defaultLayout;
    }
  }
//模板相关

  addLayoutTemplate = (tpl: LayoutTemplate) => {
    this.customLayoutTemplates.push(tpl);
    this.saveLayoutTemplate();
  }

  saveLayoutTemplate() {
    // console.log("save custom layout template", this._serializeLayout(this.customLayoutTemplates));
    // window.localStorage.setItem("layout-template", this._serializeLayout(this.customLayoutTemplates));
    this.story.saveCustomLayoutTemplate(this._serializeLayout(this.customLayoutTemplates));
  }

  loadLayoutTemplates = () => {
    let tpls = this.story.loadCustomLayoutTemplate(); //window.localStorage.getItem("layout-template");
    if (tpls) {
      this.customLayoutTemplates = JSON.parse(tpls);
    }
  }

  deleteLayoutTemplate = (tpl: LayoutTemplate) => {
    _.remove(this.customLayoutTemplates, tpl);
    this.saveLayoutTemplate();
  }

  //
  changeActivedLayoutSettings(newValue:any){
    // this.activedLayout.config.settings = newValue;
    // this.activedLayoutSettingsChangeSubject.next(newValue);
  }


  // activeWidget(widgetInfo:ModuleInfo){
  //   this.widgetActivedSubject.next(widgetInfo);
  // }
}
