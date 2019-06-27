import { Component, OnInit } from '@angular/core';
import { Widget } from '@widget/core';


@Widget({
  name:"demo-widget"
})
@Component({
  selector: 'demo-widget-demo-widget',
  template: `   
    <div class="alert alert-primary" role="alert">
    <strong>demo-widget works!</strong>
    </div>
  `,
  styles: []
})
export class DemoWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
