import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@widget/core';
import { WidgetSettableDirective } from '@widget/core';
import { WidgetContainerComponent } from '@widget/core';

@Component({
  selector: 'design-aside-event',
  templateUrl: './aside-event.component.html',
  styleUrls: ['./aside-event.component.scss']
})
export class AsideEventComponent implements OnInit {

  registed:any[]=[];

  publisher: WidgetContainerComponent;
  subscriber: WidgetContainerComponent;

  s:string;
  p:string;

  constructor(private layoutService: LayoutService) {
    this.layoutService.onSelectSettableItem$.subscribe(s => this.selecteSettableItem(s));

  }

  ngOnInit() {
  }

  selecteSettableItem(directive: WidgetSettableDirective) {
    console.log(directive);

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
