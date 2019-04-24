import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WidgetSettableDirective } from './widget-settable.directive';

/**
 * 部件配置服务
 */
@Injectable()
export class SettingService {
    //选中设置元素
    onSelectSettableItem$: Observable<WidgetSettableDirective>
    private onSelectSettableItemSubject = new Subject<WidgetSettableDirective>();
    selectedSettableItem: WidgetSettableDirective;

    constructor() {
        this.onSelectSettableItem$ = this.onSelectSettableItemSubject.asObservable();
    }

    /**
     * 选中可设置项
     * @param item settable item
     */
    activeSettable(item: WidgetSettableDirective) {
        this.selectedSettableItem && this.selectedSettableItem.unselect();
        this.selectedSettableItem = item;
        this.selectedSettableItem.selected = true;
        this.onSelectSettableItemSubject.next(item);
    }

}