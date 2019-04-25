import { Component, OnInit, HostBinding } from '@angular/core';
import { DesignerService } from '../services/designer.service';

@Component({
  selector: 'widget-ide',
  templateUrl: './widget-ide.component.html',
  styleUrls: ['./widget-ide.component.scss']
})
export class WidgetIdeComponent implements OnInit {

  // @HostBinding("class.d-none")
  isPreview:boolean =false;

  constructor(private designerService:DesignerService) {
    this.isPreview = this.designerService.isPreview;
    this.designerService.onTogglePreviewState$.subscribe(s=>{
      this.isPreview = s;
    })
   }

  ngOnInit() {

  }

}
