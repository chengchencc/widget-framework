import { Directive, HostListener, HostBinding, Optional, SkipSelf, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { LayoutConfig } from '../common/layout.interface';
import { SettingService } from './setting.sevice';

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
    // get class () {}
    @HostBinding('style') style: SafeStyle
    @HostBinding('class.selected')
    get selected () {
        console.log("settableDirective::get selected::",this);
        return this == this.settingService.selectedSettable;
    }
    @HostBinding('class.hovering')
    get hovering () {
        console.log("settableDirective::get hovering::",this);
        return this == this.settingService.hoveringSettable;
    }

    _classes: string[] = [];
    // selected: boolean = false;

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
        this.updateClassNStyle(this.config)

        // 把自己注册到 map 里
        this.settingService.configSettableMap[this.config.id] = this
    }

    @HostListener("click", ['$event'])
    handleClick(event: MouseEvent) {
        event.stopPropagation();
        event.preventDefault();

        this.settingService.selectSettable(this);
    }
    //TODO:mouse事件会导致angular频繁变化检查，暂时先去掉
    // @HostListener('mouseenter')
    handleEnter () {
        this.settingService.enterSettable(this)
    }
    //TODO:mouse事件会导致angular频繁变化检查，暂时先去掉
    // @HostListener('mouseleave')
    handleLeave () {
        this.settingService.leaveSettable()
    }

    onSelect() {
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
        event.stopPropagation()
        if (this.parent) {
            this.settingService.selectSettable(this.parent)
        }
        console.log("settabledirective::", event);
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
        this.updateClassNStyle(this.config)
    }
    /** 根据 config 更新 class, style */
    updateClassNStyle (config: LayoutConfig) {
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