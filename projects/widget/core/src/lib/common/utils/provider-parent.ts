import { forwardRef } from '@angular/core';
import * as _ from 'lodash';

// Helper method to provide the current component instance in the name of a `parentType`.
// The `parentType` defaults to `Parent` when omitting the second parameter.
export function provideParent(component: any, parentType: any) {
    return { provide: parentType, useExisting: forwardRef(() => component) };
  }

export function deepClone(obj:any){
  return _.cloneDeep(obj);
  // return JSON.parse(JSON.stringify(obj));
}