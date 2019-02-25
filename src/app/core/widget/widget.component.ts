import { Component, OnInit, Input } from '@angular/core';
import { WidgetInfo } from '../common/page.interface';

@Component({
  selector: 'widget-container',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetContainerComponent implements OnInit {

@Input() info:WidgetInfo;

  constructor() { }

  ngOnInit() {
  }

}
