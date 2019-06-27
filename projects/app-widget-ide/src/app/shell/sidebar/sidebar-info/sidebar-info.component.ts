import { Component, OnInit } from '@angular/core';
import { DesignerService } from '../../../services/designer.service';
import { PageInfo } from 'projects/widget-core/src/public-api';

@Component({
  selector: 'design-sidebar-info',
  templateUrl: './sidebar-info.component.html',
  styleUrls: ['./sidebar-info.component.scss']
})
export class SidebarInfoComponent implements OnInit {

  info:PageInfo;

  constructor(public designService:DesignerService) { }

  ngOnInit() {
    const {pageService} = this.designService;
    pageService.pageInitialed.subscribe(()=>{
        this.info = pageService.info;        
    });

  }

}
