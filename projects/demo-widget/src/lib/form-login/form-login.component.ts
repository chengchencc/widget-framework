import { Component, OnInit } from '@angular/core';
import { Widget } from 'widget-core';
@Widget({
  name:'demo-widget-form-login'
})
@Component({
  selector: 'demo-widget-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
