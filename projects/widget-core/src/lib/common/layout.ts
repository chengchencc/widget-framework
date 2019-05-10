/**
 * @author [chengchen]
 * @email [chengchen216@hotmail.com]
 * @create date 2019-05-09 15:22:02
 * @modify date 2019-05-09 15:22:02
 * @desc [description]
 */

import { Injectable, KeyValueDiffer, KeyValueDiffers, IterableDiffers, IterableDiffer, KeyValueChangeRecord, KeyValueChanges, IterableChanges, IterableChangeRecord } from '@angular/core';
import { LayoutConfig } from './layout.interface';
import { Subject } from 'rxjs';
import { newUUID } from './utils';

export type PathType = string | string[];
export type LayoutType = "body" | "div" | "grid" | "group" | "widget";
export type LayoutPropNameType = 'self' | 'style' |'classes' | 'layout' | 'content' | 'settings';

/**
 * Layout 对象树
 */
export class Layout {
    public id: string;
    public path?: string;
    public type: LayoutType;
    public parent?: Layout;
    public layout: Layout[] = [];
    public content?: any;
    public classes?: string[];
    public style?: any;
    public settings?: any;

    /** 变化，通过冒泡的方式向上冒泡 */
    public changes: Subject<LayoutChange>;
    /**原始配置信息 */
    private _originConfig: LayoutConfig;
    /**自身变更项 */
    private _selfKeyValueDiffer: KeyValueDiffer<string, any>;
    private _styleKeyValueDiffer: KeyValueDiffer<string, any>;
    private _classesIterableDiffer: IterableDiffer<string>;
    private _layoutChildIterableDiffer: IterableDiffer<Layout>;

    //TODO: settings 为对象，里面结构不确定，需要实现单独的ObjectDiffer,暂时先不处理
    private _settingsDiffer: KeyValueDiffer<string, any>;
    //TODO: settings 为对象，里面结构不确定，需要实现单独的ObjectDiffer,暂时先不处理
    private _contentDiffer: KeyValueDiffer<string, any>;

    constructor(parent: Layout, config: LayoutConfig, private _KeyValueDiffer: KeyValueDiffers, private _iterableDiffers: IterableDiffers) {
        this.parent = parent;
        this._originConfig = config;

        this.id = config.id || newUUID();
        this.path = config.path;
        this.type = config.type;
        this.classes = config.classes || [];
        this.style = config.style || {};
        this.settings = config.settings || {};
        this.content = config.content || {};
        this.changes = new Subject<LayoutChange>();

        config.layout.forEach(element => {
            this.layout.push(new Layout(this, element, this._KeyValueDiffer, this._iterableDiffers));
        });

        this._selfKeyValueDiffer = this._KeyValueDiffer.find(this._getSelfDifferObject()).create();
        this._styleKeyValueDiffer = this._KeyValueDiffer.find(this.style).create();
        this._classesIterableDiffer = this._iterableDiffers.find(this.classes).create();
        this._layoutChildIterableDiffer = this._iterableDiffers.find(this.layout).create();

        this.changes.subscribe(change => {
            if (this.parent)
                this.parent.changes.next(change);
        });

        //docheck 需要提前执行一遍，来建立当前状态的影像
        this._doCheck();
    }

    private _getSelfDifferObject() {
        const { id, path, type, classes, style, settings, content, layout, parent } = this;
        return { id, path, type, classes, style, settings, content, layout, parent };
    }

    public getNode(path: string) {

    }
    public appendNode(node: LayoutConfig) {
        this.layout.push(new Layout(this, node, this._KeyValueDiffer, this._iterableDiffers));
        this._doCheck();
    }
    public removeNode(node: Layout) {
        this.layout.splice(this.layout.indexOf(node), 1);
        this._doCheck();
    }

    public insertBefore(node:LayoutConfig) {
        throw new Error("not implements!");
    }
    public insertAfter(node:LayoutConfig) {
        throw new Error("not implements!");
    }
    /**
     * 检查变更
     * 当有自身无法检查到的变更时，须通过此方法手动触发变更检查
     * 当前Layout类只能检测到Layout节点新增、删除、修改后的变更，
     * 其他 `style settings classes content id path type`等属性的变化无法检测，需要手动触发！
     */
    public checkChanges(){
        this._doCheck();
    }

    //TODO:需要合并changes！！！保证每次步操作，只生成一个Changes
    private _doCheck() {
        this._doCheckSelf();
        this._doCheckStyle();
        this._doCheckClasses();
        this._doCheckLayout();
    }

    private _doCheckSelf() {
        const selfChanges = this._selfKeyValueDiffer.diff(this._getSelfDifferObject());
        if (selfChanges) {
            this._handlePropChanges(selfChanges,'self', this);
        }
    }

    private _doCheckLayout() {
        const layoutChanges = this._layoutChildIterableDiffer.diff(this.layout);
        if (layoutChanges) {
            this._handleIterableChanges(layoutChanges,'layout', this.layout);
        }
    }

    private _doCheckStyle() {
        const styleChanges = this._styleKeyValueDiffer.diff(this.style);
        if (styleChanges) {
            this._handlePropChanges(styleChanges, 'style' ,this.style);
        }
    }

    private _doCheckClasses() {
        const classesChanges = this._classesIterableDiffer.diff(this.classes);
        if (classesChanges) {
            this._handleIterableChanges(classesChanges, 'classes',this.classes);
        }
    }


    private _handlePropChanges(changes: KeyValueChanges<string, any>, propName:LayoutPropNameType ,changedObject: any ) {
        changes.forEachAddedItem((record) => {
            this.changes.next({
                node: this,
                type: ChangeType.PropAddValue,
                changedObjectRef: changedObject,
                record: record
            })
        });
        changes.forEachChangedItem(record => {
            this.changes.next({
                node: this,
                type: ChangeType.PropChangeValue,
                changedObjectRef: changedObject,
                record: record
            })
        });
        changes.forEachRemovedItem(record => {
            this.changes.next({
                node: this,
                type: ChangeType.PropRemoveValue,
                changedObjectRef: changedObject,
                record: record
            })
        });
    }

    private _handleIterableChanges(changes: IterableChanges<string | Layout>, propName:LayoutPropNameType, changedObject:any) {
        changes.forEachAddedItem(record => {
            this.changes.next({
                node: this,
                type: ChangeType.AppendChild,
                changedObjectRef: changedObject,
                record: record
            })
        });
        //必须优先触发remove后再触发move，因为remove 节点后，肯定会触发后面节点的move
        changes.forEachRemovedItem(record => {
            this.changes.next({
                node: this,
                type: ChangeType.RemoveChild,
                changedObjectRef: changedObject,
                record: record
            })
        });
        changes.forEachMovedItem(record => {
            this.changes.next({
                node: this,
                type: ChangeType.MoveChild,
                changedObjectRef: changedObject,
                record: record
            });
        });
        
    }

    /**序列化为json string字符串 */
    public stringify() {
        throw new Error("method not implements!");
    }

}

export class LayoutChange {
    node: Layout;
    type: ChangeType;
    propName?:  LayoutPropNameType;
    changedObjectRef: any;
    record: KeyValueChangeRecord<any, any> | IterableChangeRecord<string | Layout>
}

export enum ChangeType {
    AppendChild = "AppendChild",
    MoveChild = "MoveChild",
    RemoveChild = "RemoveChild",
    /** 更新属性 */
    ChangeProp = "ChangeProp",
    PropAddValue = "PropAddValue",
    PropRemoveValue = "PropRemoveValue",
    PropChangeValue = "PropChangeValue"
}