// export type ErrorType="error"|"warning"|"info";

export enum ErrorType{
    debug=0,
    info=1,
    warning=2,
    error=9
}

/**
 * 自定义异常类型
 */
export class WidgetError{
    constructor(public msg:any,public type:ErrorType = ErrorType.error,public code?:string,public level?:number) {
    }
}