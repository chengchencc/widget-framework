import { Component, OnInit } from '@angular/core';
import { WidgetContainerComponent } from 'projects/widget-core/src/lib/layout/components/widget-container/widget-container.component';
import { WidgetSettableDirective } from 'projects/widget-core/src/lib/settable/widget-settable.directive';
import { SettingService } from 'projects/widget-core/src/public-api';

@Component({
  selector: 'design-aside-event',
  templateUrl: './aside-event.component.html',
  styleUrls: ['./aside-event.component.scss']
})
export class AsideEventComponent implements OnInit {

  registed:any[]=[1, 2, 3, 4];

  publisher: WidgetContainerComponent
  subscriber: WidgetContainerComponent;

  s:string;
  p:string;

  constructor(private settingService: SettingService) {
    //TODO:取消注释
    // this.settingService.onSelectSettableItem$.subscribe(s => this.selectSettableItem(s));
    // this.publisher.widgetFactory.inputs
  }

  ngOnInit() {
  }

  selectSettableItem(directive: WidgetSettableDirective) {
    // console.log(directive);

    // if (directive && directive.widget) {

    //   if (!this.subscriber || this.publisher) {
    //     this.subscriber = directive.widget;
    //     this.publisher = null;
    //     console.log("set subscriber::", this.subscriber);
    //   } else {
    //     this.publisher = directive.widget;
    //     console.log("set publisher::", this.publisher);
    //   }
    //   // this.publisher.widgetFactory.inputs;
    //   // this.publisher.widgetFactory.outputs;
    //   // this.subscriber.widgetFactory.inputs;
    //   // this.subscriber.widgetFactory.outputs;
    // }
  }

  subChanged(e) {
    console.log("sub select::",e);
  }

  pubChanged(e) {
    console.log("pub select::",e);

  }
  createOb(){
    // console.log(ss,pp);
    console.log(this.s,this.p);
    this.registed.push({
      sub:this.s,
      pub:this.p
    })

    this.publisher.widgetInstance.instance[this.p].subscribe(s=>{
      console.log("sssssssss");
      this.subscriber.widgetInstance.instance[this.s] = s.msg;
    })

    // this.publisher.widgetInstance.
  }
}
