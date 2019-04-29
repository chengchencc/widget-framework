import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'design-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() isPreview:boolean;

  //TODO:后期pageId需要通过参数传入，或者通过路由获取
  pageId ="1000";

  @HostBinding("class.is-preview")
  public get previewing() : boolean {
    return this.isPreview;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
