import { Component, OnInit } from '@angular/core';
import { LayoutTemplate } from '@widget/core';
import { LayoutService } from '@widget/core';

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

  constructor(private layoutService:LayoutService) { }

  ngOnInit() {
    this.layoutTemplates = this.layoutService.layoutTemplates;
    this.customLayoutTemplates = this.layoutService.customLayoutTemplates;
  }

  remove(item:any){

  }
}
