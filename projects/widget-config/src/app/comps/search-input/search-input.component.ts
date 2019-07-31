import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() onSearch = new EventEmitter<string>()

  public searchInput = new FormControl('')

  constructor() {
    // 防抖自动搜索
    this.searchInput.valueChanges
      .pipe(debounceTime(800))
      .subscribe(searchText => {

        console.log('搜索', searchText)
        this.onSearch.emit(searchText.trim())
    })

  }

  ngOnInit() {
  }
  handleClickSearchBtn () {
    this.onSearch.emit(this.searchInput.value.trim())
  }

}
