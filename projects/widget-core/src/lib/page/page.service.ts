import { Injectable, Injector, Inject } from '@angular/core';
import { Widget_Core_Config_Token, WidgetCoreConfig } from '../core.config';
import { Store } from '../store/store';
import { PreviewComponent } from '../preview/preview.component';
import { Observable } from 'rxjs';
import { serializePageConfig } from '../common/utils';
import * as uuid from 'uuid';
/**
 * 需要明确page service的职责
 */
@Injectable()
export class PageService {
  
  private _isDesignMode = true;
  public get isDesignMode(): boolean {
    return this._isDesignMode;
  }
  public set isDesignMode(v: boolean) {
    this._isDesignMode = v;
  }

  /**
   * 当前正在配置的页面，暂时只支持配置一个页面
   */
  private _currentPage:PreviewComponent;


  constructor(@Inject(Widget_Core_Config_Token) private config: WidgetCoreConfig, private store:Store ) {
    console.log(config);
  }

  /**
   * 注册当前页面
   * @param page PreviewComponent
   */
  registerPage(page:PreviewComponent){
    this._currentPage = page;
  }

  /**
   * 加载页面配置信息
   * @param id pageId
   */
  public loadPage(id:string){
    return this.store.loadPageById(id);
  }

  public savePage(id:string,pageInfoString:string){
    return this.store.savePage(id,pageInfoString);
  }

  public save():Observable<string>{
    return this.store.savePage(this._currentPage.pageId,this._currentPage.getSerializedPageConfig());
  }


}
