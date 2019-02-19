import { InjectionToken, Injectable } from '@angular/core';

export interface StoryInterface {
    whoAmI(): string;
}

const Page_Layout_Config = "Page_Layout_Config";
const Custom_Layout_Template = "Custom_Layout_Template";


@Injectable({
    providedIn: "root"
})
export class Story implements StoryInterface {
    whoAmI(): string {
        return "story abstract";
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


} 
