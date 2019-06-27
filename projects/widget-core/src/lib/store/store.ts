import { InjectionToken, Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WidgetLoaderManifest } from '../common/widget.interface';
import { DeserializePageConfig } from '../common/utils';

export interface StoreInterface {
    whoAmI(): string;
}

const Page_Layout_Config = "Page_Layout_Config";
const Custom_Layout_Template = "Custom_Layout_Template";
const Widget_Manifest_Url = "/assets/widgets/widget.manifest.json";

@Injectable()
export class Store implements StoreInterface {

    constructor(private http: HttpClient) {

    }

    whoAmI(): string {
        return "this is default web browser store.";
    }

    /**
     * 加载自定义布局
     */
    getAllCustomLayoutTemplate(): Observable<string[]> {
        const result:string[]=[];
        for (let i = 0; i < window.localStorage.length; i++) {
            const key = window.localStorage.key(i);
            if (key.startsWith(Custom_Layout_Template)) {
                result.push(window.localStorage.getItem(key));
            }
        }
        return of(result);
    }
    /**
     * 新增布局
     * @param tpl `string` 新增布局
     */
    addCustomLayoutTemplate(tpl: string): Observable<string> {
        window.localStorage.setItem(Custom_Layout_Template, tpl);

        let index = 0;
        for (let i = 0; i < window.localStorage.length; i++) {
            const key = window.localStorage.key(i);
            if (key.startsWith(Custom_Layout_Template)) {
               const maxIndex = /@(\d+)$/.exec(key)[1];
               if(maxIndex && +maxIndex > index){
                index = +maxIndex;
               }
            }
        }
        const key = Custom_Layout_Template+"@"+ (index+1);
        window.localStorage.setItem(key,tpl);
        return of(key);
    }
    /**
     * 删除自定义布局模板
     * @param id id
     */
    removeCustomLayoutTemplate(id:string):Observable<string>{
        const v = window.localStorage.getItem(id);
        if(v){
            window.localStorage.removeItem(v);
        }
        return of(v);
    }
    /**
     * 加载小部件注册信息
     */
    loadWidgetLoaderManifest(): Observable<WidgetLoaderManifest[]> {
        return this.http.get<WidgetLoaderManifest[]>(Widget_Manifest_Url);
    }

    /**
     * 加载页面配置信息
     * @param id pageId
     */
    loadPageById(id: string): Observable<string> {
        const pageConfigString = localStorage.getItem(Page_Layout_Config + "|" + id);
        if (pageConfigString) {
            return of(pageConfigString); //this.http.get<Page>("");
        } else {
            return of(null);
        }
    }

    savePage(id: string, pageConfigString: string): Observable<string> {
        localStorage.setItem(Page_Layout_Config + "|" + id, pageConfigString);
        return of(id);
    }

} 
