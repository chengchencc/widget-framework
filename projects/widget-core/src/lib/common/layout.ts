import { Injectable, KeyValueDiffer, KeyValueDiffers, IterableDiffers, IterableDiffer, KeyValueChangeRecord, KeyValueChanges, IterableChanges, IterableChangeRecord } from '@angular/core';
import { LayoutConfig } from './layout.interface';
import { Subject } from 'rxjs';

export type PathType = string|string[];
export type LayoutType="body" | "div" | "grid" | "group" | "widget";

export const ChangeHistory:LayoutChange[]=[];

export class Layout implements LayoutConfig{
    public id: string;
    public path?: string;    
    public type: LayoutType;
    public parent?: Layout;
    public layout: Layout[]=[];
    public content?: any;
    public classes?: string[];
    public style?: any;
    public settings?: any;

    public changes:Subject<LayoutChange>;

    private _originConfig:LayoutConfig;

    private _selfKeyValueDiffer :KeyValueDiffer<string,any>;
    private _styleKeyValueDiffer :KeyValueDiffer<string,any> ;
    private _classesIterableDiffer :IterableDiffer<string> ;
    private _layoutChildIterableDiffer:IterableDiffer<Layout>;

    //TODO: settings 为对象，里面结构不确定，需要实现单独的ObjectDiffer,暂时先不处理
    private _settingsDiffer :KeyValueDiffer<string,any> ;
    //TODO: settings 为对象，里面结构不确定，需要实现单独的ObjectDiffer,暂时先不处理
    private _contentDiffer :KeyValueDiffer<string,any> ;

    constructor(parent:Layout,config:LayoutConfig,private _KeyValueDiffer:KeyValueDiffers,private _iterableDiffers:IterableDiffers) {
        this.parent = parent;
        this._originConfig = config;

        this.id = config.id;
        this.path = config.path;
        this.type = config.type;
        this.classes = config.classes;
        this.style = config.style;
        this.settings = config.settings;
        this.content = config.content;

        config.layout.forEach(element => {
            this.layout.push(new Layout(this,element,this._KeyValueDiffer,this._iterableDiffers));
        });

        this._selfKeyValueDiffer = this._KeyValueDiffer.find(this).create();
        this._styleKeyValueDiffer = this._KeyValueDiffer.find(this.style).create();
        this._classesIterableDiffer = this._iterableDiffers.find(this.classes).create();
        this._layoutChildIterableDiffer = this._iterableDiffers.find(this.layout).create();


        this.changes.subscribe(change=>{
            if(this.parent)
                this.parent.changes.next(change);
        })
    }
    


    public getNode(path:string){

    }
    public appendNode(node:LayoutConfig){
        this.layout.push(new Layout(this,node,this._KeyValueDiffer,this._iterableDiffers));
        this._doCheck();
    }
    public removeNode(node:Layout){
        this.layout.splice(this.layout.indexOf(node),1);
        this._doCheck();
    }

    public insertBeforeNode(){
        throw new Error("not implements!");
    }
    public insertAfterNode(){
        throw new Error("not implements!");
    }

    private _doCheck(){
        this._doCheck_Self();
        this._doCheckStyle();
        this._doCheckClasses();
        this._doCheckLayout();
    }

    private _doCheck_Self(){
        const selfChanges = this._selfKeyValueDiffer.diff(this);
        if(selfChanges){
            this._handlePropChanges(selfChanges,this);
        }
    }

    private _doCheckLayout(){
        const layoutChanges = this._layoutChildIterableDiffer.diff(this.layout);
        if(layoutChanges){
            this._handleIterableChanges(layoutChanges,this.layout);
        }
    }

    private _doCheckStyle(){
        const styleChanges = this._styleKeyValueDiffer.diff(this.style);
        if(styleChanges){
            this._handlePropChanges(styleChanges,this.style);
        }
    }

    private _doCheckClasses(){
        const classesChanges = this._classesIterableDiffer.diff(this.classes);
        if(classesChanges){
            this._handleIterableChanges(classesChanges,this.classes);
        }
    }


    private _handlePropChanges(changes:KeyValueChanges<string,any>,changedObject:any=this){
        changes.forEachAddedItem((record)=>{
            this.changes.next({
                node:this,
                type:ChangeType.PropAddValue,
                changedObject:changedObject,
                record:record
            })
        });
        changes.forEachChangedItem(record=>{
            this.changes.next({
                node:this,
                type:ChangeType.PropChangeValue,
                changedObject:changedObject,
                record:record
            })
        });
        changes.forEachRemovedItem(record=>{
            this.changes.next({
                node:this,
                type:ChangeType.PropRemoveValue,
                changedObject:changedObject,
                record:record
            })
        });
    }

    private _handleIterableChanges(changes:IterableChanges<string|Layout>,changedObject){
        changes.forEachAddedItem(record=>{
            this.changes.next({
                node:this,
                type:ChangeType.AppendChild,
                changedObject:changedObject,
                record:record
            })
        });
        changes.forEachMovedItem(record=>{
            this.changes.next({
                node:this,
                type:ChangeType.MoveChild,
                changedObject:changedObject,
                record:record
            });
        });
        changes.forEachRemovedItem(record=>{
            this.changes.next({
                node:this,
                type:ChangeType.RemoveChild,
                changedObject:changedObject,
                record:record
            })
        })
    }

    public toString(){

        throw new Error("not implements!");
    }

}

export class LayoutChange{
    node:Layout;
    type:ChangeType;
    propName?:'classes'|'content'|'style'|'settings'|'self';
    changedObject:any;
    record:KeyValueChangeRecord<any,any>|IterableChangeRecord<string|Layout>
}

export enum ChangeType{
    AppendChild = "AppendChild",
    MoveChild = "MoveChild",
    RemoveChild = "RemoveChild",
    /** 更新属性 */
    ChangeProp = "ChangeProp",
    PropAddValue="PropAddValue",
    PropRemoveValue="PropRemoveValue",
    PropChangeValue="PropChangeValue"
}