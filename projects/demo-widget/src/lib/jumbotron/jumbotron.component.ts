import { Component, OnInit } from '@angular/core';
import { Widget } from 'widget-core';
@Widget({
  name:'demo-widget-jumbotron'
})
@Component({
  selector: 'demo-widget-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
