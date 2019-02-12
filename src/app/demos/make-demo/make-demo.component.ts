import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-demo',
  templateUrl: './make-demo.component.html',
  styleUrls: ['./make-demo.component.scss']
})
export class MakeDemoComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  
    console.log(this);
  }

}
