import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Store } from 'projects/widget-core/src/lib/store/store';
import { PageService } from 'projects/widget-core/src/lib/page/page.service';
import { LayoutService } from 'projects/widget-core/src/lib/common/layout.service';
// import { Store } from 'widget-core';
// import { PageService } from 'widget-core';
// import { LayoutComponent } from 'widget-core';
// import { LayoutService } from 'widget-core';

@Injectable()
export class DesignerService {

  isPreview: boolean = false;

  //布局选中事件
  private togglePreviewSubject = new Subject<boolean>();
  onTogglePreviewState$: Observable<boolean> = this.togglePreviewSubject.asObservable();


  constructor(private store: Store, private pageService: PageService,private layoutService:LayoutService,private toastr: ToastrService) {
    console.log(this.store.whoAmI());
  }

  togglePreview() {
    this.isPreview = !this.isPreview;
    this.togglePreviewSubject.next(this.isPreview);
  }

  save(){
    this.layoutService.save();
    this.toastr.success("success！");
  }

}
