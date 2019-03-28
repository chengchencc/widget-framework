import { Injectable, Inject } from '@angular/core';
import { Store } from '@widget/core';
import { PageService } from '@widget/core';
import { Observable, Subject } from 'rxjs';
import { LayoutComponent } from '@widget/core';
import { LayoutService } from '@widget/core';
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
