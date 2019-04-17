import { Injectable, Injector, Inject } from '@angular/core';
import { Widget_Core_Config_Token, WidgetCoreConfig } from '../core.config';

@Injectable()
export class PageService {

  constructor(@Inject(Widget_Core_Config_Token) private config: WidgetCoreConfig) {
    console.log(config);
  }

  _isDesignMode = true;

  public get isDesignMode(): boolean {
    return this.isDesignMode;
  }

  public set isDesignMode(v: boolean) {
    this._isDesignMode = v;
  }
}