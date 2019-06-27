import { Component, OnInit } from '@angular/core';
import { Widget } from 'widget-core';


@Widget({
  name:"demo-widget-nav"
})
@Component({
  selector: 'demo-widget-demo-widget-nav',
  templateUrl: './demo-widget-nav.component.html',
  styleUrls: ['./demo-widget-nav.component.css']
})
export class DemoWidgetNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
