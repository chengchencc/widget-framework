import { Component, OnInit, Input, HostListener, SkipSelf, Optional, HostBinding, ElementRef } from '@angular/core';
import { LayoutConfig, LayoutTemplate } from '../common/page.interface';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { LayoutService } from '../common/layout.service';
import { WidgetDragEvent } from '../dnd/draggable-model';

@Component({
  selector: 'widget-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input()
  config: LayoutConfig;
  templates: LayoutTemplate[];

  _classes: string[] = [];

  @HostBinding("class")
  public get classes(): string {

    if (this.config && this.config.classes) {
      this._classes = [...this.config.classes] ;
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

  selected: boolean = false;

  @HostBinding('style')
  get myStyle(): SafeStyle {
    let styleString = this.getStyle();
    return this.sanitizer.bypassSecurityTrustStyle(styleString);
  }

  private _parent: LayoutComponent;

  // bsModalRef: BsModalRef;
  

  constructor(
    @SkipSelf() @Optional() parentLayout: LayoutComponent,
    private layoutService: LayoutService,
    public elementRef: ElementRef,
    private sanitizer: DomSanitizer,
    // private modalService: BsModalService
  ) {
    this._parent = parentLayout;
    this.templates = layoutService.layoutTemplates;
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
  }

  move(event: WidgetDragEvent, ref: LayoutConfig) {
    this.layoutService.move(event, ref);
  }

  @HostListener("click", ['$event'])
  select(event: MouseEvent) {
    event.stopPropagation();
    event.preventDefault();
    // console.log(this.config);
    // console.log(this.elementRef);
    //unselected
    if (this.layoutService.activedLayout)
      this.layoutService.activedLayout.unselect();
    //selected current
    this.selected = true;
    this.layoutService.activeLayout(this);

  }

  unselect() {
    if (this.selected) this.selected = false;
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
    let path: string[] = [];
    path.push(this.config.id);
    let index = this._parent;
    while (index) {
      path.push(index.config.id);
      index = index._parent;
    }
    return path.reverse();
  }

/**
 * 移除自己
 */
  removeSelf(){
    //第一种移除方式，通过lodash
    this.layoutService.remove(this.config);
    //第二种移除方式，通过parent，remove掉即可
    // var index = this._parent.config.layout.indexOf(this.config);
    // this._parent.config.layout.splice(index,1);
  }

  saveAsTemplate() {

    this.openModalWithComponent((tplName)=>{
      this.layoutService.addLayoutTemplate({
        name: tplName,
        id: "",
        layoutConfig: this.config
      });
    });


  }
  //选择上级
  selectParent(event:MouseEvent){
    if(this._parent){
      this._parent.select(event);
    }
  }

  openModalWithComponent(callback:any) {
    const initialState = {
      title: '请输入模板名称',
      onOk:callback
    };
    // this.bsModalRef = this.modalService.show(CreateTemplateModalComponent, {initialState});
    // this.bsModalRef.content.closeBtnName = 'Close';
  }
}
