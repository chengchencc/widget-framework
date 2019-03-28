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

@Component({
  selector: 'design-aside-structure-tree',
  template: `
  <a>{{config.type}}({{config.id}})</a>
  <ul>
    <li *ngFor="let item of config.layout">
      <design-aside-structure-tree [config]="item"></design-aside-structure-tree>
    </li>
  </ul>
  `,
  styles: [`
  
  `]
})
export class AsideStructureTreeComponent implements OnInit {

  @Input() config:LayoutConfig;

  constructor() { }

  ngOnInit() {
  }

}
