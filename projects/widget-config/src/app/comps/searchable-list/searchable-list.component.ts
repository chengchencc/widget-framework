import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
export interface SearchableListItem { id: string, name: string }
export interface SearchableListCategory {
  categoryName: string,
  children: SearchableListItem[]
}

@Component({
  selector: 'app-searchable-list',
  templateUrl: './searchable-list.component.html',
  styleUrls: ['./searchable-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchableListComponent implements OnInit {

  @Input() categorySelectable: boolean = false
  @Input() itemSelectable: boolean = true
  // @Input() defaultSelected: SearchableListItem | SearchableListCategory
  @Input() categoryList: SearchableListCategory[]

  @Output() onSelect = new EventEmitter<SearchableListItem | SearchableListCategory>()

  public searchText: string = ''
  public curSelection: SearchableListItem | SearchableListCategory

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  categoryListAfterSearch () {
    let displayCategoryList: SearchableListCategory[] = []

    this.categoryList.forEach(category => {
      if(category.categoryName.includes(this.searchText)) {
        displayCategoryList.push(category)
      } else {
        let matchItemList = category.children
          .filter(item => item.name.includes(this.searchText))
        if(matchItemList.length > 0) {
          displayCategoryList.push({
            categoryName: category.categoryName,
            children: matchItemList
          })
        }
      }
    })
    return displayCategoryList
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
  handleSearch (searchText: string) {
    this.searchText = searchText
    this.changeDetector.detectChanges()
  }

}
