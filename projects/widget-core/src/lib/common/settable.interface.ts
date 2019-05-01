export interface ISettable{
    id:string,
    classes?:string[],
    style?:any,
    settings?:any,
    path?:string

}
export interface CssStyleConfig { [propName: string]: string }
