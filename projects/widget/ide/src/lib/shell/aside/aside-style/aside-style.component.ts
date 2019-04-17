import { Component, OnInit, DoCheck } from '@angular/core';
import { LayoutService } from '@widget/core';
import { LayoutComponent } from '@widget/core';
import { WidgetSettableDirective } from '@widget/core';

//TODO: 放这？
/** 默认单位为 px 的属性列表 */
// const unitPxProps = ['width', 'height', 'margin']

@Component({
  selector: 'design-aside-style',
  templateUrl: './aside-style.component.html',
  styleUrls: ['./aside-style.component.scss']
})
export class AsideStyleComponent implements OnInit, DoCheck {


  classes: string[] = [
    "body",
    "container",
    "container-fluid",
    "row",
    "col",
    "col-1",
    "col-2",
    "col-3",
    "col-4",
    "col-5",
    "col-6",
    "col-7",
    "col-8",
    "col-9",
    "col-10",
    "col-11",
    "col-12",
    "scroll-thin"
  ];

  displaySelector: string[] = [
    "flex"
  ];

  flexSelectors = {
    position: [
      "relative",
      "absolute",
      "fixed",
      "static",
      "sticky",
      "inherit",
      "unset"
    ],
    display: [
      "block",
      "flex"
    ],
    direction: [
      "row",
      "row-reverse",
      "column",
      "column-reverse"
    ],
    wrap: [
      "nowrap",
      "wrap",
      "wrap-reverse"
    ],
    justifyContent: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around"
    ],
    alignItems: [
      "flex-start",
      "flex-end",
      "center",
      "baseline",
      "stretch"
    ],
    alignContent: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "stretch"
    ],
    alignSelf: [
      "auto",
      "flex-start",
      "flex-end",
      "center",
      "baseline",
      "stretch"
    ],

  }

  config: any;

  path: string[];

  //KeyValueDiffers
  // styles:{[key: string]: any}={
  //   "display":"flex",
  //   "flex-direction":"",
  //   "flex-wrap":"",
  //   "flex-flow":"",
  //   "justify-content":"",
  //   "align-items":"",
  //   "align-content":"",
  //   "order":"",
  //   "flex":"",
  //   "align-self":"",
  //   "font-size":"16px",
  //   "background":""
  // }
  // styles: { [key: string]: any } = {};
  
  itemConfig: { [key: string]: any } = null
  computedStyles: CSSStyleDeclaration = null

  // layoutConfig:layoutConfig;

  constructor(private layoutService: LayoutService) {
    this.layoutService.onSelectSettableItem$.subscribe(s => this.selectSettableItem(s));
  }

  ngOnInit() {
    // this.getStyle();
  }

  ngDoCheck(): void {
    // this.getStyle();
  }

  selectSettableItem(item: WidgetSettableDirective) {
    if (item) {
      item.config.style = item.config.style || {}
      this.itemConfig = item.config
      this.computedStyles = getComputedStyle(item.elementRef.nativeElement);
      this.path = item.getPath();
    }
  }

  handleChangeValue (e, propName: string) {
    //TODO: 验证、自动增加单位，或改为单位选框
    // if(unitPxProps.includes(propName)) {
    // }
    this.itemConfig.style[propName] = e
  }
  getValue (propName: string) {
    let v: string = this.itemConfig.style[propName]

    if(!v) {
      switch(propName) {
        case 'width':
        case 'height':
          return 'auto'
          break
        default:
          v = this.computedStyles[propName]
      }
    }
    return v
  }

}
