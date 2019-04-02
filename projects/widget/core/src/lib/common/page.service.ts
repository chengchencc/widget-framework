import { Injectable, Injector, Inject } from '@angular/core';
import { RuntimeConfig, Runtime_Config_Token } from './page.interface';

@Injectable()
export class PageService {

  constructor(@Inject(Runtime_Config_Token) private runtimeConfig: RuntimeConfig) {
    console.log(runtimeConfig);
  }

  _isDesignMode = true;

  public get isDesignMode(): boolean {
    return this.isDesignMode;
  }

  public set isDesignMode(v: boolean) {
    this._isDesignMode = v;
  }
}
