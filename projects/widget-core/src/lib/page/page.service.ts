import { Injectable, Injector, Inject } from '@angular/core';
import { Widget_Core_Config_Token, WidgetCoreConfig } from '../core.config';
import { Store } from '../store/store';

@Injectable()
export class PageService {

  constructor(@Inject(Widget_Core_Config_Token) private config: WidgetCoreConfig, private store:Store ) {
    console.log(config);
  }

  _isDesignMode = true;

  public get isDesignMode(): boolean {
    return this.isDesignMode;
  }

  public set isDesignMode(v: boolean) {
    this._isDesignMode = v;
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

}
