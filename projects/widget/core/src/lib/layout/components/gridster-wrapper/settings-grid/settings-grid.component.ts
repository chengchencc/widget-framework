import { Component, OnInit, KeyValueDiffers } from '@angular/core';
import { SettingBase } from '../../settable/setting.base';
import { basename } from 'path';

@Component({
  selector: 'app-settings-grid',
  templateUrl: './settings-grid.component.html',
  styleUrls: ['./settings-grid.component.scss']
})
export class SettingsGridComponent extends SettingBase implements OnInit {


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
