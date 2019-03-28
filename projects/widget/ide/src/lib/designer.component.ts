import { Component, OnInit, HostBinding } from '@angular/core';
import { DesignerService } from './services/designer.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss']
})
export class DesignerComponent implements OnInit {

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
