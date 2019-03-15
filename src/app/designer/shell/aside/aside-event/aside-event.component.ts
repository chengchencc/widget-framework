import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/core/common/layout.service';
import { WidgetSettableDirective } from 'src/app/core/common/widget-settable.directive';

@Component({
  selector: 'design-aside-event',
  templateUrl: './aside-event.component.html',
  styleUrls: ['./aside-event.component.scss']
})
export class AsideEventComponent implements OnInit {

  constructor(private layoutService:LayoutService) { 
    this.layoutService.onSelectSettableItem$.subscribe(s=>this.selecteSettableItem(s));

  }

  ngOnInit() {
  }

  selecteSettableItem(directive:WidgetSettableDirective){
    console.log(directive);
  }

}
