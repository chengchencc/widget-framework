import { Component, OnInit, KeyValueDiffers, KeyValueDiffer, DoCheck } from '@angular/core';

@Component({
  selector: 'app-check-object-change-demo',
  templateUrl: './check-object-change-demo.component.html',
  styleUrls: ['./check-object-change-demo.component.scss']
})
export class CheckObjectChangeDemoComponent implements OnInit,DoCheck {

  private objDiffer: KeyValueDiffer<string, any>;
  private obj: any;
  constructor(private differs: KeyValueDiffers) { 
    this.obj = {name:"name1",value:12};
  }

  ngOnInit() {
    this.objDiffer = this.differs.find(this.obj).create();
  }
  ngDoCheck(): void {
    const changes = this.objDiffer.diff(this.obj);
    if(changes){
      console.log("obj changed :: ",changes);
    }
  }

  changeName(){
    this.obj.value= this.obj.value+1;
    console.log(this.obj);

    // this.ngDoCheck();
  }

}
