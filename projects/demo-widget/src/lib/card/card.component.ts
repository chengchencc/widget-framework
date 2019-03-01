import { Component, OnInit } from '@angular/core';
import { Widget } from 'widget-core';
@Widget({
  name:'demo-widget-card'
})
@Component({
  selector: 'demo-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
