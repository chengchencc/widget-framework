/**
 * @author [chengchen]
 * @email [chengchen216@hotmail.com]
 * @create date 2019-05-09 14:31:31
 * @modify date 2019-05-09 14:31:31
 * @desc [description]
 */

import { IterableDiffers,KeyValueDiffers, KeyValueDiffer, IterableDiffer } from '@angular/core';
import { TypeHelper } from "../utils/type-helper";

/**
 * 变更检查对象
 * 目的：继承此对象的对象所有`值`变化、`子对象值`变更、`对象内的列表内的对象值`变化狗，都能进行变更检测。
 * TODO:未完成，考虑到变更检查所有子类及列表下的子对象很难实现。
 */
export abstract class ObjectDiffer{

    private _selfDiffer:KeyValueDiffer<string,any>;
    private _iterablePropDiffers:Map<string,IterableDiffer<any>>;
    private _objectPropDiffers:KeyValueDiffer<any,any>[];

    constructor(private _KeyValueDiffer:KeyValueDiffers,private _iterableDiffers:IterableDiffers) {
                    
    }

    initialDiffers(){

        Object.keys(this).forEach(propName => {
            const value = this[propName];
            if(this._isIterableType(value)){
                //可迭代类型
                const d = this._iterableDiffers.find(value).create();
                this._iterablePropDiffers.set(propName,d);
            }else if(this._isObjectType(value)){
                //对象类型
            }else{
                // 其他类型暂不处理
            }
        });
    }

private _initialKeyValueDiffers(){

}
private _isValueType(value:any):boolean{
    return TypeHelper.isString(value) || TypeHelper.isBoolean(value) || TypeHelper.isNumber(value) || TypeHelper.isDate(value);
}
private _isIterableType(value:any):boolean{
    return TypeHelper.isArray(value) || TypeHelper.isMap(value) || TypeHelper.isSet(value);
}

private _isObjectType(value:any):boolean{
    return TypeHelper.isObject(value);
}

}