import { Injectable } from '@angular/core';
import { StoreInterface, Store } from './store';

@Injectable()
export class StoreHttp extends Store{
    whoAmI(): string {
        return "store-http";
    }

}