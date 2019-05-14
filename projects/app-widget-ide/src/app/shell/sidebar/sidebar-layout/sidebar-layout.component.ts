import { Component, OnInit } from '@angular/core';
import { LayoutTemplate } from 'projects/widget-core/src/lib/common/layout.interface';
import { LayoutTemplateService } from 'projects/widget-core/src/lib/common/layout-template.service';
// import { LayoutTemplate } from 'widget-core';
// import { LayoutService } from 'widget-core';

@Component({
  selector: 'design-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss']
})
export class SidebarLayoutComponent implements OnInit {

  //系统布局模板
  layoutTemplates:LayoutTemplate[];
  //自定义布局模板
  customLayoutTemplates:LayoutTemplate[];

  constructor(private layoutTemplateService:LayoutTemplateService) { }

  ngOnInit() {
    this.layoutTemplates = this.layoutTemplateService.layoutTemplates;
    this.customLayoutTemplates = this.layoutTemplateService.customLayoutTemplates;
  }

  remove(item:any){

  }
}
