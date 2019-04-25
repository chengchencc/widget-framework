import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WidgetSettableDirective } from './widget-settable.directive';
import { LayoutConfig } from '../common/layout.interface';

/**
 * 部件配置服务
 */
@Injectable()
export class SettingService {
    //选中设置元素
    onSelectSettableItem$: Observable<WidgetSettableDirective>
    private onSelectSettableItemSubject = new Subject<WidgetSettableDirective>();
    selectedSettableItem: WidgetSettableDirective;

    public onChangeConfig$: Observable<LayoutConfig>
    private onChangeConfigSubject$ = new Subject<LayoutConfig>()

    constructor() {
        this.onSelectSettableItem$ = this.onSelectSettableItemSubject.asObservable();
        this.onChangeConfig$ = this.onChangeConfigSubject$.asObservable();
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

    changeConfig (config) {
        this.onChangeConfigSubject$.next(config)
    }

}