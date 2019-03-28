import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'design-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() isPreview:boolean;

  @HostBinding("class.is-preview")
  public get previewing() : boolean {
    return this.isPreview;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
