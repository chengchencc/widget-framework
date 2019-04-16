import { Directive, HostListener, HostBinding, Optional, SkipSelf, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { LayoutService } from '../layout/layout.service';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { LayoutConfig } from '../layout/layout.interface';

@Directive({
    selector: '[appSettable]',
})
export class WidgetSettableDirective {
    @Input()
    config: LayoutConfig;

    @Output()
    onSelected = new EventEmitter<boolean>();

    _classes: string[] = [];
    selected: boolean = false;

    constructor(
        @SkipSelf() @Optional() public parent: WidgetSettableDirective,
        private layoutService: LayoutService,
        public elementRef: ElementRef,
        private sanitizer: DomSanitizer
        // @Optional() public widget: WidgetContainerComponent
    ) { }

    @HostListener("click", ['$event'])
    select(event: MouseEvent) {
        event.stopPropagation();
        event.preventDefault();
        console.log(event);
        //unselected
        if (this.layoutService.selectedSettableItem)
            this.layoutService.selectedSettableItem.unselect();
        //selected current
        this.selected = true;
        this.layoutService.selectSettable(this);
        this.onSelected.emit(this.selected);
    }
    unselect() {
        if (this.selected) this.selected = false;
        this.onSelected.emit(this.selected);
    }

    @HostBinding("class")
    public get classes(): string {
        if (this.config && this.config.classes) {
            this._classes = [...this.config.classes];
        }

        this.addOrRemove(this.config.layout && this.config.layout.length == 0, "is-empty")

        this.addOrRemove(this.selected, "selected");

        let result = this._classes.join(" ");
        return result;
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

    @HostBinding('style')
    get myStyle(): SafeStyle {
        // console.count('get myStyle') //TODO: 鼠标移动的每帧都调用？
        let styleString = this.getStyle();
        return this.sanitizer.bypassSecurityTrustStyle(styleString);
    }

    getStyle(): string {
        var styleString = "";
        for (const key in this.config.style) {
            if (this.config.style.hasOwnProperty(key)) {
                const value = this.config.style[key];
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