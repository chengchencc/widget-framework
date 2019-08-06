import { Component, OnInit } from '@angular/core';
import { SearchableListCategory } from '../../comps/searchable-list/searchable-list.component';

@Component({
  selector: 'app-distribute-tmpl',
  templateUrl: './distribute-tmpl.component.html',
  styleUrls: ['./distribute-tmpl.component.scss']
})
export class DistributeTmplComponent implements OnInit {

  tableHeaders = {
    number: '标号',
    name: '首页名称',
    c: '所在岗位分组'
  }

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