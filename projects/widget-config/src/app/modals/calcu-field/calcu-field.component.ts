import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-calcu-field',
  templateUrl: './calcu-field.component.html',
  styleUrls: ['./calcu-field.component.scss']
})
export class CalcuFieldComponent implements OnInit {

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}
