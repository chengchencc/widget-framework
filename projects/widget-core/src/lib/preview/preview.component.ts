import { Component, OnInit, Input, Inject } from '@angular/core';
import { LayoutService } from '../common/layout.service';
import { LayoutConfig } from '../common/layout.interface';
import { PageConfig } from '../page/page.interface';
import { PageService } from '../page/page.service';
import { DefaultLayout } from '../common/layout-default';
import { JsonPipe } from '@angular/common';
import { serializePageConfig, DeserializePageConfig } from '../common/utils';
import { TypeHelper } from '../utils/type-helper';
import { Widget_Core_Config_Token, WidgetCoreConfig } from '../core.config';
import { Store } from '../store/store';
import { SettingService } from '../settable/setting.sevice';
import { Observable } from 'rxjs';

/**
 * widget core 页面显示组件。
 * 组件依赖 page配置信息，进行渲染显示，page配置信息支持以下两种方式传入：
 * 1.直接通过 @Input() page 传入
 * 2.传入pageId，或者page路径，通过store根据此值去异步获取。此方式需要注入新的store，依赖此store去获取数据
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

  private _pageConfig: PageConfig;

  @Input()
  public set config(v: PageConfig) {
    this._pageConfig = <PageConfig>v;
    this.layoutService.initial(this._pageConfig.layout);
  } 

  
  public get config() : PageConfig {
    return this._pageConfig;
  }
  

  // @Input()
  // public set config(v: PageConfig | string) {
  //   if (TypeHelper.isString(v)) {
  //     v = DeserializePageConfig(<string>v);
  //   }
  //   this._pageConfig = <PageConfig>v;
  //   this.layoutService.initial(this._pageConfig.layout);
  // } 
  @Input()
  public set configString(v: string) {
    this.config = DeserializePageConfig(<string>v);
  } 

  @Input()
  public set pageId(v: string) {
    //通过异步更新的方式，防止angular二次变化监测报错问题 。
    //参考：https://juejin.im/entry/59f0cc8a6fb9a0452935f979
    setTimeout(() => {
      this.pageService.loadPage(v).subscribe((page) => {
        if (page) {
          this.config = page;
        } else {
          console.log(this._initialNewPageInfo());
          this.config = this._initialNewPageInfo();
          this.config.id = v;
        }
      })
    }, 0);
  }

  
  public get pageId() : string {
    return this._pageConfig.id;
  }
  


  public get layoutConfig(): LayoutConfig {
    return this._pageConfig ? this._pageConfig.layout : DefaultLayout;
  }

  constructor(
    public pageService: PageService, 
    public layoutService: LayoutService,
    public settingService:SettingService,
    @Inject(Widget_Core_Config_Token) private evnConfig: WidgetCoreConfig, 
    private store:Store ) {}

  ngOnInit() {
    this.pageService.registerPage(this);
  }

  /**
   * 获取序列化后的页面配置信息
   */
  public getSerializedPageConfig(): string {
    return serializePageConfig(this._pageConfig);
  }

  public savePage():Observable<string>{
    return this.store.savePage(this.pageId,serializePageConfig(this._pageConfig));
  }

  /**
   * 初始化新增页面时的默认页面配置信息
   */
  private _initialNewPageInfo(): PageConfig {
    const newPage = {
      info: {
        name: "",
        desc: ""
      },
      layout: DefaultLayout
    };
    return newPage;
  }


}
