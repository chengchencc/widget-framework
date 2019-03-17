import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BstoastComponent, BsToastService } from '../bstoast/bstoast.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-make-demo',
  templateUrl: './make-demo.component.html',
  styleUrls: ['./make-demo.component.scss'],
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
export class MakeDemoComponent implements OnInit {

  constructor(private toastr: ToastrService,private myToastService: BsToastService) { 

  }

  ngOnInit() {
  
    console.log(this);
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showBsToast(){
     this.myToastService.show("this is my toast!!!");
  }

}
