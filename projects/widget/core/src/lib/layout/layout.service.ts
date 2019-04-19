import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LayoutComponent } from './components/layout.component';
import * as _ from 'lodash';
import { WidgetDragEvent } from '../dnd/draggable-model';
import { Store } from '../store/store';
import { WidgetSettableDirective } from '../settable/widget-settable.directive';
import { GridType, CompactType, DisplayGrid } from '../gridster/gridsterConfig.interface';
import { GridsterItem } from '../gridster/gridsterItem.interface';
import { WidgetLoaderManifest } from '../loader/widget-loader';
import { LayoutConfig,LayoutTemplate } from './layout.interface';



@Injectable()
export class LayoutService {

  //选中设置元素
  onSelectSettableItem$:Observable<WidgetSettableDirective>
  private onSelectSettableItemSubject = new Subject<WidgetSettableDirective>();
  selectedSettableItem:WidgetSettableDirective;

  //布局选中事件
  onLayoutActived$: Observable<LayoutComponent>;
  private layoutSelectedSubject = new Subject<LayoutComponent>();

  //当前选中的布局配置信息改变事件
  onActivedLayoutSettingsChanged$: Observable<any>;
  private activedLayoutSettingsChangeSubject = new Subject<any>();

  //widget选中事件
  // onWidgetActived$: Observable<ModuleInfo>;
  // private widgetActivedSubject = new Subject<ModuleInfo>();

  self:LayoutService = this;

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
        settings:null,
        layout: [],
        type: "grid",
        content: []
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
    {
      id: "row-4-4-4",
      name: "row-4-4-4",
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
            classes: ["col-4"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-4"],
            style: null,
            type: "div",
            layout: []
          }
        ]
      }
    },
    {
      id: "row-3-3-3",
      name: "row-3-3-3",
      layoutConfig: {
        id: null,
        classes: ["row"],
        style: null,
        type: "group",
        layout: [
          {
            id: null,
            classes: ["col-3"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-3"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-3"],
            style: null,
            type: "div",
            layout: []
          },
          {
            id: null,
            classes: ["col-3"],
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

  constructor(private store: Store) {
    this.layoutConfig = this.load();
    console.log("first loaded layout config...", this.layoutConfig);
    this.loadLayoutTemplates();
    this.onLayoutActived$ = this.layoutSelectedSubject.asObservable();

    this.onActivedLayoutSettingsChanged$ = this.activedLayoutSettingsChangeSubject.asObservable();

    this.onSelectSettableItem$ = this.onSelectSettableItemSubject.asObservable();
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
    console.log(typeof event.data);
    let droppedLayoutConfig:LayoutConfig;
    //拖动的是widget
    if (event.data.type === "widget") {
      const widgetManifest = <WidgetLoaderManifest>event.data.data;
      droppedLayoutConfig={
        id:"",
        layout:[],
        type:'widget',
        content:{
          name:widgetManifest.name
        }
      }
    } else {
      //拖动的是layout
      var d = <LayoutTemplate>event.data;
      droppedLayoutConfig = d.layoutConfig;
    }
    this.append(parent, _.cloneDeep(droppedLayoutConfig));

    // return;
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
      content:template.content
    }

    parent.layout.push(current);

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
   * 选中可设置项
   * @param item settable item
   */
  selectSettable(item:WidgetSettableDirective){
    this.selectedSettableItem = item;
    this.onSelectSettableItemSubject.next(item);
  } 

  /**
   * 保存页面配置信息
   */
  save() {
    console.log("saving...", this.layoutConfig);
    var result = this._serializeLayout(this.layoutConfig);
    console.log(result);
    this.store.savePageLayoutConfig("pagename", result);
  }
  /**
   * 第一次加载页面布局
   */
  load(): LayoutConfig {
    const s = this.store.loadPageLayoutConfig("pagename");
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
     this.store.saveCustomLayoutTemplate(this._serializeLayout(this.customLayoutTemplates));
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


  // activeWidget(widgetInfo:ModuleInfo){
  //   this.widgetActivedSubject.next(widgetInfo);
  // }
}
