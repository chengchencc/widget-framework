import { Component, OnInit } from '@angular/core';
import { WidgetManager, RegistedWidgetManifest } from '../../core/common/dynamic/widget-manifest';

@Component({
  selector: 'demo-loader-demo',
  templateUrl: './loader-demo.component.html',
  styleUrls: ['./loader-demo.component.scss']
})
export class LoaderDemoComponent implements OnInit {

  widgetRegisted:any;

  constructor() { }

  ngOnInit() {
    this.widgetRegisted = WidgetManager.getAllRegistries();
    console.log(this.widgetRegisted);
  }

}
