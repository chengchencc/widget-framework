import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { LayoutConfig } from '@widget/core';
import { LayoutService } from '@widget/core';

@Component({
  selector: 'design-aside-structure',
  templateUrl: './aside-structure.component.html',
  styleUrls: ['./aside-structure.component.scss']
})
export class AsideStructureComponent implements OnInit {

  layoutConfig:LayoutConfig;

  constructor(private layoutService:LayoutService) {
    this.layoutConfig = layoutService.layoutConfig;
   }

  ngOnInit() {
  }
}

const typeIconMap = {
  body: `web_asset`,
  div: `check_box_outline_blank`,
  widget: `widgets`,
  // grid: `grid_on`,
  grid: `apps`,
  group: `view_week`,
}
@Component({
  selector: 'design-aside-structure-tree',
  template: `
  <a class="node"
    [class.collapsed]="collapsed" >
    <i *ngIf="!config.layout.length"
      class="material-icons arrow-placeholder"></i>
    <i *ngIf="config.layout.length"
      class="material-icons arrow"
      (click)="handleToggleCollapse()" >{{collapsed ? 'chevron_right': 'expand_more'}}</i>
    <i class="material-icons type">{{icon(config)}}</i>
      {{config.type}}({{config.id}})
  </a>
  <ul class="children-ul">
    <li *ngFor="let item of config.layout">
      <design-aside-structure-tree [config]="item"></design-aside-structure-tree>
    </li>
  </ul>
  `,
  styles: [`
  
  `]
})
export class AsideStructureTreeComponent implements OnInit {

  @Input() config: LayoutConfig;

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

}
