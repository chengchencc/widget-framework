import { Component, OnInit, KeyValueDiffers, OnChanges, DoCheck, SimpleChanges, Input, Output, EventEmitter, KeyValueDiffer } from '@angular/core';

@Component({
  selector: 'app-change-detection-test',
  templateUrl: './change-detection-test.component.html',
  styleUrls: ['./change-detection-test.component.scss']
})
export class ChangeDetectionTestComponent implements OnInit,OnChanges,DoCheck {

  @Input() settings: any;
  @Output() settingsChange = new EventEmitter<any>();

  private settingsDiffer: KeyValueDiffer<string, any>;

/**
 * 结论：
 * KeyValueDiffers 不能检测对象中包含子对象的子对象变化，子对象的监听，可以通过建立多个KeyValueDiffer来实现，
 * 参照https://stackoverflow.com/questions/35748484/detect-changes-in-objects-inside-array-in-angular2
 * @param differs 
 */
  constructor(private differs: KeyValueDiffers) { }

  ngOnInit() {
    this.settingsDiffer = this.differs.find(this.settings).create();
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
    // this.settingsDiffer = this.differs.find(this.settings).create();
    
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("run ng do check!");
    const changes = this.settingsDiffer.diff(this.settings);
    
    if(changes){
    
      // changes.forEachItem((record)=>{
      //   console.log(record);
      // })

      changes.forEachAddedItem((record)=>{
        console.log("added",record);
      })

      changes.forEachChangedItem((record)=>{
        console.log("changed",record);
      })
      changes.forEachRemovedItem((record)=>{
        console.log("removed",record);
      })

      // console.log("settings changed :: ",changes);
      this.settingsChange.emit(this.settings);
    }
  }

  addAge(){
    this.settings.age++;
  }

  private index = 0;

  addProps(){
    this.settings["prop"+ this.index]="prop"+this.index;
    this.index++;
  }

}
