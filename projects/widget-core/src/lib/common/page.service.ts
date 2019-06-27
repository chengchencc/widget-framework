import { Injectable, Injector, Inject, KeyValueDiffers, IterableDiffers } from '@angular/core';
import { Widget_Core_Config_Token, WidgetCoreConfig } from '../core.config';
import { Store } from '../store/store';
import { PreviewComponent } from '../preview/preview.component';
import { Observable, Subject } from 'rxjs';
import { serializePageConfig, DeserializePageConfig } from './utils';
import * as uuid from 'uuid';
import { Layout } from './layout';
import { DefaultLayout } from './layout-default';
import { History } from './history';
import { map } from 'rxjs/operators';

/**
 * 一个页面的完整配置信息
 */
export interface PageConfig {
  id?: string;
  info: PageInfo;
  layout: Layout;
}
/**
* 页面基本信息
*/
export interface PageInfo {
  name: string;
  desc: string;
  cssUrls?: string[];
}

/**
 * 需要明确page service的职责
 */
@Injectable()
export class PageService {

  public id: string = "";
  public info: PageInfo = { name: "", desc: "", cssUrls: [] };
  public layout: Layout;

  /**
   * 当前正在配置的页面，暂时只支持配置一个页面
   */
  private _currentPage: PreviewComponent;
  private _originalConfig: PageConfig;
  public isInit = false;

  public layoutChanged: Subject<Layout> = new Subject<Layout>();
  public pageInitialed: Subject<Layout> = new Subject<Layout>();

  constructor(
    @Inject(Widget_Core_Config_Token) private evnConfig: WidgetCoreConfig,
    private store: Store,
    private _history: History,
    private _KeyValueDiffer: KeyValueDiffers,
    private _iterableDiffers: IterableDiffers
  ) { }

  public get isDesignMode(): boolean {
    return this.evnConfig.evn === "design";
  }

  /**
   * 获取当前正在配置的页面
   */
  public get currentPage(): PreviewComponent {
    return this._currentPage;
  }

  /**
   * 初始化
   * @param config 支持两种类型 `PageConfig`,`string`类型代表传入的为pageId
   */
  public init(config: PageConfig) {
    this._originalConfig = config;

    this.info = config.info;

    this.layout = new Layout(null, this._originalConfig.layout, this._KeyValueDiffer, this._iterableDiffers);

    this.layoutChanged.next(this.layout);

    this._history.subscribe(this.layout.changes);

    this.isInit = true;
    this.pageInitialed.next(this.layout);
  }

  public initByPageId(pageId: string): Observable<PageService> {
    this.id = pageId;
    return this.store.loadPageById(this.id).pipe(
      map(pageConfigString => {
        let config: PageConfig;
        if (pageConfigString) {
          config = JSON.parse(pageConfigString);
        } else {
          config = this._initialNewPageInfo();
        }
        //通过异步更新的方式，防止angular二次变化监测报错问题 。
        //参考：https://juejin.im/entry/59f0cc8a6fb9a0452935f979
        setTimeout(() => {
          this.init(config);
        });
        return this;
      })
    );
  }

  /**
   * 注册当前页面
   * @internal
   * @param page PreviewComponent
   */
  public registerPage(page: PreviewComponent) {
    this._currentPage = page;
  }

  /**
   * 加载页面配置信息
   * @param id pageId
   */
  public loadPage(id: string) {
    return this.store.loadPageById(id);
  }

  public savePage(id: string, pageInfoString: string) {
    return this.store.savePage(id, pageInfoString);
  }

  public save(): Observable<string> {
    const s = JSON.stringify(this);
    return this.store.savePage(this._currentPage.pageId, s);
  }

  private toJSON() {
    const { id, info, layout } = this;
    return { id, info, layout };
  }

  private _stringify(): string {
    const { id, info, layout } = this;
    return serializePageConfig({ id, info, layout });
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
      layout: new Layout(null, DefaultLayout, this._KeyValueDiffer, this._iterableDiffers)
    };
    return newPage;
  }

}
