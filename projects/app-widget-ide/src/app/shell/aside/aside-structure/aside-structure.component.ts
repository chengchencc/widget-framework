import { Component, OnInit, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import { DesignerService } from '../../../services/designer.service';
import { Layout } from 'projects/widget-core/src/lib/common/layout';

@Component({
  selector: 'design-aside-structure',
  templateUrl: './aside-structure.component.html',
  styleUrls: ['./aside-structure.component.scss']
})
export class AsideStructureComponent implements OnInit {

  layoutConfig: Layout;

  constructor(private _designService:DesignerService) {  }

  ngOnInit() {
    //由于previewComponent 与 当前组件非父子组件，没有加载先后顺序，因此，第一次订阅，previewComponent不一定加载，使用settimeout来延迟绑定
    setTimeout(() => {
      this._designService.currentPage().layoutChanged.subscribe(layout=>{
        this.layoutConfig = layout;
      });      
    }, 0);
  }

}

