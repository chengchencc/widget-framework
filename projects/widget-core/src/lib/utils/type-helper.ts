export const TypeHelper={
   isString: (obj):boolean=> typeof obj === 'string' || obj instanceof String,
   isBoolean: (obj):boolean=> typeof obj === 'boolean' || obj instanceof Boolean ,
   isFunction:(obj):boolean=> typeof obj === 'function' || obj instanceof Function,
   isNumber:(obj):boolean=> typeof obj === 'number' || obj instanceof Number
} 