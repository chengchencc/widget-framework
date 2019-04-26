import { Directive, HostListener, HostBinding, Optional, SkipSelf, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
// import { LayoutService } from '../common/layout.service';
import { LayoutConfig } from '../common/layout.interface';
import { SettingService } from './setting.sevice';
import { LayoutService } from '../common/layout.service';

@Directive({
    selector: '[appSettable]',
    exportAs: 'appSettable'
})
export class WidgetSettableDirective {
    @Input()
    config: LayoutConfig;
    @Output()
    onSelected = new EventEmitter<boolean>();

    @HostBinding("class") class: string
    @HostBinding('style') style: SafeStyle

    _classes: string[] = [];
    selected: boolean = false;

    constructor(
        @SkipSelf() @Optional() public parent: WidgetSettableDirective,
        public elementRef: ElementRef,
        private sanitizer: DomSanitizer,
        private settingService: SettingService
        // @Optional() public widget: WidgetContainerComponent
    ) {
        this.settingService.onChangeConfig$.subscribe(c => this.handleChangeConfig(c))
    }

    ngOnInit() {
        this.updateConfig(this.config)
    }

    @HostListener("click", ['$event'])
    select(event: MouseEvent) {
        event.stopPropagation();
        event.preventDefault();

        console.log(this.elementRef);

        this.settingService.activeSettable(this);

        this.onSelected.emit(this.selected);
    }
    unselect() {
        if (this.selected) this.selected = false;
        this.onSelected.emit(this.selected);
    }

    /**
     * 移除自己
     */
    removeSelf() {
        //第一种移除方式，通过lodash
        this.settingService.layoutService.remove(this.config);
        //第二种移除方式，通过parent，remove掉即可
        // var index = this._parent.config.layout.indexOf(this.config);
        // this._parent.config.layout.splice(index,1);
    }

    saveAsTemplate() {
        this.openModalWithComponent((tplName) => {
            this.settingService.layoutService.addLayoutTemplate({
                name: tplName,
                id: "",
                layoutConfig: this.config
            });
        });
    }
    //选择上级
    selectParent(event: MouseEvent) {
        console.log("settabledirective::", event);
        if (this.parent) {
            this.parent.select(event);
        }
    }

    openModalWithComponent(callback: any) {
        const initialState = {
            title: '请输入模板名称',
            onOk: callback
        };
        // this.bsModalRef = this.modalService.show(CreateTemplateModalComponent, {initialState});
        // this.bsModalRef.content.closeBtnName = 'Close';
    }

    addOrRemove(express: boolean, className: string) {
        if (express) {
            if (!this._classes.includes(className)) {
                this._classes.push(className);
            }
        } else {
            if (this._classes.includes(className)) {
                this._classes.splice(this._classes.indexOf(className), 1);
            }
        }
    }
    /** 当 config 变化，更新 style */
    handleChangeConfig(c) {
        console.count('get myStyle') //TODO: 鼠标移动的每帧都调用？
        console.log(this.elementRef)
        this.updateConfig(this.config)
    }
    updateConfig(config: LayoutConfig) {
        // style
        let styleString = this.getStyle(config);
        this.style = this.sanitizer.bypassSecurityTrustStyle(styleString);

        // class
        if (config && config.classes) {
            this._classes = [...config.classes];
        }
        this.addOrRemove(config.layout && config.layout.length == 0, "is-empty")
        this.addOrRemove(this.selected, "selected");

        let result = this._classes.join(" ");
        this.class = result;
    }

    getStyle(config: LayoutConfig): string {
        var styleString = "";
        for (const key in config.style) {
            if (config.style.hasOwnProperty(key)) {
                const value = config.style[key];
                if (value) {
                    styleString += `${key}:${value};`;
                }
            }
        }
        return styleString;
    }

    getPath(): string[] {
        return this.config.id.split("-");
        // let path: string[] = [];
        // path.push(this.config.id);
        // let index = this._parent;
        // while (index) {
        //   path.push(index.config.id);
        //   index = index._parent;
        // }
        // return path.reverse();
    }
}