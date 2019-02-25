import { Component, OnInit, TemplateRef, ViewContainerRef, ElementRef, ViewChild, Injectable, Input } from '@angular/core';
import { GlobalPositionStrategy, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal, ComponentPortal } from '@angular/cdk/portal';
import { DemoModule } from '../demo.module';


@Component({
  selector: 'app-bstoast',
  templateUrl: './bstoast.component.html',
  styleUrls: ['./bstoast.component.scss']
})
export class BstoastComponent implements OnInit {

  @Input() content:string;

  constructor( private viewContainerRef: ViewContainerRef ) {

  }

  ngOnInit() {
  }

  show(){
  }

}

@Injectable()
export class BsToastService {

  private overlayRef: OverlayRef;
  private positionStrategy = new GlobalPositionStrategy();
  private startPosition?: { x: number; y: number };

  constructor(private overlay: Overlay) {
        
  }

  show( msg:string ){

    // this.positionStrategy.

    this.overlayRef = this.overlay.create({
      positionStrategy: this.positionStrategy
    });

    const componentRef = this.overlayRef.attach(new ComponentPortal(BstoastComponent));

    componentRef.instance.content=msg;

    setTimeout(() => {
      this.overlayRef.dispose();
    }, 2000);
  }

}