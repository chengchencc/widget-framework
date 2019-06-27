import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() settings:any = {
    title:"Card Title",
    subtitle:"Sub Title"
  };
  @Output() titleClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onTitleClick(e){
    this.titleClick.emit({
      event:e,
      msg:"red"
    });
  }
}


