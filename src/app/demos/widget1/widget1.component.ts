import { Component, OnInit } from '@angular/core';
import { Widget } from 'widget-core'; //'projects/widget-core/src/dynamic/widget-manifest';
// import { Widget } from 'widget-core';


// @Widget({
//   name:"demo-widget1"
// })
@Component({
  selector: 'demo-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.scss']
})
export class Widget1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
