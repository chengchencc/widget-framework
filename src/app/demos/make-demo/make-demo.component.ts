import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BstoastComponent, BsToastService } from '../bstoast/bstoast.component';

@Component({
  selector: 'app-make-demo',
  templateUrl: './make-demo.component.html',
  styleUrls: ['./make-demo.component.scss']
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
