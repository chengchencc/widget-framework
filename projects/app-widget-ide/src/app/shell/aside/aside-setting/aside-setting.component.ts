import { Component, OnInit } from '@angular/core';
import { WidgetSettableDirective } from 'projects/widget-core/src/lib/settable/widget-settable.directive';
// import { LayoutService } from 'widget-core';
// import { WidgetSettableDirective } from 'widget-core';

@Component({
  selector: 'design-aside-setting',
  templateUrl: './aside-setting.component.html',
  styleUrls: ['./aside-setting.component.scss']
})
export class AsideSettingComponent implements OnInit {

  settings: any

  constructor() {    
   }
  ngOnInit() {
  }

  selecteSettableItem(item:WidgetSettableDirective){
    if(item){
      const {style,classes,settings,id} = item.config;
      this.settings = settings; //{style:style,classes:classes,settings:settings,id:id};
    }
  }

  onSettingsChanged(newValue:any){
    console.log(newValue);
  }

}
