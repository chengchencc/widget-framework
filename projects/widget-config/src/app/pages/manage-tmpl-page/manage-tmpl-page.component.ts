import { Component, OnInit } from '@angular/core';
import { SearchableListCategory } from '../../comps/searchable-list/searchable-list.component';

@Component({
  selector: 'app-manage-tmpl-page',
  templateUrl: './manage-tmpl-page.component.html',
  styleUrls: ['./manage-tmpl-page.component.scss']
})
export class ManageTmplPageComponent implements OnInit {

  headerOption = {
    title: '首页模板管理',
    btns: [
      {
        name: '新增首页',
        class: 'btn-primary',
        onClick: () => {}
      }, {
        name: '编辑',
        class: '',
        onClick: () => {}
      }, {
        name: '复制',
        class: '',
        onClick: () => {}
      }, {
        name: '查看',
        class: '',
        onClick: () => {}
      }, {
        name: '删除',
        class: '',
        onClick: () => {}
      }
    ]
  }

  roleCategoryList: SearchableListCategory[] = [{
    categoryName: '所有岗位',
    children: [{
      id: 'a',
      name: '财务控制'
    }, {
      id: 'a',
      name: '财务控制'
    }, {
      id: 'a',
      name: '财务控制'
    }]
  }]


  constructor() { }

  ngOnInit() {
  }

}
