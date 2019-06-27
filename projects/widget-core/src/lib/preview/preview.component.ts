/**
 * @author [chengchen]
 * @email [chengchen216@hotmail.com]
 * @create date 2019-05-09 14:32:18
 * @modify date 2019-05-09 14:32:42
 * @desc [description]
 */
import { Component, OnInit, Input, Inject, KeyValueDiffers, IterableDiffers, EventEmitter, Output } from '@angular/core';
import { PageService, PageConfig } from '../common/page.service';
import { DefaultLayout } from '../common/layout-default';
import { serializePageConfig, DeserializePageConfig } from '../common/utils';
import { Widget_Core_Config_Token, WidgetCoreConfig } from '../core.config';
import { Store } from '../store/store';
import { SettingService } from '../settable/setting.sevice';
import { Observable } from 'rxjs';
import { Layout } from '../common/layout';
import { History } from '../common/history';
import { WidgetDragEvent } from '../dnd';
import { LayoutConfig, LayoutTemplate } from '../common/layout.interface';
import { WidgetLoaderManifest } from '../common/widget.interface';

/**
 * widget core 页面显示组件。
 * 组件依赖 page配置信息，进行渲染显示，page配置信息支持以下两种方式传入：
 * 1.直接通过 `@Input() page `传入
 * 2.传入`pageId`，或者page路径，通过store根据此值去异步获取。此方式需要注入新的store，依赖此store去获取数据
 */
@Component({
  selector: 'widget-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  providers: [
    // PageService,
    // LayoutService,
    // SettingService
  ]
})
export class PreviewComponent implements OnInit {


  @Output()
  public layoutChanged:EventEmitter<Layout> = new EventEmitter<Layout>();

  constructor(
    public pageService: PageService,
    public settingService: SettingService,
    @Inject(Widget_Core_Config_Token) private evnConfig: WidgetCoreConfig) { }

  @Input()
  public set config(v: PageConfig) {
      this.pageService.init(v);
  }

  @Input()
  public set configString(v: string) {
    this.config = DeserializePageConfig(v);
    this.pageService.init(this.config);
  }

  @Input()
  public set pageId(v: string) {
    this.pageService.initByPageId(v).subscribe(()=>{
      console.log("pageservice initialed");
      this.layoutChanged.emit(this.pageService.layout);
    });
  }

  public get layout(): Layout{
    return this.pageService.layout;
  }

  public get pageId(): string {
    return this.pageService.id;
  }

  ngOnInit() {
    this.pageService.registerPage(this);
    this.pageService.layoutChanged.subscribe(layout=>{
      this.layoutChanged.emit(layout);
    })
  }

  public savePage(): Observable<string> {
    return this.pageService.save();
  }

  appendLayout(event:WidgetDragEvent){
    let layoutConfig:LayoutConfig;
    if (event.data.type === "widget") {
      //drop的是部件
      const widgetManifest = <WidgetLoaderManifest>event.data.data;
      layoutConfig = {
        id: "",
        layout: [],
        type: 'widget',
        content: {
          name: widgetManifest.name
        }
      }
    } else {
      //drop的是layout
      var tpl = <LayoutTemplate>event.data;
      layoutConfig = tpl.layoutConfig;
      //TODO:需要调整type为tpl.name
      //layoutConfig.type = 'group';
    }
    this.layout.appendNode(layoutConfig);
  }

}
