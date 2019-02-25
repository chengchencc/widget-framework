import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'demo-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {

  @ViewChild("myIframe")
  currentIframe:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onDrag(event:DragEvent){

    console.log(event);

    
const movePosition = {
  x:event.x,
  y:event.y
}




    this.currentIframe.nativeElement.contentWindow.postMessage({
      type: "MOUSE_MOVE",
      payload: movePosition //JSON.parse(JSON.stringify(event))
    },"*");
  }
}
