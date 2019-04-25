import { Component, OnInit, Host, HostBinding } from '@angular/core';
import { DesignerService } from '../../services/designer.service';

@Component({
  selector: 'design-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // @HostBinding("class.d-none")
  // isPreview:boolean =false;

  constructor(private designerService: DesignerService) { }

  ngOnInit() {
    // this.isPreview = this.designerService.isPreview;
    // this.designerService.onTogglePreviewState$.subscribe(s=>{
    //   this.isPreview = s;
    // })
  }

}
