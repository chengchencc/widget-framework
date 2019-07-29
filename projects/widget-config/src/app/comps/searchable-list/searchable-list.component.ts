import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import {  } from 'events';


export interface SearchableListItem { id: string, name: string }
export interface SearchableListCategory {
  categoryName: string,
  children: SearchableListItem[]
}
// type A = 

@Component({
  selector: 'app-searchable-list',
  templateUrl: './searchable-list.component.html',
  styleUrls: ['./searchable-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchableListComponent implements OnInit {

  @Input() categorySelectable: boolean = false
  @Input() itemSelectable: boolean = true
  // @Input() defaultSelected: SearchableListItem | SearchableListCategory
  @Input() categoryList: SearchableListCategory[]

  @Output() onSelect = new EventEmitter<SearchableListItem | SearchableListCategory>()

  public curSelection: SearchableListItem | SearchableListCategory

  constructor() { }

  ngOnInit() {
  }

  handleClickCategory (category: SearchableListCategory) {
    if(this.categorySelectable) {
      this.curSelection = category
      this.onSelect.emit(category)
    }
  }
  handleClickItem (item: SearchableListItem) {
    if(this.itemSelectable) {
      this.curSelection = item
      this.onSelect.emit(item)
    }
  }

}
