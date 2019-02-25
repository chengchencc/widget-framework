import { Component, OnInit, DoCheck } from '@angular/core';
import { LayoutService } from 'src/app/core/common/layout.service';
import { LayoutComponent } from 'src/app/core/layout/layout.component';

@Component({
  selector: 'design-aside-style',
  templateUrl: './aside-style.component.html',
  styleUrls: ['./aside-style.component.scss']
})
export class AsideStyleComponent implements OnInit,DoCheck  {


  classes:string[]=[
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

  displaySelector:string[] = [
    "flex"
  ];

  flexSelectors={
    display:[
      "block",
      "flex"
    ],
    direction:[
      "row",
      "row-reverse",
      "column",
      "column-reverse"
    ],
    wrap:[
      "nowrap", 
      "wrap", 
      "wrap-reverse"
    ],
    justifyContent:[
      "flex-start", 
      "flex-end", 
      "center", 
      "space-between", 
      "space-around"
    ],
    alignItems:[
      "flex-start", 
      "flex-end", 
      "center", 
      "baseline", 
      "stretch"
    ],
    alignContent:[
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "stretch"
    ],
    alignSelf:[
      "auto",
      "flex-start",
      "flex-end",
      "center",
      "baseline",
      "stretch"
    ]
  }

  config:any={
  };

  path:string[];

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
  styles:{[key: string]: any}={};

  // layoutConfig:layoutConfig;

  constructor(private layoutService:LayoutService) {
    
    this.layoutService.onLayoutActived$.subscribe(s=>this.selectedLayout(s));
   }

  ngOnInit() {
    // this.getStyle();
  }

  ngDoCheck(): void {
    // this.getStyle();
  }

  selectedLayout(component:LayoutComponent){
    if (component) {
      //config

      this.config = component.config;
      //styles
      component.config.style = component.config.style || {};
      this.styles = component.config.style;
      let computedStyles:CSSStyleDeclaration = getComputedStyle(component.elementRef.nativeElement);

      this.styles.display = computedStyles.display;
      this.styles["flex-direction"] = computedStyles.flexDirection;


      //path
     this.path = component.getPath();

    //   console.log(component.config);
    //   console.log(component);
    //  console.log(getComputedStyle(component.elementRef.nativeElement));


    }
  }


}