import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Store } from 'projects/widget-core/src/lib/store/store';
import { PageService } from 'projects/widget-core/src/public-api';

@Injectable()
export class DesignerService {

  isPreview: boolean = false;

  //布局选中事件
  private togglePreviewSubject = new Subject<boolean>();
  onTogglePreviewState$: Observable<boolean> = this.togglePreviewSubject.asObservable();


  constructor(private store: Store, public pageService: PageService,private toastr: ToastrService) {
    console.log(this.store.whoAmI());
  }

  togglePreview() {
    this.isPreview = !this.isPreview;
    this.togglePreviewSubject.next(this.isPreview);
  }

  save(){
    this.pageService.save().subscribe((pageId)=>{
      this.toastr.success("success！");
    })
  }
  public currentPage(){
    return this.pageService.currentPage;
  }

}
