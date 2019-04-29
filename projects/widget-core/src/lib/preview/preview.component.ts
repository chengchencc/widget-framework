import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from '../common/layout.service';
import { LayoutConfig } from '../common/layout.interface';
import { Page } from '../page/page.interface';
import { PageService } from '../page/page.service';
import { DefaultLayout } from '../common/layout-default';

/**
 * widget core 页面显示组件。
 * 组件依赖 page配置信息，进行渲染显示，page配置信息支持以下两种方式传入：
 * 1.直接通过 @Input() page 传入
 * 2.传入pageId，或者page路径，通过store根据此值去异步获取。此方式需要注入新的store，依赖此store去获取数据
 */
@Component({
  selector: 'widget-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  providers: [
    // PageService,
    // LayoutService
  ]
})
export class PreviewComponent implements OnInit {

  // private layoutConfig: LayoutConfig;
  private page: Page;

  @Input()
  public set pageInfo(v: Page) {
    this.page = v;
    this.layoutService.setLayout(this.page.layout);
  }

  @Input()
  public set pageId(v: string) {
    //通过异步更新的方式，防止angular二次变化监测报错问题 。参考：https://juejin.im/entry/59f0cc8a6fb9a0452935f979
    setTimeout(() => {
      this.pageService.loadPage(v).subscribe((page) => {
        if(page){
          this.pageInfo = page;
        }else{
          this.pageInfo = this.initialNewPageInfo(); 
        }
      })
    }, 0);


  }

  public get layoutConfig(): LayoutConfig {
    return this.page? this.page.layout : DefaultLayout;
  }

  public set layoutConfig(v: LayoutConfig) {
    this.page.layout = v;
  }

  constructor(public pageService: PageService, public layoutService: LayoutService) {
  }

  ngOnInit() {
  }

  /**
   * 初始化新增页面时的默认页面配置信息
   */
  initialNewPageInfo():Page{
      const newPage = {
          info: {
            name: "",
            desc: ""
          },
          layout: DefaultLayout
        };
    return newPage; 
  }

}
