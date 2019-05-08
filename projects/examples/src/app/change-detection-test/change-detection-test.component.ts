import { Component, OnInit, KeyValueDiffers, OnChanges, DoCheck, SimpleChanges, Input, Output, EventEmitter, KeyValueDiffer, IterableDiffers, IterableDiffer } from '@angular/core';
import { Subject } from 'rxjs';

export interface ILayout{
  path:string,
  content:ILayout[]
}


@Component({
  selector: 'app-change-detection-test',
  templateUrl: './change-detection-test.component.html',
  styleUrls: ['./change-detection-test.component.scss']
})
export class ChangeDetectionTestComponent implements OnInit,OnChanges,DoCheck {

  @Input() settings: any;
  @Output() settingsChange = new EventEmitter<any>();

  private settingsDiffer: KeyValueDiffer<string, any>;

  public _config:ILayout;
  private _configKeyValueDiffer:KeyValueDiffer<string,any>;
  private _configContentIterableDiffer:IterableDiffer<ILayout>;

  public changes:Subject<any>;

/**
 * 结论：
 * KeyValueDiffers 不能检测对象中包含子对象的子对象变化，子对象的监听，可以通过建立多个KeyValueDiffer来实现，
 * 参照https://stackoverflow.com/questions/35748484/detect-changes-in-objects-inside-array-in-angular2
 * @param _keyValueDiffers 
 */
  constructor(private _keyValueDiffers: KeyValueDiffers,private _iterableDiffers:IterableDiffers) {

    this._config = {
      path:"0",
      content:[
        {
          path:"0_0",
          content:[]

        },
        {
          path:'0_1',
          content:[]
        }
      ]
    }
    this.changes = new Subject<any>();
   }

  ngOnInit() {
    this.settingsDiffer = this._keyValueDiffers.find(this.settings).create();

    this._configKeyValueDiffer = this._keyValueDiffers.find(this._config).create();
    this._configContentIterableDiffer = this._iterableDiffers.find(this._config.content).create();

    this.changes.subscribe((change)=>{
      console.log("检测到发生改变，变化检查中：");
      const kvchange = this._configKeyValueDiffer.diff(this._config);
      if(kvchange){
        console.log("检测到KeyValue变化:",kvchange);
      }
      
      const iterableChagne = this._configContentIterableDiffer.diff(this._config.content);
      if(iterableChagne){
        console.log('检测到Iterable变化:',iterableChagne);
      }


    })
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

  changePath(){
    this._config.path = ''+this.i;
    this.i++;
    this.changes.next(this._config);
  }

  i=1;
  addContent(){
    this._config.content.push({
      path:'0_1',
      content:[]
    });
    this.changes.next(this._config);
  }


}
