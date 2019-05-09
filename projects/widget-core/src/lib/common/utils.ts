import { PageConfig } from '../page/page.interface';
import { Layout } from './layout';

/**
 * 序列化PageConfig,序列化过程中自动忽略掉layoutConfig的parent引用，避免循环引用
 * @param pageConfig 
 */
export const serializePageConfig = function (pageConfig:PageConfig) {
    return jsonSerializeRemoveRef(pageConfig,"parent");
}

function jsonSerializeRemoveRef(obj:any,refKey:string):string {
    return JSON.stringify(obj,(key, value) => {
        if (key === refKey) {
          return undefined;
        }
        return value;
      });
}

/**
 * 反序列化 string->PageConfig，递归生成LayoutConfig 的 Parent引用
 * @param v 字符串
 */
export function DeserializePageConfig(v:string):PageConfig{
    const obj = <PageConfig>JSON.parse(v);
    _recursiveGenerateParentRef(obj.layout);
    return obj;
}

  /**
   * 递归生成parent引用
   */
 const _recursiveGenerateParentRef = (obj: Layout) => {
    const parent = obj;
    obj.layout.forEach((v, i) => {
      if (!v) return null;
      v.parent = parent;
      _recursiveGenerateParentRef(v);
    })
  }