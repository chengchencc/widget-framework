//ngx
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//
import { DesignerComponent } from './designer.component';

//common vendors
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';
// core
import { CoreModule } from '@widget/core';
// import { DraggableModule } from '@widget/core';

//child component
import { HeaderComponent } from './shell/header/header.component';
import { SidebarComponent } from './shell/sidebar/sidebar.component';
import { ContentComponent } from './shell/content/content.component';
import { FooterComponent } from './shell/footer/footer.component';
import { AsideComponent } from './shell/aside/aside.component';
import { SidebarInfoComponent } from './shell/sidebar/sidebar-info/sidebar-info.component';
import { SidebarLayoutComponent } from './shell/sidebar/sidebar-layout/sidebar-layout.component';
import { SidebarWidgetComponent } from './shell/sidebar/sidebar-widget/sidebar-widget.component';

//services
import { DesignerService } from './services/designer.service';
import { AsideStyleComponent } from './shell/aside/aside-style/aside-style.component';
import { AsideSettingComponent } from './shell/aside/aside-setting/aside-setting.component';
import { AsideStructureComponent, AsideStructureTreeComponent } from './shell/aside/aside-structure/aside-structure.component';
import { AsideEventComponent } from './shell/aside/aside-event/aside-event.component';

import { Widget_Core_Config_Token, WidgetCoreConfig } from '@widget/core';
import { ToastrModule } from 'ngx-toastr';

// import { OverlayModule } from "@angular/cdk/overlay";

const widgetCoreConfig:WidgetCoreConfig={
  evn:"design",
  widgetManifestUrl:"aaa"
}


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule.forRoot(),
    CoreModule,
    // DraggableModule,
    NgSelectModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right'
      // positionClass: 'toast-bottom-center'
      // positionClass: 'toast-bottom-full-width'
    })
  ],
  declarations: [
    DesignerComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    AsideComponent,
    SidebarInfoComponent,
    SidebarLayoutComponent,
    SidebarWidgetComponent,
    AsideStyleComponent,
    AsideSettingComponent,
    AsideStructureComponent,
    AsideStructureTreeComponent,
    AsideEventComponent
  ],
  exports:[
    DesignerComponent
  ],
  providers:[
    DesignerService,
    {provide:Widget_Core_Config_Token,useValue:widgetCoreConfig}

  ]
})
export class IdeModule { }
