import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DesignerService } from '../../services/designer.service';

@Component({
  selector: 'design-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Input() pageCofnig:PageConfig;

  // @Output() onSave = new EventEmitter();
  // @Output() onPreview = new EventEmitter<boolean>();

  isPc = true;

  registedThemes:{key:string,href:string}[]=[
    {key:"default",href:"default.css"},
    {key:"red",href:"/assets/themes/styles.css"}
  ]

  constructor(public designerService: DesignerService) { }

  ngOnInit() {
  }

  save(){
    this.designerService.save();
  }

  preview(){
    // this.onPreview.emit();
    this.designerService.togglePreview();
  }

  themeChanged(event){
    // console.log(event);
    // document.getElementById("themecss").setAttribute("href",event.target.value);
    // alert("theme changed!!!")
  }

  changeDevice(){
    this.isPc = !this.isPc;
  }

}
