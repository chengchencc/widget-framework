import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/core/common/layout.service';
import { WidgetSettableDirective } from 'src/app/core/common/widget-settable.directive';

@Component({
  selector: 'design-aside-setting',
  templateUrl: './aside-setting.component.html',
  styleUrls: ['./aside-setting.component.scss']
})
export class AsideSettingComponent implements OnInit {

settings:any;

  constructor(private layoutService:LayoutService) {    
    this.layoutService.onSelectSettableItem$.subscribe(s=>this.selecteSettableItem(s));
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
