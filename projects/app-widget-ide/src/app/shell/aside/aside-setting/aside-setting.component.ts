import { Component, OnInit } from '@angular/core';
import { WidgetSettableDirective } from 'projects/widget-core/src/lib/settable/widget-settable.directive';
import { ConfigEditorProp, ConfigEditorPropsContainer } from 'projects/widget-core/src/lib/config-editor/utils';
import { SettingService } from 'projects/widget-core/src/lib/settable/setting.sevice';
import { LayoutSettingsPropListMap } from 'projects/widget-core/src/lib/common/layout-default';
// import { LayoutService } from 'widget-core';
// import { WidgetSettableDirective } from 'widget-core';

@Component({
  selector: 'design-aside-setting',
  templateUrl: './aside-setting.component.html',
  styleUrls: ['./aside-setting.component.scss']
})
export class AsideSettingComponent implements OnInit {

  // TODO: remove
  settings: any = {
    compactType: 'compactUp',
    margin: 100,
    displayGrid: 'always'
  }


  // TODO: 根据当前选中部件/布局，动态改变
  // propList: (ConfigEditorProp | ConfigEditorPropsContainer)[] = gridsterSettingProps
  // TODO: 获取并返回这个属性的值
  getValue = (propName: string) => this.settingService.selectedSettable.config.settings[propName]
  handleChangeValue (payload: { value: string, prop: ConfigEditorProp }) {
    let { config } = this.settingService.selectedSettable
    let { value, prop } = payload

    config.settings[prop.name] = value
    this.settingService.changeConfig(config)
  }

  constructor(
    public settingService: SettingService
  ) {
    // this.settingData = this.settingService.selectedSettable.config.settings
  }
  ngOnInit() {
  }

  getCurPropList () {
    let { type } = this.settingService.selectedSettable.config
    return LayoutSettingsPropListMap[type]
  }

  // selecteSettableItem(item:WidgetSettableDirective){
  //   if(item){
  //     const {style,classes,settings,id} = item.config;
  //     this.settings = settings; //{style:style,classes:classes,settings:settings,id:id};
  //   }
  // }

  // onSettingsChanged(newValue:any){
  //   console.log(newValue);
  // }

}
