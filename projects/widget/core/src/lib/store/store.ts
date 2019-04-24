import { InjectionToken, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WidgetLoaderManifest } from '../loader/widget-loader';

export interface StoreInterface {
    whoAmI(): string;
}

const Page_Layout_Config = "Page_Layout_Config";
const Custom_Layout_Template = "Custom_Layout_Template";
const Widget_Manifest_Url = "/assets/widgets/widget.manifest.json";

@Injectable()
export class Store implements StoreInterface {

    constructor(private http:HttpClient) {
        
    }

    whoAmI(): string {
        return "this is default web browser store.";
    }

    /**
     * load page layout config
     * @param name page name
     */
    loadPageLayoutConfig(name: string):string {
        const s = window.localStorage.getItem(Page_Layout_Config + "-" + name);
        return s;
    }
    /**
     * save page layout config
     * @param name page name
     * @param layout layout config json string
     */
    savePageLayoutConfig(name: string, layout: string) {
        window.localStorage.setItem(Page_Layout_Config + "-" + name, layout);
    }

    loadCustomLayoutTemplate():string{
        return window.localStorage.getItem(Custom_Layout_Template);
    }

    saveCustomLayoutTemplate(tpl:string){
        window.localStorage.setItem(Custom_Layout_Template,tpl);
    }

    loadWidgetLoaderManifest():Observable<WidgetLoaderManifest[]>{
        return this.http.get<WidgetLoaderManifest[]>(Widget_Manifest_Url);
    }

} 
