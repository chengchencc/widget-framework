import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-month-filter',
  templateUrl: './month-filter.component.html',
  styleUrls: ['./month-filter.component.scss']
})
export class MonthFilterComponent implements OnInit {

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
  }

}