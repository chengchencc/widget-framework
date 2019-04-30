import { Component } from '@angular/core';

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

  addAge(){
    this.setting.style.id++;
  }

}
