import { Component, OnInit, KeyValueDiffers } from '@angular/core';
import { SettingBase } from '../../../settable/setting.base';

@Component({
  selector: 'widget-gridster-settings',
  templateUrl: './gridster-settings.component.html',
  styleUrls: ['./gridster-settings.component.scss']
})
export class GridsterSettingsComponent extends SettingBase implements OnInit {

  constructor(differs: KeyValueDiffers) {
    super(differs);
  }

  ngOnInit() {
    super.ngOnInit();
  
    this.settingsChange.subscribe(s=>{
      console.log(s);
      console.log(this.settings);
      console.log(s === this.settings);
      if (this.settings.api && this.settings.api.optionsChanged) {
        this.settings.api.optionsChanged();
      }
    })
  }
  

}
