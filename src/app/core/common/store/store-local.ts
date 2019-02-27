import { Inject, Injectable } from '@angular/core';
import { StoreInterface, Store } from './store';

// @Injectable()
export class StoreLocal extends Store{
    whoAmI(): string {
        return "story-local";
    }

}