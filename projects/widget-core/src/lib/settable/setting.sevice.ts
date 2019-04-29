import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WidgetSettableDirective } from './widget-settable.directive';
import { LayoutConfig } from '../common/layout.interface';
import { LayoutService } from '../common/layout.service';

/**
 * 部件配置服务
 */
@Injectable()
export class SettingService {
    /** config -> settable 映射关系 */
    public configSettableMap: { [configId: string]: WidgetSettableDirective } = {}
    /** 当前选中项 */
    public selectedSettable: WidgetSettableDirective
    /** 当前鼠标进入项 */
    public hoveringSettable: WidgetSettableDirective

    //TODO: remove
    public onChangeConfig$: Observable<LayoutConfig>
    private onChangeConfigSubject$ = new Subject<LayoutConfig>()

    constructor(public layoutService:LayoutService) {
        // this.onSelectSettableItem$ = this.onSelectSettableItemSubject.asObservable();
        this.onChangeConfig$ = this.onChangeConfigSubject$.asObservable();
    }

    /**
     * 选中可设置项
     * @param item settable item
     */
    // activeSettable(item: WidgetSettableDirective) {
    //     this.selectedSettableItem && this.selectedSettableItem.unselect();
    //     this.selectedSettableItem = item;
    //     this.selectedSettableItem.selected = true;
    //     this.onSelectSettableItemSubject.next(item);
    //     this.onChangeConfigSubject$.next()
    // }
    /**
     * 选中一个 settable item
     * 有重载，所以传入这个 item 的 config id 或 settable 都行
     * @param configIdOrSettable config id 或 settable
     */
    selectSettable (configIdOrSettable: string | WidgetSettableDirective) {
        this.selectedSettable = typeof configIdOrSettable=='string' ? this.configSettableMap[configIdOrSettable] : configIdOrSettable
    }
    /** hover */
    enterSettable (configIdOrSettable: string | WidgetSettableDirective) {
        this.hoveringSettable = typeof configIdOrSettable=='string' ? this.configSettableMap[configIdOrSettable] : configIdOrSettable
    }
    leaveSettable () {
        this.hoveringSettable = null
    }

    //TODO: remove
    changeConfig (config) {
        this.onChangeConfigSubject$.next()
    }

}