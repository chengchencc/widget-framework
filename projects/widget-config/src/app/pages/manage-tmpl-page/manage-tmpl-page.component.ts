import { Component, OnInit } from '@angular/core';
import { SearchableListCategory } from '../../comps/searchable-list/searchable-list.component';

const tableDataMock = [
  {
    id: 1,
    number: 'dfds',
    name: '销售专员首页',
    c: '供应链'
  }, {
    id: 1,
    number: 'dfds',
    name: '销售专员首页',
    c: '供应链'
  }, {
    id: 1,
    number: 'dfds',
    name: '销售专员首页',
    c: '供应链'
  }, {
    id: 1,
    number: 'dfds',
    name: '销售专员首页',
    c: '供应链'
  }, {
    id: 1,
    number: 'dfds',
    name: '销售专员首页',
    c: '供应链'
  }, 
]

@Component({
  selector: 'app-manage-tmpl-page',
  templateUrl: './manage-tmpl-page.component.html',
  styleUrls: ['./manage-tmpl-page.component.scss']
})
export class ManageTmplPageComponent implements OnInit {

  tableDataMock = tableDataMock
  tableHeaders = {
    number: '标号',
    name: '首页名称',
    c: '所在岗位分组'
  }

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
      name: '财务控制2'
    }, {
      id: 'a',
      name: '财务控制3'
    }]
  }]


  constructor() { }

  ngOnInit() {
  }

}
