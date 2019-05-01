import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'examples';
  setting={
    name:"成晨",
    age:23,
    enable:true,
    style:{
      id:1
    }
  }

  /**
   *
   */
  constructor(private _ngZone:NgZone) {
    
    
  }

  addAge(){
    this.setting.style.id++;
  }
  ChangeNotRelateToChangeDetectionComponent(){
    //this.title="aa";
    this._ngZone.runOutsideAngular(()=>{
      console.log("ChangeNotRelateToChangeDetectionComponent...");
    })
  }
}
