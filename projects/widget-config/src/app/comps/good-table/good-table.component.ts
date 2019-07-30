import { Component, OnInit, Input } from '@angular/core';

export interface TableRow {
  id: string,
  // [key: string]: any
}
export type TableData = TableRow[]
/** key: 头部显示文字 */
export interface TableHeaders {
  [key: string]: string
}

// TODO: 分页
@Component({
  selector: 'app-good-table',
  templateUrl: './good-table.component.html',
  styleUrls: ['./good-table.component.scss']
})
export class GoodTableComponent implements OnInit {

  @Input() tableData: TableData
  @Input() tableHeaders: TableHeaders
  @Input() checkable: boolean = false


  selectedRows: TableRow[] = []

  constructor() { }

  ngOnInit() {
  }

  getHeaderValues () {
    return Object.values(this.tableHeaders)
  }
  getRowValues (row: TableRow) {
    return Object.keys(this.tableHeaders).map(headerKey => row[headerKey])
  }

  handleClickCheckAll () {
    if(this.selectedRows.length < this.tableData.length) {
      this.selectedRows = this.tableData
    } else if (this.selectedRows.length == this.tableData.length) {
      this.selectedRows = []
    }
  }
  handleClickCheckRow (row: TableRow) {
    let i = this.selectedRows.indexOf(row)
    if(i > -1) {
      this.selectedRows.splice(i, 1)
    } else {
      this.selectedRows.push(row)
    }
  }

}
