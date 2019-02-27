import { Injectable, Injector, Inject } from '@angular/core';
import { RuntimeConfig } from './page.interface';

@Injectable()
export class PageService {

  constructor(
    @Inject('runtimeConfig') private runtimeConfig:RuntimeConfig,
    
  ) { 
    console.log(runtimeConfig);
  }
}
