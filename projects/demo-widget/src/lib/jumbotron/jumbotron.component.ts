import { Component, OnInit, Input, HostBinding } from '@angular/core';
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

  @Input() color:string;

  public get fcolor() : string {
    return this.color || "black";
  }
  

  constructor() { }

  ngOnInit() {
  }

  resetColor(){
    this.color = "black";
  }

}
