import { Component, OnInit, DoCheck } from '@angular/core';
import { LayoutService } from '@widget/core';
import { LayoutComponent } from '@widget/core';
import { WidgetSettableDirective } from '@widget/core';

//TODO: 放这？
/** 默认单位为 px 的属性列表 */
// const unitPxProps = ['width', 'height', 'margin']

interface styleProp {
  name: string,
  type: StylePropType,
  helperContent?: string,
  EnumValues?: string[],
  maxMin?: number[],
  step?: number,
}
enum StylePropType {
  LongEnum, ShortEnum,
  Number, ScopedNumberWithoutUnit,
  Color,
}

@Component({
  selector: 'design-aside-style',
  templateUrl: './aside-style.component.html',
  styleUrls: ['./aside-style.component.scss']
})
export class AsideStyleComponent implements OnInit, DoCheck {

  classes: string[] = [
    'body',
    'container',
    'container-fluid',
    'row',
    'col',
    'col-1',
    'col-2',
    'col-3',
    'col-4',
    'col-5',
    'col-6',
    'col-7',
    'col-8',
    'col-9',
    'col-10',
    'col-11',
    'col-12',
    'scroll-thin'
  ];

  displaySelector: string[] = [
    'flex'
  ];

  flexSelectors = {
    position: [
      'relative',
      'absolute',
      'fixed',
      'static',
      'sticky',
      'inherit',
      'unset'
    ],
    display: [
      'block',
      'flex'
    ],
    direction: [
      'row',
      'row-reverse',
      'column',
      'column-reverse'
    ],
    wrap: [
      'nowrap',
      'wrap',
      'wrap-reverse'
    ],
    justifyContent: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around'
    ],
    alignItems: [
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch'
    ],
    alignContent: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'stretch'
    ],
    alignSelf: [
      'auto',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch'
    ],

  }

  StylePropType = StylePropType

  styleProps: styleProp[] = [
    {
      name: 'display',
      type: StylePropType.ShortEnum,
      EnumValues: ['block', 'flex']
    },
    {
      name: 'position',
      type: StylePropType.LongEnum,
      EnumValues: ['static', 'relative', 'absolute', 'fixed', 'sticky', 'inherit', 'unset']
    },
    {
      name: 'overflow',
      type: StylePropType.LongEnum,
      EnumValues: ['visible', 'auto', 'hidden', 'scroll', 'scroll-x', 'scroll-y']
    },
    /** flex TODO: 条件显示 */
    {
      name: 'flexDirection',
      type: StylePropType.LongEnum,
      EnumValues: [
        'row',
        'row-reverse',
        'column',
        'column-reverse']
    },
    {
      name: 'flexWrap',
      type: StylePropType.LongEnum,
      EnumValues: [
        'nowrap',
        'wrap',
        'wrap-reverse']
    },
    {
      name: 'justifyContent',
      type: StylePropType.LongEnum,
      EnumValues: [
        'normal',
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around']
    },
    {
      name: 'alignItems',
      type: StylePropType.LongEnum,
      EnumValues: [
        'normal',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'stretch']
    },
    {
      name: 'alignContent',
      type: StylePropType.LongEnum,
      EnumValues: [
        'normal',
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'stretch']
    },
    {
      name: 'alignSelf',
      type: StylePropType.LongEnum,
      EnumValues: [
        'auto',
        'flex-start',
        'flex-end',
        'center',
        'baseline',
        'stretch']
    },
    {
      name: 'justifyContent',
      type: StylePropType.LongEnum,
      EnumValues: [
        'normal',
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around']
    },
  ]

  config: any;

  path: string[];

  //KeyValueDiffers
  // styles:{[key: string]: any}={
  //   'display':'flex',
  //   'flex-direction':'',
  //   'flex-wrap':'',
  //   'flex-flow':'',
  //   'justify-content':'',
  //   'align-items':'',
  //   'align-content':'',
  //   'order':'',
  //   'flex':'',
  //   'align-self':'',
  //   'font-size':'16px',
  //   'background':''
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

  handleChangeValue(e, propName: string) {
    //TODO: 验证、自动增加单位，或改为单位选框
    // if(unitPxProps.includes(propName)) {
    // }
    this.itemConfig.style[propName] = e
  }
  getValue(propName: string) {
    let v: string = this.itemConfig.style[propName]

    if (!v) {
      switch (propName) {
        case 'width':
        case 'height':
          v = 'auto'
          break
        default:
          v = this.computedStyles[propName]
      }
    }
    return v
  }

}
