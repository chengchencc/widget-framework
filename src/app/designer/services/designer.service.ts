import { Injectable, Inject } from '@angular/core';
import { Store, StoreInterface } from '../../core/common/store/store';
import { PageService } from '../../core/common/page.service';
import { Observable, Subject } from 'rxjs';
import { LayoutComponent } from 'src/app/core/layout/layout.component';

@Injectable({providedIn:'root'})
export class DesignerService {

  isPreview: boolean = false;

  //布局选中事件
  private togglePreviewSubject = new Subject<boolean>();
  onTogglePreviewState$: Observable<boolean> = this.togglePreviewSubject.asObservable();


  constructor(private store: Store, private pageService: PageService) {
    console.log(this.store.whoAmI());
  }

  togglePreview() {
    this.isPreview = !this.isPreview;
    this.togglePreviewSubject.next(this.isPreview);
  }

}
