import { Input, Output, EventEmitter, KeyValueDiffer, KeyValueDiffers, SimpleChanges } from "@angular/core";

export abstract class SettingBase {
  @Input() settings: any;
  @Output() settingsChange = new EventEmitter<any>();

  private settingsDiffer: KeyValueDiffer<string, any>;


  constructor(private differs: KeyValueDiffers) {
  
  }

  ngOnInit(): void {
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
    const changes = this.settingsDiffer.diff(this.settings);
    if(changes){
      console.log("settings changed :: ",changes);
      this.settingsChange.emit(this.settings);
    }
  }

}