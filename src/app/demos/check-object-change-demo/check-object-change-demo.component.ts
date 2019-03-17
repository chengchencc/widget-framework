import { Component, OnInit, KeyValueDiffers, KeyValueDiffer, DoCheck } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-check-object-change-demo',
  templateUrl: './check-object-change-demo.component.html',
  styleUrls: ['./check-object-change-demo.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class CheckObjectChangeDemoComponent implements OnInit,DoCheck {

  private objDiffer: KeyValueDiffer<string, any>;
  private obj: any;
  isShow:boolean=true;
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

  animate(){
    this.isShow = !this.isShow;
  }


}
