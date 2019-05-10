import { Component, Input, OnInit } from '@angular/core';
import { SettingService } from 'projects/widget-core/src/lib/settable/setting.sevice';
import { Layout } from 'projects/widget-core/src/lib/common/layout';

const typeIconMap = {
    body: `web_asset`,
    div: `check_box_outline_blank`,
    widget: `widgets`,
    grid: `apps`,
    group: `view_week`,
  }
  @Component({
    selector: 'design-aside-structure-tree',
    templateUrl:'./aside-structure-tree.component.html',
    styles: [` `]
  })
  export class AsideStructureTreeComponent implements OnInit {
  
    @Input() config: Layout;
  
    public collapsed = false;
  
    constructor(public settingService: SettingService) { }
  
    ngOnInit() {
    }
  
    icon(config) {
      return typeIconMap[config.type]
    }
    /** 当点击收起/展开 */
    handleToggleCollapse() {
      this.collapsed = !this.collapsed;
    }
    handleClickNode() {
      this.settingService.selectSettable(this.config.id);
    }
    handleHoverNode() {
      this.settingService.enterSettable(this.config.id);
    }
    handleLeaveNode() {
      this.settingService.leaveSettable();
    }
    active() {
      let { selectedSettable } = this.settingService;
      return selectedSettable && selectedSettable.config.id == this.config.id;
    }
    hovering() {
      let { hoveringSettable } = this.settingService;
      return hoveringSettable && hoveringSettable.config.id == this.config.id;
    }
  
  }
  