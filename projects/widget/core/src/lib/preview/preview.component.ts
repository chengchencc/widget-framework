import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout/layout.service';
import { LayoutConfig } from '../layout/layout.interface';

@Component({
  selector: 'widget-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  layoutConfig: LayoutConfig;

  constructor(public layoutService:LayoutService) { 
    this.layoutConfig = layoutService.layoutConfig;
  }

  ngOnInit() {
  }

}
