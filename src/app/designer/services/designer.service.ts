import { Injectable, Inject } from '@angular/core';
import { Store, StoreInterface } from '../../core/common/store/store';
import { PageService } from '../../core/common/page.service';
import { Observable, Subject } from 'rxjs';
import { LayoutComponent } from 'src/app/core/layout/layout.component';
import { LayoutService } from '../../core/common/layout.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({providedIn:'root'})
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
