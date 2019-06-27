/**
 * @author [chengchen]
 * @email [chengchen216@hotmail.com]
 * @create date 2019-05-10 10:22:57
 * @modify date 2019-05-10 10:22:57
 * @desc [description]
 */

import { Injectable } from '@angular/core';
import { LayoutChange } from './layout';
import { Observable } from 'rxjs';

/**
 * 页面修改历史
 */
@Injectable()
export class History {
    private _shouldRecord = true;
    private _changeHistory: LayoutChange[] = [];
    private _undoHistory:LayoutChange[]=[];

    constructor() {
    }

    public subscribe(ob: Observable<LayoutChange>) {
        ob.subscribe(change => {
            if (this._shouldRecord) {
                this._changeHistory.push(change);
            }
            console.log("history::",this._changeHistory);
        });
    }
    /**
     * 撤销
     */
    public undo() {
        if(this._changeHistory && this._changeHistory.length){
            
        }
    }
    /**
     * 恢复
     */
    public redo() {

    }

}