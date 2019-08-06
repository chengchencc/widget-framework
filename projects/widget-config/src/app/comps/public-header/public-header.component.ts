import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, TemplateRef, ElementRef } from '@angular/core';

interface HeaderBtn {
  name: string,
  class: string,
  onClick: () => void
}

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PublicHeaderComponent implements OnInit {

  @Input() title: string
  @Input() btns: HeaderBtn[]
  @ContentChild('rightComp') rightComp: TemplateRef<ElementRef>
  @ContentChild('leftComp') leftComp: TemplateRef<ElementRef>

  constructor() { }

  ngOnInit() {
  }

}
