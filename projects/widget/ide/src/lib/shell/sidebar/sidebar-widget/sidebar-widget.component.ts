import { Component, OnInit } from '@angular/core';
import { LoaderService } from '@widget/core';
import { WidgetLoaderManifest } from '@widget/core';
import { Store } from '@widget/core';

@Component({
  selector: 'design-sidebar-widget',
  templateUrl: './sidebar-widget.component.html',
  styleUrls: ['./sidebar-widget.component.scss']
})
export class SidebarWidgetComponent implements OnInit {

  widgetManifests:WidgetLoaderManifest[];

  constructor(private dloader:LoaderService,private store:Store) { }

  async ngOnInit() {
    this.widgetManifests = await this.dloader.loadWidgetLoaderManifest()
    console.log("widget manifests::",this.widgetManifests);
  }

  dragStartHandler($event:DragEvent,widget:WidgetLoaderManifest){
    // console.log($event);
    // console.log(widget);
    // $event.dataTransfer.setData("text/plain",JSON.stringify(widget));
    // $event.dataTransfer.dropEffect = 'copy';
  }

}
