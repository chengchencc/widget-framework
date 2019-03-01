import { Component, OnInit } from '@angular/core';
import { DynamicLoaderService } from '../../../../core/common/dynamic-loader.service';
import { WidgetLoaderManifest } from '../../../../core/common/page.interface';
import { Store } from 'src/app/core/common/store/store';

@Component({
  selector: 'design-sidebar-widget',
  templateUrl: './sidebar-widget.component.html',
  styleUrls: ['./sidebar-widget.component.scss']
})
export class SidebarWidgetComponent implements OnInit {

  widgetManifests:WidgetLoaderManifest[];

  constructor(private dloader:DynamicLoaderService,private store:Store) { }

  async ngOnInit() {
    this.widgetManifests = await this.dloader.loadWidgetLoaderManifest()
  }

  dragStartHandler($event:DragEvent,widget:WidgetLoaderManifest){
    // console.log($event);
    // console.log(widget);
    // $event.dataTransfer.setData("text/plain",JSON.stringify(widget));
    // $event.dataTransfer.dropEffect = 'copy';
  }

}
