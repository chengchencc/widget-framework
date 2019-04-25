import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { LayoutConfig } from 'projects/widget-core/src/lib/common/layout.interface';
import { LayoutService } from 'projects/widget-core/src/lib/common/layout.service';
import { SettingService, WidgetSettableDirective } from 'projects/widget-core/src/public-api';

@Component({
  selector: 'design-aside-structure',
  templateUrl: './aside-structure.component.html',
  styleUrls: ['./aside-structure.component.scss']
})
export class AsideStructureComponent implements OnInit {

  layoutConfig: LayoutConfig;
  selectedItem: WidgetSettableDirective

  constructor(private layoutService:LayoutService,
    private settingService: SettingService) {
    this.layoutConfig = this.layoutService.layoutConfig;
    this.settingService.onSelectSettableItem$.subscribe(s => this.handleSelectSettableItem(s));
  }

  ngOnInit() {
  }

  handleSelectSettableItem (item: WidgetSettableDirective) {
    this.selectedItem = item
  }
}

const typeIconMap = {
  body: `web_asset`,
  div: `check_box_outline_blank`,
  widget: `widgets`,
  grid: `apps`,
  group: `view_week`,
}
@Component({
  selector: 'design-aside-structure-tree',
  template: `
  <a class="node"
    [class.active]="active()"
    [class.collapsed]="collapsed" >
    <i *ngIf="!config.layout.length"
      class="material-icons arrow-placeholder"></i>
    <i *ngIf="config.layout.length"
      class="material-icons arrow"
      (click)="handleToggleCollapse()" >{{collapsed ? 'chevron_right': 'expand_more'}}</i>
    <i class="material-icons type">{{icon(config)}}</i>
      {{config.type}}
      <span class="id">({{config.id}})</span>
  </a>
  <ul class="children-ul">
    <li *ngFor="let item of config.layout">
      <design-aside-structure-tree
        [config]="item"
        [selectedItem]="selectedItem" ></design-aside-structure-tree>
    </li>
  </ul>
  `,
  styles: [`
  
  `]
})
export class AsideStructureTreeComponent implements OnInit {

  @Input() config: LayoutConfig
  @Input() selectedItem: WidgetSettableDirective

  collapsed = false

  constructor() { }

  ngOnInit() {
  }

  icon (config) {
    return typeIconMap[config.type]
  }
  /** 当点击收起/展开 */
  handleToggleCollapse () {
    this.collapsed = !this.collapsed
  }
  active () {
    return this.selectedItem && this.selectedItem.config.id==this.config.id
  }

}
