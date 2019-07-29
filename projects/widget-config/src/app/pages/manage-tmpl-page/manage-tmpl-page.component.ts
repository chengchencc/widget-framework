import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-tmpl-page',
  templateUrl: './manage-tmpl-page.component.html',
  styleUrls: ['./manage-tmpl-page.component.scss']
})
export class ManageTmplPageComponent implements OnInit {

  headerOption = {
    title: '首页模板分配',
    btns: [
      {
        name: '分配首页',
        class: 'btn-primary',
        onClick: () => {}
      }, {
        name: '复制',
        class: '',
        onClick: () => {}
      }, {
        name: '删除',
        class: '',
        onClick: () => {}
      }, {
        name: '取消',
        class: '',
        onClick: () => {}
      }
    ]
  }


  constructor() { }

  ngOnInit() {
  }

}
